// ===========================================================================
//  Single source of truth for the Portfolio.
//  To add / edit / remove a project, just change this object — nothing else.
// ===========================================================================
const PROJECTS = [
  {
    id: "email",
    icon: "📥",
    title: "Email Management",
    subtitle: "Inbox organization and email handling",
    image: "gmail.png",
    overview:
      "A founder's inbox had become a daily bottleneck — important messages were buried under newsletters, and replies were slow.",
    role: "Inbox Manager & Email Support",
    objective: "Bring order to a cluttered inbox and speed up response times.",
    did: "Organized inboxes with labels and filters, prioritized important emails, and created reusable email templates.",
    result: "A clean, manageable inbox with faster, more consistent replies.",
    skills: ["Prioritization", "Email Etiquette", "Process Design", "Attention to Detail"],
  },
  {
    id: "calendar",
    icon: "📅",
    title: "Calendar & Scheduling Management",
    subtitle: "Google Calendar organization",
    image: "calendar.png",
    overview:
      "Back-to-back meetings and scattered reminders were causing missed calls and the occasional double-booking.",
    role: "Calendar & Scheduling Coordinator",
    objective: "Keep a busy schedule organized and conflict-free.",
    did: "Managed meetings and appointments, used color-coding for categories, and set timely reminders.",
    result: "A clear, color-coded calendar with zero double-bookings.",
    skills: ["Time Management", "Coordination", "Color Systems", "Reminders"],
  },
  {
    id: "database",
    icon: "🗃️",
    title: "Client Database Management",
    subtitle: "Google Sheets client records",
    image: "database.png",
    overview:
      "Client details lived across several disconnected sheets, which made lookups slow and reporting unreliable.",
    role: "Data & CRM Assistant",
    objective: "Centralize client information for accurate, easy tracking.",
    did: "Built and maintained a categorized client database with filters and dropdowns for quick lookups.",
    result: "A single reliable source of truth for all client records.",
    skills: ["Data Entry", "Organization", "Google Sheets", "Accuracy"],
  },
  {
    id: "travel",
    icon: "✈️",
    title: "Travel Planning & Research",
    subtitle: "Itinerary creation and budget planning",
    image: "travel.png",
    overview:
      "A multi-stop business trip needed flights, stays, and a clear budget — with no room for surprises.",
    role: "Travel Coordinator",
    objective: "Plan smooth, well-budgeted trips from start to finish.",
    did: "Researched flights and hotels, created detailed day-by-day itineraries, and estimated full travel budgets.",
    result: "Stress-free travel with every detail and cost accounted for.",
    skills: ["Research", "Budgeting", "Itinerary Planning", "Logistics"],
  },
  {
    id: "sop",
    icon: "📋",
    title: "Customer Inquiry SOP",
    subtitle: "Standard operating procedure",
    image: "sop.png",
    overview:
      "Customer questions were answered inconsistently because there was no documented, repeatable process.",
    role: "Operations & SOP Writer",
    objective: "Standardize how customer inquiries are received and resolved.",
    did: "Created a clear step-by-step process with ready-to-use response templates.",
    result: "Faster, more consistent, and professional customer responses.",
    skills: ["Process Mapping", "Documentation", "Templates", "Consistency"],
  },
  {
    id: "meeting",
    icon: "📝",
    title: "Meeting Notes & Minutes",
    subtitle: "Weekly team meetings",
    image: "meeting.png",
    overview:
      "Weekly team meetings were ending without clear records, so action items kept slipping between people.",
    role: "Meeting & Minutes Coordinator",
    objective: "Keep the team aligned with clear, actionable meeting records.",
    did: "Prepared agendas, documented key points, and captured action items with deadlines.",
    result: "Well-documented meetings and accountable, on-track follow-ups.",
    skills: ["Note-taking", "Summarizing", "Follow-up", "Organization"],
  },
  {
    id: "chat",
    icon: "💬",
    title: "Customer Support & Communication",
    subtitle: "Professional, timely, empathetic support",
    image: "chat.png",
    overview:
      "Support requests arrived across email and live chat with no consistent, friendly response flow.",
    role: "Customer Support Specialist",
    objective: "Deliver friendly, effective support across channels.",
    did: "Handled email and live chat inquiries, resolved issues clearly, and followed up to ensure satisfaction.",
    result: "Happier customers and stronger, more trusting relationships.",
    skills: ["Communication", "Empathy", "Problem-solving", "Follow-through"],
  },
  {
    id: "canva",
    icon: "🎨",
    title: "Canva Graphic Designs",
    subtitle: "Social media posts, templates, and branding",
    image: "canva.png",
    overview:
      "The brand needed a steady stream of on-brand visuals for social media without a full design team.",
    role: "Canva Graphic Designer",
    objective: "Create engaging, on-brand visuals for marketing.",
    did: "Designed graphics for social media, promotions, and marketing materials.",
    result: "A cohesive, polished brand presence that stands out.",
    skills: ["Visual Design", "Branding", "Layout", "Social Media"],
  },
  {
    id: "project",
    icon: "📌",
    title: "Project Management",
    subtitle: "Plan, organize, deliver",
    image: "project.png",
    overview:
      "Tasks, owners, and deadlines were scattered, which made overall project progress hard to see.",
    role: "Project Coordinator",
    objective: "Move projects from idea to delivery, on time.",
    did: "Created and organized project boards, broke work into tasks, set deadlines, and tracked progress.",
    result: "Clear visibility and consistent on-time project completion.",
    skills: ["Planning", "Task Tracking", "Coordination", "Delivery"],
  },
  {
    id: "recruitment",
    icon: "🧑‍💼",
    title: "Recruitment Support",
    subtitle: "Source, screen, schedule",
    image: "receruitment.png",
    overview:
      "Hiring was disorganized — applications, screening notes, and interview scheduling all lived in different places.",
    role: "Recruitment Support Assistant",
    objective: "Support a smooth, organized hiring process.",
    did: "Managed job postings, screened candidates, maintained an applicant tracker, and coordinated interviews.",
    result: "A streamlined pipeline and a better experience for every candidate.",
    skills: ["Sourcing", "Screening", "Scheduling", "Tracking"],
  },
];

