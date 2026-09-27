"""
Spider-Man Portfolio Backend Server
Provides static asset serving, contact API (/api/contact), configuration API (/api/config), and health checks.
Runs out of the box with Python 3 standard library (no pip packages needed).
"""

import http.server
import socketserver
import os
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from urllib.parse import parse_qs, urlparse

PORT = int(os.environ.get("PORT", 3000))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
INQUIRIES_FILE = os.path.join(DATA_DIR, "inquiries.json")
CONFIG_FILE = os.path.join(BASE_DIR, "config.json")
ENV_FILE = os.path.join(BASE_DIR, ".env")

# Ensure data directory and inquiries.json exist
os.makedirs(DATA_DIR, exist_ok=True)
if not os.path.exists(INQUIRIES_FILE):
    with open(INQUIRIES_FILE, "w", encoding="utf-8") as f:
        json.dump([], f, indent=2)

# Simple .env parser
def load_env():
    env = {}
    if os.path.exists(ENV_FILE):
        with open(ENV_FILE, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip().strip("'\"")
    return env

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def _set_json_headers(self, status_code=200):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_json_headers(200)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/api/health":
            self._set_json_headers(200)
            payload = {
                "status": "online",
                "message": "Spider-Man Portfolio backend is operational",
                "timestamp": datetime.now().isoformat(),
                "runtime": "Python " + os.sys.version.split()[0]
            }
            self.wfile.write(json.dumps(payload, indent=2).encode("utf-8"))
            return

        if path == "/api/config":
            if os.path.exists(CONFIG_FILE):
                try:
                    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                        cfg = json.load(f)
                    self._set_json_headers(200)
                    self.wfile.write(json.dumps(cfg, indent=2).encode("utf-8"))
                    return
                except Exception as e:
                    print("Error reading config.json:", e)
            
            self._set_json_headers(500)
            self.wfile.write(json.dumps({"error": "Failed to read config.json"}).encode("utf-8"))
            return

        # Fallback to serving static files or index.html
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/api/contact":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)

            try:
                data = json.loads(body.decode("utf-8"))
            except Exception:
                self._set_json_headers(400)
                self.wfile.write(json.dumps({"error": "Invalid JSON body"}).encode("utf-8"))
                return

            name = (data.get("name") or "").strip()
            email = (data.get("email") or "").strip()
            engagement = (data.get("engagement") or "General Inquiry").strip()
            message = (data.get("message") or "").strip()

            # Validation
            if not name:
                self._set_json_headers(400)
                self.wfile.write(json.dumps({"error": "Name is required."}).encode("utf-8"))
                return
            if not email or "@" not in email:
                self._set_json_headers(400)
                self.wfile.write(json.dumps({"error": "A valid email address is required."}).encode("utf-8"))
                return
            if not message:
                self._set_json_headers(400)
                self.wfile.write(json.dumps({"error": "Message content is required."}).encode("utf-8"))
                return

            inquiry_id = f"inq_{int(datetime.now().timestamp() * 1000)}"
            inquiry_record = {
                "id": inquiry_id,
                "name": name,
                "email": email,
                "engagement": engagement,
                "message": message,
                "ip": self.client_address[0],
                "userAgent": self.headers.get("User-Agent", "unknown"),
                "receivedAt": datetime.now().isoformat()
            }

            # 1. Save to data/inquiries.json
            try:
                current_records = []
                if os.path.exists(INQUIRIES_FILE):
                    with open(INQUIRIES_FILE, "r", encoding="utf-8") as f:
                        current_records = json.load(f)
                current_records.insert(0, inquiry_record)
                with open(INQUIRIES_FILE, "w", encoding="utf-8") as f:
                    json.dump(current_records, f, indent=2)
                print(f"[Contact] New inquiry logged from {name} <{email}> ({engagement})")
            except Exception as e:
                print("Failed to write to inquiries.json:", e)

            # 2. Email dispatch if SMTP is configured
            env = load_env()
            email_sent = False
            smtp_host = env.get("SMTP_HOST")
            smtp_user = env.get("SMTP_USER")
            smtp_pass = env.get("SMTP_PASS")
            smtp_port = int(env.get("SMTP_PORT", "465"))
            recipient = env.get("RECIPIENT_EMAIL") or smtp_user

            if smtp_host and smtp_user and smtp_pass:
                try:
                    msg = MIMEMultipart("alternative")
                    msg["Subject"] = f"[Portfolio Inquiry] {engagement} from {name}"
                    msg["From"] = f"Portfolio Contact <{smtp_user}>"
                    msg["To"] = recipient
                    msg["Reply-To"] = email

                    text_body = f"Name: {name}\nEmail: {email}\nEngagement: {engagement}\nDate: {inquiry_record['receivedAt']}\n\nMessage:\n{message}"
                    html_body = f"""
                    <div style="font-family: Arial, sans-serif; background: #0b0d14; color: #f3f4f8; padding: 24px; border-radius: 12px;">
                      <h2 style="color: #e8262c; border-bottom: 1px solid #333; padding-bottom: 8px;">New Portfolio Inquiry</h2>
                      <p><strong>Name:</strong> {name}</p>
                      <p><strong>Email:</strong> <a href="mailto:{email}" style="color: #2e5bff;">{email}</a></p>
                      <p><strong>Engagement:</strong> {engagement}</p>
                      <p><strong>Received:</strong> {inquiry_record['receivedAt']}</p>
                      <hr style="border: 0; border-top: 1px solid #333; margin: 16px 0;" />
                      <p><strong>Message:</strong></p>
                      <blockquote style="background: #151926; padding: 14px; border-left: 3px solid #e8262c; margin: 0; color: #d0d4e0;">
                        {message.replace(chr(10), '<br>')}
                      </blockquote>
                    </div>
                    """
                    msg.attach(MIMEText(text_body, "plain"))
                    msg.attach(MIMEText(html_body, "html"))

                    if smtp_port == 465:
                        with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10) as server:
                            server.login(smtp_user, smtp_pass)
                            server.sendmail(smtp_user, [recipient], msg.as_string())
                    else:
                        with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
                            server.starttls()
                            server.login(smtp_user, smtp_pass)
                            server.sendmail(smtp_user, [recipient], msg.as_string())

                    email_sent = True
                    print(f"[Contact] Email successfully sent to {recipient}")
                except Exception as mail_err:
                    print("[Contact] SMTP notification note:", mail_err)

            self._set_json_headers(200)
            response_payload = {
                "success": True,
                "message": "Transmission received! Thank you for getting in touch.",
                "inquiryId": inquiry_id,
                "emailSent": email_sent
            }
            self.wfile.write(json.dumps(response_payload, indent=2).encode("utf-8"))
            return

        self._set_json_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

def run():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PortfolioHTTPRequestHandler) as httpd:
        print("================================================")
        print("[*] Spider-Man Portfolio Backend Running!")
        print(f"[*] URL: http://localhost:{PORT}")
        print(f"[*] Local Inquiries: ./data/inquiries.json")
        print("================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
if __name__ == "__main__":
    run()
