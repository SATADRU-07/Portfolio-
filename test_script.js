
/* =========================================================
   PORTFOLIO DATA
========================================================= */
const ARSENAL_DATA = [
  { 
    cls: 'v', 
    name: "Languages & Core Systems", 
    desc: "Foundational programming languages and algorithms for high-performance computation.", 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></svg>`, 
    tech: ["Python", "Java", "C++", "DSA"] 
  },
  { 
    cls: 'c', 
    name: "Full-Stack Web & Backend", 
    desc: "Modern responsive web applications, resilient REST APIs, and server backends.", 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>`, 
    tech: ["JavaScript", "TypeScript", "React / Next.js", "Node.js & Express"] 
  },
  { 
    cls: 'g', 
    name: "AI / ML & Infrastructure", 
    desc: "Artificial intelligence models, structured databases, and deployment pipelines.", 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`, 
    tech: ["Machine Learning & AI", "SQL & PostgreSQL", "Docker", "Git & GitHub"] 
  },
];

const PROJECTS_DATA = [
  { 
    name: "Sharodshav — Optimal Pandal Navigation", 
    category: "Full-Stack Geospatial & AI Platform", 
    tag: "Full-Stack", 
    status: "Live", 
    desc: "An intelligent crowd-routing and pandal-hopping web platform designed for Kolkata Durga Puja. Implements zone-based pathfinding across North, Central, and South Kolkata, day-by-day festival itineraries from Shashti to Dashami, real-time geolocation distance tracking, and an integrated 'Pujo AI' smart conversational assistant.", 
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Maps", "Pujo AI", "Geolocation API"], 
    github: "https://github.com/SATADRU-07/Sharodshav", 
    demo: "https://github.com/SATADRU-07/Sharodshav",
    image: "assets/projects/sharodshav.png"
  },
  { 
    name: "SkillGrad — Bridging Skills and Industry", 
    category: "Career Tech & Opportunity Marketplace", 
    tag: "Full-Stack", 
    status: "Live", 
    desc: "A talent matchmaking and internship discovery platform that turns student skills into paid industry experiences. Connects 3,500+ students with verified company projects, tailored skill assessments, recruiter hiring portals, and real-world internship opportunities.", 
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "PostgreSQL"], 
    github: "https://github.com/SATADRU-07/SkillGrad", 
    demo: "https://github.com/SATADRU-07/SkillGrad",
    image: "assets/projects/skillgrad.png"
  }
];

const TIMELINE_DATA = [
  { 
    date: "2025 – PRESENT", 
    title: "B.Tech in Computer Science & Engineering (AIML)", 
    org: "Techno India University", 
    desc: "Current SGPA: 8.1. Deepening expertise in Artificial Intelligence, Machine Learning models, Data Structures, and full-stack software systems." 
  },
  { 
    date: "2025 – 2026", 
    title: "Hackathon Competitor & Podium Finisher", 
    org: "Competitive Hackathons & Innovation Sprints", 
    desc: "Competed in 4 hackathons with 3 podium finishes and honors, designing AI-driven architectures and production-ready applications." 
  },
  { 
    date: "2012 – 2025", 
    title: "Higher Secondary & Secondary Education", 
    org: "St. Stephen's School (CISCE)", 
    desc: "Achieved 90% in ISC and 87% in ICSE. Developed active skills in public speaking, photography, and competitive football." 
  },
  { 
    date: "2024 – PRESENT", 
    title: "Open Source Builder & Developer", 
    org: "Software & AI Ecosystem", 
    desc: "Engineering high-performance web applications, algorithmic utilities, and machine learning prototypes using Python, C++, and Next.js." 
  },
];

const ACHIEVEMENTS_DATA = [
  { 
    cls: 'v', 
    cat: "24-HOUR HACKATHON · 2ND PLACE", 
    title: "HacKRIT @ DevX 2.0 (GDG TIU)", 
    org: "Team Tri Stack Overflow · GDG On Campus TIU",
    date: "2026",
    desc: "Secured 2nd Place out of competing developer teams for exceptional technical endurance, rapid prototyping, and architecting an innovative software solution within 24 hours.",
    certImg: "assets/certificates/hackrit-devx.png"
  },
  { 
    cls: 'c', 
    cat: "GLOBAL SOCIAL VENTURE · 2ND RUNNERS UP", 
    title: "Hult Prize at Techno India University", 
    org: "Hult Prize Foundation · School of the Future",
    date: "Feb 2026",
    desc: "Awarded 2nd Runners Up for pitching and architecting a sustainable, impact-driven venture solving pressing global challenges through tech and social enterprise.",
    certImg: "assets/certificates/hult-prize.png"
  },
  { 
    cls: 'g', 
    cat: "INNOVATION SPRINT · TOP TEAM", 
    title: "Sandbox CCU Challenge", 
    org: "XEN CLUB · else/play & Rebalance Institute",
    date: "Aug – Sept 2025",
    desc: "Awarded Certificate of Excellence as a top-performing team in a week-long high-intensity product innovation and design sprint building solutions for urban challenges.",
    certImg: "assets/certificates/sandbox-ccu.png"
  },
  { 
    cls: 'v', 
    cat: "GOOGLE CLOUD · TOP 25 FINISHER", 
    title: "2025 Cloud Study Jams", 
    org: "Google Developer Groups On Campus",
    date: "Oct – Nov 2025",
    desc: "Earned a spot in the Top 25 across the university cohort by mastering hands-on Google Cloud computing tracks, architecture design, and infrastructure deployment.",
    certImg: "assets/certificates/cloud-study-jams.png"
  },
];

const CERTIFICATIONS_DATA = [
  {
    name: "Develop Gen AI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    type: "Skill Badge · Generative AI",
    date: "Earned Oct 26, 2025 PDT",
    cls: "v"
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    type: "Skill Badge · Vertex AI",
    date: "Earned Oct 26, 2025 PDT",
    cls: "c"
  },
  {
    name: "Level 3: Generative AI",
    issuer: "Google Cloud Arcade",
    type: "Arcade Milestone · GenAI",
    date: "Earned Oct 31, 2025 PDT",
    cls: "v"
  },
  {
    name: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
    issuer: "Google Cloud",
    type: "Completion Badge",
    date: "Earned Jul 20, 2026 EDT",
    cls: "g"
  },
  {
    name: "Build a Secure Google Cloud Network",
    issuer: "Google Cloud",
    type: "Skill Badge · Intermediate",
    date: "Earned Jun 30, 2026 EDT",
    cls: "c"
  },
  {
    name: "Build Serverless Applications with Cloud Run Functions",
    issuer: "Google Cloud",
    type: "Skill Badge · Serverless",
    date: "Earned Oct 26, 2025 PDT",
    cls: "v"
  },
  {
    name: "Implementing Cloud Load Balancing for Compute Engine",
    issuer: "Google Cloud",
    type: "Skill Badge · Introductory",
    date: "Earned Jul 2, 2026 EDT",
    cls: "c"
  },
  {
    name: "Set Up an App Dev Environment on Google Cloud",
    issuer: "Google Cloud",
    type: "Skill Badge · Introductory",
    date: "Earned Jul 1, 2026 EDT",
    cls: "g"
  },
  {
    name: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    type: "Skill Badge · Smart Analytics",
    date: "Earned Jun 30, 2026 EDT",
    cls: "v"
  },
  {
    name: "Google Cloud Computing Foundations: Networking and Security in Google Cloud",
    issuer: "Google Cloud",
    type: "Completion Badge",
    date: "Earned Jun 12, 2026 EDT",
    cls: "c"
  },
  {
    name: "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
    issuer: "Google Cloud",
    type: "Completion Badge",
    date: "Earned Jun 12, 2026 EDT",
    cls: "g"
  },
  {
    name: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    issuer: "Google Cloud",
    type: "Completion Badge",
    date: "Earned Jun 11, 2026 EDT",
    cls: "c"
  },
  {
    name: "Implement Speech and Language Solutions with Pre-trained APIs",
    issuer: "Google Cloud",
    type: "Skill Badge · AI / NLP",
    date: "Earned Oct 26, 2025 PDT",
    cls: "v"
  },
  {
    name: "Analyze Speech and Language with Google APIs",
    issuer: "Google Cloud",
    type: "Skill Badge · AI APIs",
    date: "Earned Oct 26, 2025 PDT",
    cls: "c"
  },
  {
    name: "Store, Process, and Manage Data on Google Cloud - Console",
    issuer: "Google Cloud",
    type: "Skill Badge · Cloud Storage",
    date: "Earned Oct 26, 2025 PDT",
    cls: "g"
  },
  {
    name: "Build a Website on Google Cloud",
    issuer: "Google Cloud",
    type: "Skill Badge · Web Systems",
    date: "Earned Oct 26, 2025 PDT",
    cls: "c"
  },
  {
    name: "Set Up a Google Cloud Network",
    issuer: "Google Cloud",
    type: "Skill Badge · Networking",
    date: "Earned Oct 26, 2025 PDT",
    cls: "c"
  },
  {
    name: "Deploy and Manage Applications on Google App Engine",
    issuer: "Google Cloud",
    type: "Skill Badge · App Engine",
    date: "Earned Oct 26, 2025 PDT",
    cls: "v"
  },
  {
    name: "Develop with Apps Script and AppSheet",
    issuer: "Google Cloud",
    type: "Skill Badge · App Development",
    date: "Earned Oct 26, 2025 PDT",
    cls: "g"
  },
  {
    name: "Monitoring in Google Cloud",
    issuer: "Google Cloud",
    type: "Skill Badge · Observability",
    date: "Earned Oct 26, 2025 PDT",
    cls: "c"
  },
  {
    name: "Deploy and Secure Serverless APIs with API Gateway",
    issuer: "Google Cloud",
    type: "Skill Badge · API Security",
    date: "Earned Oct 24, 2025 PDT",
    cls: "v"
  },
  {
    name: "Implement Event-Driven Messaging and Automation Workflows",
    issuer: "Google Cloud",
    type: "Skill Badge · Eventarc & Pub/Sub",
    date: "Earned Oct 24, 2025 PDT",
    cls: "c"
  },
  {
    name: "Implement Cloud Storage and Data Protection Solutions",
    issuer: "Google Cloud",
    type: "Skill Badge · Storage & Security",
    date: "Earned Oct 24, 2025 PDT",
    cls: "g"
  },
  {
    name: "The Basics of Google Cloud Compute",
    issuer: "Google Cloud",
    type: "Skill Badge · Compute Engine",
    date: "Earned Oct 24, 2025 PDT",
    cls: "c"
  },
  {
    name: "App Building with AppSheet",
    issuer: "Google Cloud",
    type: "Skill Badge · Low-Code",
    date: "Earned Oct 25, 2025 PDT",
    cls: "v"
  },
  {
    name: "Organize and Govern Data with Knowledge Catalog",
    issuer: "Google Cloud",
    type: "Skill Badge · Data Governance",
    date: "Earned Oct 25, 2025 PDT",
    cls: "g"
  },
  {
    name: "Implement Cloud Collaboration and Productivity Workflows",
    issuer: "Google Workspace",
    type: "Skill Badge · Workflows",
    date: "Earned Oct 24, 2025 PDT",
    cls: "c"
  },
  {
    name: "Get Started with Looker",
    issuer: "Google Cloud",
    type: "Skill Badge · Business Intelligence",
    date: "Earned Oct 24, 2025 PDT",
    cls: "v"
  }
];

function el(html){ const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

/* =========================================================
   SCROLL REVEAL OBSERVER
========================================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });
const revealObserverRef = revealObserver;

// Safety timeout: guarantees all sections and cards appear
setTimeout(() => {
  document.querySelectorAll('[data-reveal], [data-reveal-timeline], .case-card').forEach(n => {
    n.classList.add('in-view');
  });
}, 500);

// Render Arsenal
const arsenalGrid = document.getElementById('arsenalGrid');
if (arsenalGrid) {
  ARSENAL_DATA.forEach(a => {
    arsenalGrid.appendChild(el(`
      <div class="arsenal-card ${a.cls}" data-reveal>
        <div class="arsenal-icon">${a.icon}</div>
        <h4>${a.name}</h4>
        <p class="desc">${a.desc}</p>
        <div class="tech-chip-row">${a.tech.map(t=>`<span class="tech-chip">${t}</span>`).join('')}</div>
      </div>
    `));
  });
}

// Render Projects & Filters
const caseList = document.getElementById('caseList');
const filterTabs = document.getElementById('filterTabs');
const tags = ['All', ...Array.from(new Set(PROJECTS_DATA.map(p => p.tag).filter(Boolean)))];

tags.forEach((tag, i) => {
  filterTabs.appendChild(el(`<button class="filter-tab ${i===0?'active':''}" data-tag="${tag}">${tag}</button>`));
});

function renderProjects(filter){
  caseList.innerHTML = '';
  const filtered = PROJECTS_DATA.filter(p => filter === 'All' || p.tag === filter);
  filtered.forEach((p, i) => {
    const isLive = p.demo && !p.demo.startsWith('[');
    const isGit = p.github && !p.github.startsWith('[');
    const card = el(`
      <div class="case-card ${i % 2 === 1 ? 'reverse' : ''}" data-reveal-case data-cursor="project">
        <div class="case-media" style="${p.image ? 'padding:0;' : ''}">
          ${p.image ? `<img src="${p.image}" alt="${p.name} Screenshot" loading="lazy" />` : `<span>[ADD PROJECT SCREENSHOT]</span>`}
        </div>
        <div class="case-body">
          <div class="case-meta-row">
            <span class="cat">${p.category}</span>
            <span class="case-status"><span class="dot"></span>${p.status}</span>
          </div>
          <h3>${p.name}</h3>
          <p class="desc">${p.desc}</p>
          <div class="tech-chip-row">${p.tech.map(t=>`<span class="tech-chip">${t}</span>`).join('')}</div>
          <div class="case-links">
            ${isLive ? `<a href="${p.demo}" target="_blank" rel="noreferrer" class="btn btn-primary btn-sm magnetic" data-cursor="link">View project</a>` : `<button class="btn btn-disabled btn-sm" title="Add your live demo link" disabled>View project</button>`}
            ${isGit ? `<a href="${p.github}" target="_blank" rel="noreferrer" class="btn btn-secondary btn-sm magnetic" data-cursor="link">GitHub</a>` : `<button class="btn btn-disabled btn-sm" title="Add your repository link" disabled>GitHub</button>`}
          </div>
        </div>
      </div>
    `);
    caseList.appendChild(card);
    if (revealObserverRef) revealObserverRef.observe(card);
  });
}

filterTabs.addEventListener('click', e => {
  const btn = e.target.closest('.filter-tab');
  if (!btn) return;
  filterTabs.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.tag);
});

// Render Timeline
const timelineItemsWrap = document.getElementById('timelineItems');
if (timelineItemsWrap) {
  TIMELINE_DATA.forEach(item => {
    timelineItemsWrap.appendChild(el(`
      <div class="timeline-item" data-reveal-timeline>
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <h4>${item.title}</h4>
        <div class="org">${item.org}</div>
        <p class="desc">${item.desc}</p>
      </div>
    `));
  });
}

// Render Achievements
const achievementsGrid = document.getElementById('achievementsGrid');
if (achievementsGrid) {
  ACHIEVEMENTS_DATA.forEach(a => {
    achievementsGrid.appendChild(el(`
      <div class="info-card ${a.cls}" data-reveal>
        ${a.certImg ? `
          <a href="${a.certImg}" target="_blank" rel="noreferrer" class="info-card-cover" data-cursor="link" title="Click to view full certificate">
            <span class="info-card-badge">${a.date || 'HONOR'}</span>
            <span class="info-card-cover-hint">🔍 Expand</span>
            <img src="${a.certImg}" alt="${a.title} Certificate" loading="lazy" />
            <div class="info-card-cover-overlay"></div>
          </a>
        ` : ''}
        <div class="info-card-body">
          <span class="cat">${a.cat}</span>
          <h4>${a.title}</h4>
          ${a.org ? `<div class="meta">${a.org}</div>` : ''}
          <p class="desc">${a.desc}</p>
          ${a.certImg ? `<a class="cred-link" href="${a.certImg}" target="_blank" rel="noreferrer" data-cursor="link">View Full Certificate ↗</a>` : ''}
        </div>
      </div>
    `));
  });
}

// Render Certifications with "View More" (first 6 initially)
const certGrid = document.getElementById('certificationsGrid');
const certToggleBtn = document.getElementById('certToggleBtn');
const certCounterText = document.getElementById('certCounterText');
let isCertsExpanded = false;

function renderCertifications() {
  if (!certGrid) return;
  certGrid.innerHTML = '';
  
  CERTIFICATIONS_DATA.forEach((c, index) => {
    const isHidden = !isCertsExpanded && index >= 6;
    const card = el(`
      <div class="info-card ${c.cls || 'v'} ${isHidden ? 'cert-card-hidden' : ''}" data-reveal>
        <div class="info-card-body">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;">
            <div class="icon" style="margin-bottom:0;width:30px;height:30px;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span class="cat" style="font-size:10.5px;">${c.type}</span>
          </div>
          <h4 style="font-size:15px;line-height:1.35;">${c.name}</h4>
          <span class="cat" style="margin-top:8px;display:block;color:var(--muted);font-weight:500;">${c.issuer}</span>
          <div class="meta" style="margin-top:4px;">${c.date}</div>
          <div class="cert-badge-pill">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Verified Credential</span>
          </div>
        </div>
      </div>
    `);
    certGrid.appendChild(card);
    if (revealObserverRef && !isHidden) revealObserverRef.observe(card);
  });

  if (certCounterText) {
    certCounterText.textContent = isCertsExpanded 
      ? `Showing all ${CERTIFICATIONS_DATA.length} credentials` 
      : `Showing 6 of ${CERTIFICATIONS_DATA.length} credentials`;
  }

  if (certToggleBtn) {
    const btnText = certToggleBtn.querySelector('.btn-text');
    if (btnText) {
      btnText.textContent = isCertsExpanded 
        ? 'Show Less ↑' 
        : `View More Credentials (${CERTIFICATIONS_DATA.length - 6} more) ↓`;
    }
  }
}

if (certToggleBtn) {
  certToggleBtn.addEventListener('click', () => {
    isCertsExpanded = !isCertsExpanded;
    renderCertifications();
    if (!isCertsExpanded) {
      const certSection = document.getElementById('certifications');
      if (certSection) {
        certSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

renderCertifications();

document.getElementById('footerYear').textContent = `© ${new Date().getFullYear()} Satadru Addya. All rights reserved.`;

document.querySelectorAll('[data-reveal]').forEach(node => revealObserver.observe(node));
document.querySelectorAll('[data-reveal-timeline]').forEach(node => revealObserver.observe(node));

renderProjects('All');

/* =========================================================
   POINTER / REDUCED MOTION CHECKS
========================================================= */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

/* =========================================================
   SCROLL-DRIVEN SPIDER-MAN BACKGROUND SYSTEM
========================================================= */
const spiderContainer = document.getElementById('spiderContainer');
let mouseNormX = 0, mouseNormY = 0;
let curMouseX = 0, curMouseY = 0;
let curSpiderX = 0, curSpiderY = 0, curSpiderScale = 1, curSpiderRot = 0;
let lastScrollY = window.scrollY;
let scrollVelocity = 0;

function updateSpiderPhysics(){
  if (!spiderContainer || prefersReducedMotion) return;

  const doc = document.documentElement;
  const maxScroll = doc.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;

  // Track instantaneous velocity with smooth damping
  const rawDelta = window.scrollY - lastScrollY;
  scrollVelocity += (rawDelta - scrollVelocity) * 0.2;
  lastScrollY = window.scrollY;

  // Path interpolation across key points
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const isMobile = vw < 768;

  let targetX = 0;
  let targetY = 0;
  let targetScale = 1;

  if (isMobile) {
    // Mobile subtle path
    targetY = (progress - 0.5) * (vh * 0.45);
    targetX = Math.sin(progress * Math.PI * 2) * (vw * 0.06);
    targetScale = 1.15 + Math.cos(progress * Math.PI * 2) * 0.08;
  } else {
    // Desktop full-screen cinematic 3D path
    targetY = (progress - 0.45) * (vh * 0.55);
    targetX = Math.sin(progress * Math.PI * 2.2) * (vw * 0.1);
    targetScale = 1.25 + Math.cos(progress * Math.PI * 2) * 0.10;
  }

  // Smooth mouse parallax contribution
  curMouseX += (mouseNormX - curMouseX) * 0.06;
  curMouseY += (mouseNormY - curMouseY) * 0.06;

  const parallaxX = curMouseX * (isMobile ? 6 : 18);
  const parallaxY = curMouseY * (isMobile ? 6 : 14);
  const tiltX = -curMouseY * 3.5;
  const tiltY = curMouseX * 4.5;

  // Velocity tilt (restrained & cinematic)
  const velRot = Math.max(-3.5, Math.min(3.5, scrollVelocity * 0.035));

  // Lerp spider transforms
  curSpiderX += (targetX + parallaxX - curSpiderX) * 0.08;
  curSpiderY += (targetY + parallaxY - curSpiderY) * 0.08;
  curSpiderScale += (targetScale - curSpiderScale) * 0.08;
  curSpiderRot += (velRot - curSpiderRot) * 0.08;

  spiderContainer.style.transform = `translate3d(${curSpiderX.toFixed(2)}px, ${curSpiderY.toFixed(2)}px, 0px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) rotateZ(${curSpiderRot.toFixed(2)}deg) scale(${curSpiderScale.toFixed(3)})`;

  scrollVelocity *= 0.88;
}

/* =========================================================
   LIQUID GLOW CURSOR ENGINE
========================================================= */
const cursorCore = document.getElementById('cursorCore');
const cursorBody = document.getElementById('cursorBody');
const cursorAura = document.getElementById('cursorAura');
const cursorLabel = document.getElementById('cursorLabel');

if (!hasFinePointer || prefersReducedMotion) {
  document.body.classList.add('no-custom-cursor');
} else {
  let mouseX = -200, mouseY = -200;
  let bodyX = -200, bodyY = -200;
  let auraX = -200, auraY = -200;
  let lastX = -200, lastY = -200;
  let velX = 0, velY = 0, speed = 0, smoothSpeed = 0;
  let angle = 0;
  let isHovered = false;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    mouseNormX = (e.clientX / window.innerWidth) - 0.5;
    mouseNormY = (e.clientY / window.innerHeight) - 0.5;

    // Direct, crisp core follow
    if (cursorCore) {
      cursorCore.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }

    if (cursorAura && !cursorAura.classList.contains('active')) {
      cursorAura.classList.add('active');
    }
  });

  window.addEventListener('mouseleave', () => {
    if (cursorAura) cursorAura.classList.remove('active');
  });

  function animateLiquidCursor(){
    // Calculate instantaneous velocity
    const dx = mouseX - lastX;
    const dy = mouseY - lastY;
    speed = Math.hypot(dx, dy);
    smoothSpeed += (speed - smoothSpeed) * 0.24;

    lastX = mouseX;
    lastY = mouseY;

    // Body follows with fluid spring lerp
    bodyX += (mouseX - bodyX) * 0.22;
    bodyY += (mouseY - bodyY) * 0.22;

    // Aura follows with relaxed atmospheric delay
    auraX += (mouseX - auraX) * 0.075;
    auraY += (mouseY - auraY) * 0.075;

    // Calculate motion angle
    if (speed > 0.8) {
      const targetAngle = Math.atan2(dy, dx);
      // Smooth angle interpolation
      let angleDiff = targetAngle - angle;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      angle += angleDiff * 0.35;
    }

    // Velocity-based fluid stretch calculation
    if (cursorBody) {
      if (isHovered) {
        // In interactive hover state: maintain clean circle/pill without extreme velocity stretch
        cursorBody.style.transform = `translate3d(${bodyX.toFixed(2)}px, ${bodyY.toFixed(2)}px, 0) translate(-50%, -50%) scale(1)`;
      } else {
        const stretch = Math.min(smoothSpeed * 0.038, 1.4);
        const scaleX = 1 + stretch;
        const scaleY = Math.max(0.48, 1 / (1 + stretch * 0.6));
        cursorBody.style.transform = `translate3d(${bodyX.toFixed(2)}px, ${bodyY.toFixed(2)}px, 0) translate(-50%, -50%) rotate(${angle.toFixed(4)}rad) scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)})`;
      }
    }

    // Delayed large aura position
    if (cursorAura) {
      cursorAura.style.transform = `translate3d(${auraX.toFixed(1)}px, ${auraY.toFixed(1)}px, 0) translate(-50%, -50%)`;
    }

    // Background 3D Spider physics alongside cursor
    updateSpiderPhysics();

    requestAnimationFrame(animateLiquidCursor);
  }
  requestAnimationFrame(animateLiquidCursor);

  // Dynamic Cursor Interactive States
  function bindCursorHandlers(){
    document.querySelectorAll('[data-cursor="link"], a, button, input, textarea, .filter-tab, .chip-option').forEach(node => {
      node.addEventListener('mouseenter', () => {
        isHovered = true;
        if (cursorBody) cursorBody.classList.add('is-link');
      });
      node.addEventListener('mouseleave', () => {
        isHovered = false;
        if (cursorBody) cursorBody.classList.remove('is-link');
      });
    });
    document.querySelectorAll('[data-cursor="project"]').forEach(node => {
      node.addEventListener('mouseenter', () => {
        isHovered = true;
        if (cursorBody) {
          cursorBody.classList.add('is-project');
          if (cursorLabel) cursorLabel.textContent = 'VIEW';
        }
      });
      node.addEventListener('mouseleave', () => {
        isHovered = false;
        if (cursorBody) {
          cursorBody.classList.remove('is-project');
          if (cursorLabel) cursorLabel.textContent = '';
        }
      });
    });
  }
  bindCursorHandlers();
  new MutationObserver(bindCursorHandlers).observe(caseList, { childList: true });

  // Magnetic Button Effect
  function bindMagnetic(){
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }
  bindMagnetic();
  new MutationObserver(bindMagnetic).observe(caseList, { childList: true });

  // Parallax Element
  const parallaxEl = document.querySelector('[data-parallax]');
  if (parallaxEl){
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      parallaxEl.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
  }
}

// Static resting position for reduced motion
if (prefersReducedMotion) {
  if (spiderContainer) {
    spiderContainer.style.transform = 'translate3d(0, 0, 0) scale(1.25)';
  }
}

/* =========================================================
   WEB-SPLAT CLICK EFFECT
========================================================= */
if (!prefersReducedMotion){
  document.addEventListener('pointerdown', (e) => {
    // Avoid triggering on inputs
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    const splat = document.createElement('div');
    splat.className = 'web-splat';
    splat.style.left = e.clientX + 'px';
    splat.style.top = e.clientY + 'px';
    splat.innerHTML = `<svg viewBox="0 0 46 46" fill="none" stroke="#e8262c" stroke-width="1.3">
      <path d="M23 2 L23 44 M2 23 L44 23 M7 7 L39 39 M39 7 L7 39"/>
      <path d="M23 2 Q28 10 23 23 Q18 10 23 2Z" opacity="0.6"/>
      <circle cx="23" cy="23" r="14" opacity="0.5"/>
    </svg>`;
    document.body.appendChild(splat);
    splat.addEventListener('animationend', () => splat.remove());
  });
}

/* =========================================================
   NAV & SCROLLSPY
========================================================= */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const navPill = document.getElementById('navPill');
const sectionIds = navLinks.map(l => l.dataset.nav);
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileLinks = Array.from(document.querySelectorAll('.mobile-drawer a'));
const navToggle = document.getElementById('navToggle');

function movePillTo(link){
  if (!link || !navPill) return;
  navPill.style.opacity = '1';
  navPill.style.width = link.offsetWidth + 'px';
  navPill.style.transform = `translateX(${link.offsetLeft}px)`;
}

function setActive(id){
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === id));
  mobileLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === id));
  const active = navLinks.find(l => l.dataset.nav === id);
  if (active) movePillTo(active);
}

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });

sections.forEach(s => spy.observe(s));
setTimeout(() => setActive('home'), 100);

window.addEventListener('resize', () => {
  const active = navLinks.find(l => l.classList.contains('active'));
  movePillTo(active || navLinks[0]);
});

navToggle.addEventListener('click', () => {
  const isOpen = mobileDrawer.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mobileLinks.forEach(l => l.addEventListener('click', () => {
  mobileDrawer.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

/* =========================================================
   TIMELINE FILL LINE
========================================================= */
const timelineTrackEl = document.querySelector('.timeline');
const timelineFillEl = document.getElementById('timelineFill');
function updateTimelineFill(){
  if (!timelineTrackEl || !timelineFillEl) return;
  const r = timelineTrackEl.getBoundingClientRect();
  const vh = window.innerHeight, total = r.height;
  const visible = Math.min(Math.max(vh * 0.65 - r.top, 0), total);
  timelineFillEl.style.height = (total > 0 ? (visible / total) * 100 : 0) + '%';
}
window.addEventListener('scroll', () => requestAnimationFrame(updateTimelineFill), { passive: true });
window.addEventListener('resize', updateTimelineFill);
updateTimelineFill();

/* =========================================================
   ENGAGEMENT CHIPS
========================================================= */
let selectedEngagement = null;
const chipsGroup = document.getElementById('engagementChips');
if (chipsGroup) {
  chipsGroup.addEventListener('click', e => {
    const btn = e.target.closest('.chip-option');
    if (!btn) return;
    const isAlready = btn.classList.contains('selected');
    document.querySelectorAll('#engagementChips .chip-option').forEach(b => b.classList.remove('selected'));
    if (!isAlready) {
      btn.classList.add('selected');
      selectedEngagement = btn.dataset.value;
    } else {
      selectedEngagement = null;
    }
  });
}

/* =========================================================
   CONTACT FORM BACKEND INTEGRATION
========================================================= */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('cf-name');
    const emailInput = document.getElementById('cf-email');
    const msgInput = document.getElementById('cf-message');
    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errMessage = document.getElementById('err-message');

    errName.textContent = '';
    errEmail.textContent = '';
    errMessage.textContent = '';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    let isValid = true;
    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const msgVal = msgInput.value.trim();

    if (!nameVal) {
      errName.textContent = 'Name is required.';
      isValid = false;
    }
    if (!emailVal) {
      errEmail.textContent = 'Email address is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      errEmail.textContent = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!msgVal) {
      errMessage.textContent = 'Please provide a requirements message.';
      isValid = false;
    } else if (msgVal.length < 10) {
      errMessage.textContent = 'Please describe your request in a bit more detail.';
      isValid = false;
    }

    if (!isValid) return;

    // Loading State
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText ? btnText.textContent : 'Transmit message';
    if (btnText) btnText.textContent = 'Transmitting to backend…';
    submitBtn.style.pointerEvents = 'none';
    submitBtn.style.opacity = '0.7';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          message: msgVal,
          engagement: selectedEngagement || 'General Inquiry'
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        formStatus.className = 'form-status success';
        formStatus.textContent = `✓ Transmission confirmed! Logged as ${data.inquiryId}. Thank you for reaching out!`;
        contactForm.reset();
        document.querySelectorAll('#engagementChips .chip-option').forEach(b => b.classList.remove('selected'));
        selectedEngagement = null;
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      console.warn('Backend API submission note:', err.message);
      // Graceful fallback message + direct mailto link
      formStatus.className = 'form-status';
      formStatus.textContent = '✓ Message captured. You can also send directly via your mail client:';

      const engagementLine = selectedEngagement ? `Engagement Type: ${selectedEngagement}\n\n` : '';
      const subject = encodeURIComponent(`Portfolio inquiry from ${nameVal}`);
      const body = encodeURIComponent(`${engagementLine}${msgVal}\n\nFrom: ${nameVal} (${emailVal})`);
      const mailtoLink = `mailto:satadrusleeps@gmail.com?subject=${subject}&body=${body}`;

      const linkNotice = document.createElement('a');
      linkNotice.href = mailtoLink;
      linkNotice.className = 'btn btn-secondary btn-sm';
      linkNotice.style.marginTop = '10px';
      linkNotice.textContent = 'Open mail client ↗';
      formStatus.appendChild(document.createElement('br'));
      formStatus.appendChild(linkNotice);
    } finally {
      if (btnText) btnText.textContent = originalText;
      submitBtn.style.pointerEvents = '';
      submitBtn.style.opacity = '';
    }
  });
}

/* =========================================================
   DYNAMIC CONFIG LOADER (OPTIONAL SYNC WITH config.json)
========================================================= */
async function loadDynamicConfig(){
  try {
    const res = await fetch('/api/config');
    if (!res.ok) return;
    const cfg = await res.json();
    if (cfg.socialLinks) {
      if (cfg.socialLinks.github) {
        document.querySelectorAll('a[aria-label="GitHub"], a[href*="GITHUB"]').forEach(a => a.href = cfg.socialLinks.github);
      }
      if (cfg.socialLinks.linkedin) {
        document.querySelectorAll('a[aria-label="LinkedIn"], a[href*="LINKEDIN"]').forEach(a => a.href = cfg.socialLinks.linkedin);
      }
      if (cfg.socialLinks.instagram) {
        document.querySelectorAll('a[aria-label="Instagram"], a[href*="INSTAGRAM"]').forEach(a => a.href = cfg.socialLinks.instagram);
      }
      if (cfg.socialLinks.email) {
        document.querySelectorAll('a[aria-label="Email"], a[href^="mailto:"]').forEach(a => a.href = cfg.socialLinks.email);
      }
    }
    if (cfg.profile && cfg.profile.name) {
      console.log(`[Config] Portfolio configured for ${cfg.profile.name}`);
    }
  } catch (e) {
    // Statically loaded or offline
  }
}
loadDynamicConfig();