// Tools used per project (shown in the case-study panel).
const TOOLS = {
  email: ["Gmail", "Labels & Filters", "Templates"],
  calendar: ["Google Calendar", "Color-coding", "Reminders"],
  database: ["Google Sheets", "Filters", "Data Validation"],
  travel: ["Google Sheets", "Flight/Hotel Research", "Docs"],
  sop: ["Google Docs", "Templates", "Flowcharts"],
  meeting: ["Google Docs", "Agendas", "Action Items"],
  chat: ["Email", "Live Chat", "CRM"],
  canva: ["Canva", "Brand Kit", "Social Media"],
  project: ["Trello / Asana", "Timelines", "Task Boards"],
  recruitment: ["LinkedIn", "Applicant Tracker", "Scheduling"],
};

// ===========================================================================
//  Services — single source of truth (rendered + opened as a case-study drawer)
// ===========================================================================
const SERVICES = [
  {
    id: "email-cal",
    icon: "calendar_month",
    title: "Email & Calendar Management",
    short: "Tidy inboxes, organized schedules, and zero double-bookings.",
    description:
      "I take ownership of your inbox and calendar so nothing important slips and your day runs on rails.",
    receive: ["A triaged, label-driven inbox", "A clean, color-coded calendar", "Reusable email templates"],
    workflow: ["Audit your current inbox & calendar", "Set up labels, filters & categories", "Run daily triage and scheduling", "Weekly review and cleanup"],
    software: ["Gmail / Outlook", "Google Calendar", "Calendly"],
    deliverables: ["Inbox-zero workflow", "Scheduling system", "Saved reply templates"],
    benefit: "You reclaim hours every week and never miss a meeting or a message that matters.",
  },
  {
    id: "data",
    icon: "database",
    title: "Data Entry & Database Management",
    short: "Accurate, well-structured records you can always rely on.",
    description: "I turn scattered data into clean, structured, and searchable records.",
    receive: ["A deduplicated, organized database", "Standardized fields & tags", "Quick-filter views"],
    workflow: ["Collect and audit existing data", "Clean, dedupe & standardize", "Structure with filters & validation", "Maintain and update regularly"],
    software: ["Google Sheets / Excel", "Airtable", "CRM tools"],
    deliverables: ["Master database", "Data-entry SOP", "Filtered reporting views"],
    benefit: "You make decisions from one reliable source of truth instead of guessing.",
  },
  {
    id: "support",
    icon: "support_agent",
    title: "Customer Service & Communication",
    short: "Warm, professional, and timely communication with your clients.",
    description: "I represent your brand with friendly, prompt, and genuinely helpful support.",
    receive: ["Fast, on-brand responses", "Resolved & followed-up tickets", "Happier customers"],
    workflow: ["Learn your brand voice & FAQs", "Respond across channels", "Resolve & escalate when needed", "Follow up to confirm satisfaction"],
    software: ["Gmail", "Live chat", "Help desks (Zendesk)"],
    deliverables: ["Response templates", "FAQ library", "Support activity log"],
    benefit: "Your clients feel cared for, which builds loyalty and repeat business.",
  },
  {
    id: "docs",
    icon: "folder_open",
    title: "Document Preparation & Files",
    short: "Polished documents and neatly organized, easy-to-find files.",
    description: "I prepare clean documents and keep your files structured and accessible.",
    receive: ["Formatted, professional documents", "An organized file system", "Reusable templates"],
    workflow: ["Gather content & requirements", "Draft and format documents", "Organize into clear folders", "Maintain naming conventions"],
    software: ["Google Docs", "MS Office", "Google Drive"],
    deliverables: ["Final documents", "Folder structure", "Document templates"],
    benefit: "You find what you need in seconds and always look polished.",
  },
  {
    id: "meetings",
    icon: "event_note",
    title: "Meeting Coordination & Minutes",
    short: "Smooth scheduling, clear agendas, and detailed meeting notes.",
    description: "I handle the logistics and the records so your meetings stay productive.",
    receive: ["Scheduled meetings & agendas", "Clear, shareable minutes", "Tracked action items"],
    workflow: ["Coordinate everyone's availability", "Prepare and send the agenda", "Capture notes live", "Circulate minutes & follow up"],
    software: ["Google Calendar", "Zoom / Meet", "Google Docs"],
    deliverables: ["Agendas", "Meeting minutes", "Action-item tracker"],
    benefit: "Decisions get documented and nothing falls through the cracks.",
  },
  {
    id: "travel",
    icon: "flight_takeoff",
    title: "Travel Planning & Research",
    short: "Stress-free itineraries, smart research, and budget planning.",
    description: "I plan every detail of your trip so you can simply show up.",
    receive: ["A day-by-day itinerary", "Booked flights & stays", "A clear travel budget"],
    workflow: ["Define dates, route & budget", "Research the best options", "Book and confirm", "Compile an itinerary document"],
    software: ["Google Sheets", "Booking sites", "Google Docs"],
    deliverables: ["Itinerary document", "Confirmations folder", "Budget sheet"],
    benefit: "You travel relaxed, knowing every detail and cost is handled.",
  },
  {
    id: "pm",
    icon: "account_tree",
    title: "Project Management",
    short: "Organized boards, clear deadlines, and projects delivered on time.",
    description: "I keep projects moving with clear tasks, owners, and timelines.",
    receive: ["A structured project board", "Clear deadlines & owners", "Regular progress updates"],
    workflow: ["Break work into tasks", "Set owners and due dates", "Track progress daily", "Report status and unblock"],
    software: ["Trello / Asana", "ClickUp", "Google Sheets"],
    deliverables: ["Project board", "Timeline", "Status reports"],
    benefit: "You get full visibility and consistent, on-time delivery.",
  },
  {
    id: "recruit",
    icon: "person_add",
    title: "Recruitment Support",
    short: "Sourcing, screening, and scheduling for smooth hiring.",
    description: "I support your hiring pipeline so the right candidates move forward fast.",
    receive: ["Sourced & screened candidates", "An organized applicant tracker", "Scheduled interviews"],
    workflow: ["Post and source roles", "Screen applications", "Maintain the tracker", "Coordinate interviews"],
    software: ["LinkedIn", "ATS", "Google Sheets"],
    deliverables: ["Candidate shortlist", "Applicant tracker", "Interview schedule"],
    benefit: "You hire faster with a smoother experience for every candidate.",
  },
  {
    id: "canva",
    icon: "palette",
    title: "Canva Graphic Design",
    short: "On-brand graphics for social media, promos, and marketing.",
    description: "I design clean, on-brand visuals that make your content stand out.",
    receive: ["On-brand social graphics", "Reusable templates", "A consistent visual identity"],
    workflow: ["Understand brand & goals", "Design first drafts", "Refine with your feedback", "Deliver final assets"],
    software: ["Canva", "Brand kits", "Google Drive"],
    deliverables: ["Social media graphics", "Editable templates", "Asset library"],
    benefit: "Your brand looks professional and consistent everywhere it shows up.",
  },
];

