const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets and index.html
app.use(express.static(path.join(__dirname)));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
const inquiriesFile = path.join(dataDir, 'inquiries.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(inquiriesFile)) {
  fs.writeFileSync(inquiriesFile, JSON.stringify([], null, 2), 'utf-8');
}

// -------------------------------------------------------------
// API: Health Check
// -------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'Spider-Man Portfolio backend is operational',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// -------------------------------------------------------------
// API: Get Configuration / Profile Data
// -------------------------------------------------------------
app.get('/api/config', (req, res) => {
  const configFile = path.join(__dirname, 'config.json');
  if (fs.existsSync(configFile)) {
    try {
      const configData = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
      return res.status(200).json(configData);
    } catch (err) {
      console.error('Error reading config.json:', err);
    }
  }
  res.status(500).json({ error: 'Configuration file could not be loaded' });
});

// -------------------------------------------------------------
// API: Contact Form Submission
// -------------------------------------------------------------
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, engagement } = req.body;

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Name is required.' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    const sanitizedInquiry = {
      id: 'inq_' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      engagement: engagement ? engagement.trim() : 'Unspecified',
      message: message.trim(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown',
      userAgent: req.headers['user-agent'] || 'unknown',
      receivedAt: new Date().toISOString()
    };

    // 1. Always log to local inquiries.json storage
    try {
      const currentInquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf-8') || '[]');
      currentInquiries.unshift(sanitizedInquiry);
      fs.writeFileSync(inquiriesFile, JSON.stringify(currentInquiries, null, 2), 'utf-8');
      console.log(`[Contact] New inquiry logged from ${sanitizedInquiry.name} <${sanitizedInquiry.email}>`);
    } catch (saveErr) {
      console.error('Failed to save inquiry to file:', saveErr);
    }

    // 2. Email dispatch if SMTP is configured
    let emailSent = false;
    if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_HOST) {
      try {
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '465', 10),
          secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        const recipient = process.env.RECIPIENT_EMAIL || process.env.SMTP_USER;

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: recipient,
          replyTo: sanitizedInquiry.email,
          subject: `[Portfolio Inquiry] ${sanitizedInquiry.engagement} from ${sanitizedInquiry.name}`,
          text: `Name: ${sanitizedInquiry.name}\nEmail: ${sanitizedInquiry.email}\nEngagement: ${sanitizedInquiry.engagement}\nDate: ${sanitizedInquiry.receivedAt}\n\nMessage:\n${sanitizedInquiry.message}`,
          html: `
            <div style="font-family: Arial, sans-serif; background: #0b0d14; color: #f3f4f8; padding: 24px; border-radius: 12px;">
              <h2 style="color: #e8262c; border-bottom: 1px solid #333; padding-bottom: 8px;">New Portfolio Inquiry</h2>
              <p><strong>Name:</strong> ${sanitizedInquiry.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${sanitizedInquiry.email}" style="color: #2e5bff;">${sanitizedInquiry.email}</a></p>
              <p><strong>Engagement Type:</strong> ${sanitizedInquiry.engagement}</p>
              <p><strong>Received:</strong> ${sanitizedInquiry.receivedAt}</p>
              <hr style="border: 0; border-top: 1px solid #333; margin: 16px 0;" />
              <p><strong>Message:</strong></p>
              <blockquote style="background: #151926; padding: 14px; border-left: 3px solid #e8262c; margin: 0; color: #d0d4e0;">
                ${sanitizedInquiry.message.replace(/\n/g, '<br>')}
              </blockquote>
            </div>
          `
        });
        emailSent = true;
        console.log(`[Contact] Email successfully sent to ${recipient}`);
      } catch (mailErr) {
        console.warn('[Contact] SMTP email sending failed (inquiry was still saved to inquiries.json):', mailErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Transmission received! Thank you for getting in touch.',
      inquiryId: sanitizedInquiry.id,
      emailSent
    });

  } catch (error) {
    console.error('Contact endpoint error:', error);
    res.status(500).json({ error: 'Server error processing contact request.' });
  }
});

// Fallback route to serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`================================================`);
  console.log(`🕷️ Spider-Man Portfolio Server running!`);
  console.log(`🚀 URL: http://localhost:${PORT}`);
  console.log(`🚀 Local IP: http://127.0.0.1:${PORT}`);
  console.log(`📁 Inquiries storage: ./data/inquiries.json`);
  console.log(`================================================`);
});