// ===========================================================================
//  Footer year
// ===========================================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ===========================================================================
//  Mobile hamburger menu / overlay
// ===========================================================================
const toggle = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menuClose");

function openMenu() {
  menu.classList.add("is-open");
  toggle.classList.add("is-open");
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Close menu");
  menu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  menu.classList.remove("is-open");
  toggle.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
  menu.setAttribute("aria-hidden", "true");
}

toggle.addEventListener("click", () => {
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

if (menuClose) menuClose.addEventListener("click", closeMenu);

menu.querySelectorAll(".menu__link").forEach((link) =>
  link.addEventListener("click", closeMenu)
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
});

// ===========================================================================
//  Render portfolio cards from the PROJECTS data
// ===========================================================================
const grid = document.getElementById("portfolioGrid");

PROJECTS.forEach((p, i) => {
  const num = String(i + 1).padStart(2, "0");
  const card = document.createElement("article");
  card.className = "card project reveal";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open case study: ${p.title}`);
  card.dataset.id = p.id;
  card.innerHTML = `
    <div class="project__shot">
      <img src="${p.image}" alt="${p.title} screenshot" loading="lazy" />
      <span class="project__num">${num}</span>
      <span class="project__open"><span class="ms">open_in_full</span></span>
    </div>
    <div class="project__body">
      <span class="project__cat"><span class="project__icon" aria-hidden="true">${p.icon}</span> ${p.subtitle}</span>
      <h3 class="project__title">${p.title}</h3>
    </div>
  `;
  card.addEventListener("click", () => openCase(p.id));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openCase(p.id);
    }
  });
  grid.appendChild(card);
});

// ===========================================================================
//  Render service cards from the SERVICES data
// ===========================================================================
const servicesGrid = document.getElementById("servicesGrid");

SERVICES.forEach((s) => {
  const card = document.createElement("article");
  card.className = "service reveal";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Learn more about ${s.title}`);
  card.dataset.svc = s.id;
  card.innerHTML = `
    <span class="service__icon ms" aria-hidden="true">${s.icon}</span>
    <h3>${s.title}</h3>
    <p>${s.short}</p>
    <span class="service__more">Learn more <span class="ms" aria-hidden="true">arrow_forward</span></span>
  `;
  card.addEventListener("click", () => openService(s.id));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openService(s.id);
    }
  });
  servicesGrid.appendChild(card);
});

// ===========================================================================
//  Case study modal — open / close
// ===========================================================================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalNum = document.getElementById("modalNum");
const modalCat = document.getElementById("modalCat");
const modalTitle = document.getElementById("modalTitle");
const modalOverview = document.getElementById("modalOverview");
const modalRole = document.getElementById("modalRole");
const modalObjective = document.getElementById("modalObjective");
const modalDid = document.getElementById("modalDid");
const modalResult = document.getElementById("modalResult");
const modalTools = document.getElementById("modalTools");
const modalSkills = document.getElementById("modalSkills");
const modalClose = document.getElementById("modalClose");
const modalZoom = document.getElementById("modalZoom");

let lastFocused = null;

function chips(arr) {
  return (arr || []).map((t) => `<span>${t}</span>`).join("");
}

function openCase(id) {
  const idx = PROJECTS.findIndex((x) => x.id === id);
  if (idx < 0) return;
  const p = PROJECTS[idx];

  lastFocused = document.activeElement;

  modalImg.src = p.image;
  modalImg.alt = `${p.title} screenshot`;
  modalNum.textContent = String(idx + 1).padStart(2, "0");
  modalCat.textContent = p.subtitle;
  modalTitle.textContent = p.title;
  modalOverview.textContent = p.overview;
  modalRole.textContent = p.role;
  modalObjective.textContent = p.objective;
  modalDid.textContent = p.did;
  modalResult.textContent = p.result;
  modalTools.innerHTML = chips(TOOLS[p.id]);
  modalSkills.innerHTML = chips(p.skills);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  // next frame: trigger the fade + panel choreography
  requestAnimationFrame(() =>
    requestAnimationFrame(() => modal.classList.add("is-shown"))
  );
  modalClose.focus();
}

function closeCase() {
  modal.classList.remove("is-shown");
  modal.setAttribute("aria-hidden", "true");
  if (!lightbox.classList.contains("is-open")) document.body.classList.remove("no-scroll");
  // wait for the modal's own fade-out before hiding (display:none).
  // Ignore bubbling transitionend events from the inner panels.
  const hide = (e) => {
    if (e && e.target !== modal) return;
    modal.classList.remove("is-open");
    modal.removeEventListener("transitionend", hide);
    clearTimeout(hideTimer);
  };
  modal.addEventListener("transitionend", hide);
  const hideTimer = setTimeout(hide, 450);
  if (lastFocused) lastFocused.focus();
}

modalClose.addEventListener("click", closeCase);
modal.querySelectorAll("[data-close]").forEach((el) =>
  el.addEventListener("click", closeCase)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open") && !lightbox.classList.contains("is-open"))
    closeCase();
});

// ===========================================================================
//  Lightbox — click the screenshot to view it complete, at full size
// ===========================================================================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox() {
  if (!modalImg.src) return;
  lightboxImg.src = modalImg.src;
  lightboxImg.alt = modalImg.alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => lightbox.classList.add("is-shown"));
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-shown");
  lightbox.setAttribute("aria-hidden", "true");
  const hide = (e) => {
    if (e && e.target !== lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.removeEventListener("transitionend", hide);
    clearTimeout(t);
  };
  lightbox.addEventListener("transitionend", hide);
  const t = setTimeout(hide, 400);
  if (modal.classList.contains("is-open")) modalZoom.focus();
}

modalImg.addEventListener("click", openLightbox);
modalZoom.addEventListener("click", openLightbox);
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lightboxImg) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
});

// ===========================================================================
//  Service drawer — premium slide-in case study for each service
// ===========================================================================
const drawer = document.getElementById("serviceDrawer");
const drawerPanel = drawer.querySelector(".drawer__panel");
const svcIcon = document.getElementById("svcIcon");
const svcTitle = document.getElementById("svcTitle");
const svcDesc = document.getElementById("svcDesc");
const svcReceive = document.getElementById("svcReceive");
const svcWorkflow = document.getElementById("svcWorkflow");
const svcSoftware = document.getElementById("svcSoftware");
const svcDeliverables = document.getElementById("svcDeliverables");
const svcBenefit = document.getElementById("svcBenefit");
const svcClose = document.getElementById("svcClose");

let svcLastFocused = null;
const li = (arr) => (arr || []).map((x) => `<li>${x}</li>`).join("");

function openService(id) {
  const s = SERVICES.find((x) => x.id === id);
  if (!s) return;
  svcLastFocused = document.activeElement;

  svcIcon.textContent = s.icon;
  svcTitle.textContent = s.title;
  svcDesc.textContent = s.description;
  svcReceive.innerHTML = li(s.receive);
  svcWorkflow.innerHTML = li(s.workflow);
  svcDeliverables.innerHTML = li(s.deliverables);
  svcSoftware.innerHTML = chips(s.software);
  svcBenefit.textContent = s.benefit;

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  drawerPanel.scrollTop = 0;
  requestAnimationFrame(() =>
    requestAnimationFrame(() => drawer.classList.add("is-shown"))
  );
  svcClose.focus();
}

function closeService() {
  drawer.classList.remove("is-shown");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  const hide = (e) => {
    if (e && e.target !== drawerPanel) return;
    drawer.classList.remove("is-open");
    drawerPanel.removeEventListener("transitionend", hide);
    clearTimeout(t);
  };
  drawerPanel.addEventListener("transitionend", hide);
  const t = setTimeout(hide, 520);
  if (svcLastFocused) svcLastFocused.focus();
}

svcClose.addEventListener("click", closeService);
drawer.querySelectorAll("[data-svc-close]").forEach((el) =>
  el.addEventListener("click", closeService)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("is-open")) closeService();
});

// ===========================================================================
//  Reveal sections on scroll
// ===========================================================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

// Stagger containers reveal their children together (with CSS delays).
document.querySelectorAll(".stagger").forEach((el) => observer.observe(el));

// Standalone reveals (anything not inside a stagger container).
Array.from(document.querySelectorAll(".reveal, [data-reveal]"))
  .filter((el) => !el.closest(".stagger"))
  .forEach((el) => observer.observe(el));

// ===========================================================================
//  Particles — deterministic sprinkle of twinkling dots
// ===========================================================================
function sprinkle(box, count, seed, topMax) {
  if (!box) return;
  let s = seed;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280), s / 233280);
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    const size = (1 + rnd() * 2.4).toFixed(1) + "px";
    span.style.cssText =
      `top:${(rnd() * topMax).toFixed(2)}%;left:${(rnd() * 100).toFixed(2)}%;` +
      `width:${size};height:${size};opacity:${(0.3 + rnd() * 0.6).toFixed(2)};` +
      `animation:twinkle ${(2.6 + rnd() * 4).toFixed(2)}s ease-in-out ${(rnd() * 4).toFixed(2)}s infinite;`;
    frag.appendChild(span);
  }
  box.appendChild(frag);
}

// Dense twinkle inside the hero, plus a continuous field behind the whole page.
sprinkle(document.getElementById("particles"), 30, 7, 74);
sprinkle(document.getElementById("bgParticles"), 60, 31, 100);

// ===========================================================================
//  Dot-nav scroll spy — highlight the dot for the section in view
// ===========================================================================
const dotLinks = Array.from(document.querySelectorAll(".dotnav a"));
const spySections = dotLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if (spySections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          dotLinks.forEach((a) =>
            a.classList.toggle(
              "is-active",
              a.getAttribute("href") === `#${e.target.id}`
            )
          );
        }
      });
    },
    { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
  );
  spySections.forEach((sec) => spy.observe(sec));
}

// ===========================================================================
//  Subtle mouse parallax + mouse-follow gradient — premium, gentle.
//  Each [data-depth] element drifts a few px; a soft glow follows the cursor.
// ===========================================================================
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (reduce || !fine) return;

  const root = document.documentElement;
  const layers = Array.from(document.querySelectorAll("[data-depth]")).map(
    (el) => ({ el, depth: parseFloat(el.dataset.depth) || 1 })
  );

  const MULT = 2.6; // px per unit of depth at the screen edge — intentionally small
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let ex = cx,
    ey = cy,
    nx = 0,
    ny = 0,
    ticking = false;

  function apply() {
    ticking = false;
    for (const l of layers) {
      const m = l.depth * MULT;
      l.el.style.setProperty("--px", (nx * m).toFixed(2) + "px");
      l.el.style.setProperty("--py", (ny * m).toFixed(2) + "px");
    }
    // mouse-follow gradient position (absolute px on the page)
    root.style.setProperty("--mx", ex.toFixed(0) + "px");
    root.style.setProperty("--my", ey.toFixed(0) + "px");
  }

  window.addEventListener("mousemove", (e) => {
    ex = e.clientX;
    ey = e.clientY;
    nx = (ex - cx) / cx;
    ny = (ey - cy) / cy;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(apply);
    }
  });
  window.addEventListener("resize", () => {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
})();
