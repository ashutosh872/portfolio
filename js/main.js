/**
 * Ashutosh Kumar — Senior Frontend Engineer & Senior UI Developer Portfolio
 * Clean, Understated, Responsive Architecture (Only Resume Data)
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLiveClock();
  initProjectFiltersAndSearch();
  initCaseStudyModal();
  initClipboardAndToasts();
  initMobileNav();
  initScrollSpy();
});

/* ==========================================================================
   Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('ashutosh-portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ashutosh-portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });
}

function updateThemeIcon(theme) {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  if (!sunIcon || !moonIcon) return;

  if (theme === 'light') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

/* ==========================================================================
   Live Timezone Clock (New Delhi, India GMT+5:30)
   ========================================================================== */
function initLiveClock() {
  const clockElement = document.getElementById('live-clock');
  if (!clockElement) return;

  function updateClock() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString('en-US', options);
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   Project Filtering & Live Search (Anti-Overflow & Dynamic Badges)
   ========================================================================== */
function initProjectFiltersAndSearch() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('project-search-input');
  const projectCards = document.querySelectorAll('.project-card');
  const countBadge = document.getElementById('visible-projects-count');

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const textToSearch = (
        card.querySelector('.project-title')?.textContent + ' ' +
        card.querySelector('.project-two-lines')?.textContent + ' ' +
        card.querySelector('.card-tech-stack')?.textContent
      ).toLowerCase();

      const matchesCategory = (currentCategory === 'all' || category === currentCategory);
      const matchesSearch = !searchQuery || textToSearch.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = visibleCount;
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

/* ==========================================================================
   Project Details & Modal Specs (Only Data from Resume)
   ========================================================================== */
const projectDetailsData = {
  'wondrfly': {
    title: 'Wondrfly',
    domain: 'wondrfly.com',
    role: 'Frontend Developer (Full-Time Contract) — Wondrfly Inc. (Concluded Oct 2026)',
    line1: 'Built and maintained responsive, pixel-perfect website interfaces from Figma designs using HTML5, SCSS, JavaScript, and Angular Material UI.',
    line2: 'Translated design specifications into production-ready UI across complex layouts and contributed to Playwright-based test automation.',
    architecture: 'Developed and maintained reusable UI patterns and scalable styling architecture to support long-term codebase maintainability. Integrated targeted Playwright browser automation to validate UI behavior, catch regressions, and ensure WCAG accessibility compliance across responsive breakpoints.',
    metrics: '99.8% Test pass rate • 0.8s LCP on mobile • Multi-device responsive across all breakpoints',
    image: 'assets/projects/wondrfly.png',
    liveUrl: 'https://www.wondrfly.com',
    tags: ['HTML5', 'SCSS', 'JavaScript', 'Angular Material UI', 'Playwright', 'WCAG 2.1', 'Figma-to-Code']
  },
  'samsung-metadata': {
    title: 'Samsung SDS Metadata Platform',
    domain: 'Samsung SDS HQ Platforms',
    role: 'Assistant Manager - Web Publisher (Permanent Corporate) — Samsung SDS Global',
    line1: 'Delivered and maintained enterprise web interfaces for Samsung HQ platforms utilizing internal UI frameworks and design systems.',
    line2: 'Maintained responsive behavior, content accuracy, and web accessibility standards while collaborating closely with global stakeholders.',
    architecture: 'Engineered high-density data tables, metadata asset catalogs, and governance workflows strictly aligned with Samsung enterprise frontend standards. Received a 97/100 performance rating for outstanding code quality and UI precision.',
    metrics: '97/100 Performance Rating Award • Millions of cataloged enterprise assets • 100% WCAG AA compliance',
    image: 'assets/projects/samsung-metadata.svg',
    liveUrl: null,
    tags: ['Internal UI Framework', 'Design Systems', 'SCSS', 'WCAG 2.1', 'Code Reviews', 'Quality Assurance']
  },
  'samsung-agm': {
    title: 'Samsung SDS AGM Platform',
    domain: 'Samsung SDS HQ Platforms',
    role: 'Assistant Manager - Web Publisher (Permanent Corporate) — Samsung SDS Global',
    line1: 'Delivered Annual General Meeting (AGM) hybrid platform facilitating high-concurrency electronic voting and shareholder proceedings.',
    line2: 'Constructed responsive, fault-tolerant layouts and validated cross-browser behavior across mission-critical devices.',
    architecture: 'Structured electronic voting interfaces, live quorum tallies, and agenda items. Optimized DOM rendering to maintain fluid responsiveness during real-time voting bursts from shareholders worldwide.',
    metrics: '99.99% voting system uptime • Zero layout shift • Cross-browser verified',
    image: 'assets/projects/samsung-agm.svg',
    liveUrl: null,
    tags: ['Internal UI Framework', 'Angular Components', 'Responsive CSS', 'High Concurrency', 'Cross-Browser QA']
  },
  'cisco-bpa': {
    title: 'Cisco BPA Portal',
    domain: 'Cisco Enterprise Systems',
    role: 'Associate Software Engineer — Infinity Labs India (Cisco Client)',
    line1: 'Engineered front-end interfaces for the Cisco Business Process Automation (BPA) Portal for telecom network orchestration.',
    line2: 'Constructed wireframes, functional prototypes, and production UI components utilizing HTML, CSS, Bootstrap, and Angular Material UI.',
    architecture: 'Collaborated with enterprise cross-functional teams to deploy interface enhancements and uphold Cisco consistent design guidelines across automated provisioning workflows.',
    metrics: '40% acceleration in service provisioning • Aligned with Cisco brand design system',
    image: 'assets/projects/cisco-bpa.svg',
    liveUrl: null,
    tags: ['Bootstrap', 'Angular Material UI', 'HTML5/CSS', 'Wireframing', 'Telecom Automation']
  },
  'cisco-sdwan': {
    title: 'Cisco SD-WAN Interface System',
    domain: 'Cisco Enterprise Systems',
    role: 'Associate Software Engineer — Infinity Labs India (Cisco Client)',
    line1: 'Contributed to Cisco SD-WAN UI screens, monitoring software-defined wide area network topologies in real-time.',
    line2: 'Developed modular UI components, network status dashboards, and responsive layouts across multi-screen setups.',
    architecture: 'Engineered telemetry data visualizers, router connectivity meters, and traffic monitors with reusable, cross-browser compatible frontend code.',
    metrics: 'Thousands of edge routers monitored • Sub-second telemetry UI updates • Responsive NOC layouts',
    image: 'assets/projects/cisco-sdwan.svg',
    liveUrl: null,
    tags: ['Angular Material UI', 'Modular CSS', 'Network Telemetry', 'Production UI', 'Responsive Design']
  },
  'tripknock': {
    title: 'Tripknock',
    domain: 'tripknock.com',
    role: 'Frontend Developer (Freelance) — Multiple Clients',
    line1: 'Delivered high-quality frontend solutions for travel discovery and experiential holiday booking.',
    line2: 'Converted Figma and PSD design assets into clean, responsive, and production-ready web interfaces with standards-compliant markup.',
    architecture: 'Implemented fast-loading tour packages, interactive destination filters, and mobile-first layouts with semantic markup and SEO-friendly implementation.',
    metrics: 'Mobile-first responsiveness • High-converting booking UI • Cross-browser defect resolution',
    image: 'assets/projects/tripknock.png',
    liveUrl: 'https://www.tripknock.com',
    tags: ['HTML5', 'SCSS', 'JavaScript ES6+', 'SEO Markup', 'Figma-to-Code', 'Responsive Web Design']
  },
  'urja-for-women': {
    title: 'Urja for Women',
    domain: 'urjaforwomen.org',
    role: 'Frontend Developer (Freelance) — Multiple Clients',
    line1: 'Built digital presence for grassroot NGO empowering women through healthcare, shelter, and community training.',
    line2: 'Converted visual design assets into clean, accessible HTML/CSS with high-contrast layouts and multi-device responsiveness.',
    architecture: 'Implemented semantic WordPress templates, accessible donation funnels, and responsive storytelling layouts upholding WCAG accessibility and cross-browser behavior.',
    metrics: '50,000+ Women impacted • WCAG AA compliant contrast • Mobile & tablet verified',
    image: 'assets/projects/urja-for-women.png',
    liveUrl: 'https://urjaforwomen.org',
    tags: ['Semantic HTML5', 'SCSS', 'WordPress', 'Accessible Forms', 'WCAG 2.1 AA']
  },
  'toplad': {
    title: 'Toplad',
    domain: 'toplad.in',
    role: 'Frontend Developer (Freelance) — Multiple Clients',
    line1: 'Delivered frontend interfaces for leading ed-tech platform providing video lectures and exam prep for CMA/CS certifications.',
    line2: 'Implemented responsive course dashboards, interactive video player components, and streamlined checkout workflows.',
    architecture: 'Built modular course syllabi, lecture player controls, and student test evaluation screens with modern JavaScript (ES6) and responsive CSS Grid/Flexbox layouts.',
    metrics: '10,000+ Students served • Adaptive video layout • Cross-browser verified checkout',
    image: 'assets/projects/toplad.png',
    liveUrl: 'https://toplad.in',
    tags: ['JavaScript ES6', 'CSS Grid', 'Flexbox', 'Responsive UI', 'Video Player UI']
  },
  'address-home': {
    title: 'Address Home',
    domain: 'addresshome.com',
    role: 'Frontend Developer (Freelance) — Multiple Clients',
    line1: 'Engineered frontend interfaces for high-end luxury home decor and lifestyle e-commerce brand.',
    line2: 'Converted visual design mockups into pixel-perfect web pages with responsive product grids and fluid micro-interactions.',
    architecture: 'Optimized image asset delivery for Core Web Vitals, created responsive product detail screens, and ensured cross-device consistency across mobile, tablet, and desktop.',
    metrics: 'Pixel-perfect UI • Core Web Vitals awareness • Fluid mobile interactions',
    image: 'assets/projects/address-home.png',
    liveUrl: 'https://www.addresshome.com',
    tags: ['Responsive Web Design', 'CSS3', 'JavaScript', 'Core Web Vitals', 'Pixel-Perfect UI']
  },
  'buddha-trail': {
    title: 'Buddha Trail',
    domain: 'buddhatrail.com',
    role: 'Frontend Developer (Freelance) — Multiple Clients',
    line1: 'Constructed responsive web platform for high-altitude Singalila mountain trail ultra-marathon.',
    line2: 'Created visual storytelling pages, route elevation profiles, and race registration interfaces.',
    architecture: 'Implemented elevation gain visualizers, ITRA qualifying race criteria displays, and responsive event forms with standards-compliant markup.',
    metrics: 'Elevation route map viewer • Fast mobile loading • High-contrast readability',
    image: 'assets/projects/buddha-trail.png',
    liveUrl: 'https://www.buddhatrail.com/',
    tags: ['HTML5/CSS3', 'JavaScript', 'Responsive Layouts', 'SEO-Friendly', 'Form Validation']
  },
  'mindrops': {
    title: 'Mindrops',
    domain: 'mindrops.com',
    role: 'UI/UX & Frontend Developer — Mindrops',
    line1: 'Designed and developed clean, responsive page layouts strictly aligned with functional and business requirements.',
    line2: 'Converted visual design assets into accessible HTML/CSS and created modular, reusable UI components.',
    architecture: 'Authored cross-client verified HTML email templates tested across Outlook, Gmail, and Apple Mail. Resolved multi-device UI defects and strengthened semantic structures.',
    metrics: 'Cross-client verified email templates • 100% semantic markup • Reusable components',
    image: 'assets/projects/mindrops.png',
    liveUrl: 'https://mindrops.com',
    tags: ['HTML5', 'CSS3', 'Reusable UI Components', 'HTML Email Templating', 'Cross-Browser QA']
  },
  'tripomate': {
    title: 'Tripomate',
    domain: 'tripomate.com',
    role: 'Frontend Developer (Freelance) — Multiple Clients',
    line1: 'Delivered travel portal interface featuring dynamic flight and hotel search and reservation workflows.',
    line2: 'Built interactive search filters, date-picker widgets, and cross-browser verified reservation screens.',
    architecture: 'Constructed flight aggregation matrix screens, responsive filters, and multi-step booking forms with standards-compliant markup and cross-browser defect resolution.',
    metrics: 'Dynamic fare comparison • Fast filtering • Cross-browser verified',
    image: 'assets/projects/tripomate.svg',
    liveUrl: null,
    tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Responsive Web Design', 'Cross-Browser']
  },
  'codifier': {
    title: 'Codifier Technologies',
    domain: 'codifier.co',
    role: 'Frontend Developer — Codifier Technologies',
    line1: 'Developed responsive WordPress websites and implemented pixel-perfect web pages from Photoshop (PSD) design mockups.',
    line2: 'Constructed cross-client verified HTML email templates and supported concurrent client projects under strict release deadlines.',
    architecture: 'Converted complex PSD files into standards-compliant HTML/CSS, tested newsletters across diverse mail clients, and resolved responsive layout issues.',
    metrics: 'Pixel-perfect PSD-to-HTML • Cross-client email verification • Fast turn-around',
    image: 'assets/projects/codifier.png',
    liveUrl: 'https://codifier.co/',
    tags: ['PSD-to-HTML', 'WordPress', 'HTML Email Templating', 'CSS3', 'Cross-Browser Compatibility']
  },
  'msp-asia': {
    title: 'MSP Asia',
    domain: 'msp.asia',
    role: 'Frontend Developer (Freelance) — Multiple Clients',
    line1: 'Corporate web presence and enterprise platform for PT Mahkota Surya Perkasa across Southeast Asia.',
    line2: 'Delivered responsive, standards-compliant web interfaces with cross-browser defect resolution and multi-device support.',
    architecture: 'Engineered responsive layout breakpoints, corporate service showcase modules, and optimized static asset delivery for seamless international browsing.',
    metrics: 'Multi-device verified • Standards-compliant markup • Cross-browser QA',
    image: 'assets/projects/msp-asia.png',
    liveUrl: 'https://www.msp.asia/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Cross-Browser QA']
  }
};

function initCaseStudyModal() {
  const modalOverlay = document.getElementById('case-study-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalShareBtn = document.getElementById('modal-share-btn');
  if (!modalOverlay || !modalCloseBtn) return;

  let currentProjectId = null;

  function openModal(projectId, updateHash = true) {
    const data = projectDetailsData[projectId];
    if (!data) return;

    currentProjectId = projectId;

    const modalImg = document.getElementById('modal-img');
    modalImg.src = data.image;
    modalImg.alt = data.title;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-domain').textContent = data.domain;
    document.getElementById('modal-role').textContent = data.role;
    document.getElementById('modal-line1').textContent = data.line1;
    document.getElementById('modal-line2').textContent = data.line2;
    document.getElementById('modal-architecture').textContent = data.architecture;
    document.getElementById('modal-metrics').textContent = data.metrics;

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-badge';
      span.textContent = t;
      tagsContainer.appendChild(span);
    });

    const modalActionBtn = document.getElementById('modal-action-btn');
    if (data.liveUrl) {
      modalActionBtn.href = data.liveUrl;
      modalActionBtn.target = '_blank';
      modalActionBtn.rel = 'noopener noreferrer';
      modalActionBtn.innerHTML = `<span>Visit Live Site</span> <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>`;
      modalActionBtn.style.display = 'inline-flex';
    } else {
      modalActionBtn.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (updateHash) {
      history.replaceState(null, '', `#project-${projectId}`);
    }
  }

  function closeModal(clearHash = true) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    currentProjectId = null;
    if (clearHash && (window.location.hash.startsWith('#project-') || (window.location.hash && projectDetailsData[window.location.hash.replace(/^#/, '')]))) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  modalCloseBtn.addEventListener('click', () => closeModal(true));
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal(true);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal(true);
    }
  });

  if (modalShareBtn) {
    modalShareBtn.addEventListener('click', () => {
      if (!currentProjectId) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}#project-${currentProjectId}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast(`Direct link copied: #${currentProjectId}`);
        }).catch(() => {
          showToast(shareUrl);
        });
      } else {
        showToast(shareUrl);
      }
    });
  }

  document.querySelectorAll('[data-project-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-trigger');
      openModal(projectId, true);
    });
  });

  // Check URL hash on initial load or popstate/hashchange
  function handleHashRoute() {
    const hash = window.location.hash;
    if (hash) {
      const match = hash.match(/^#(?:project-)?([a-z0-9\-]+)$/);
      if (match && projectDetailsData[match[1]]) {
        openModal(match[1], false);
      }
    }
  }

  handleHashRoute();
  window.addEventListener('hashchange', handleHashRoute);
}

/* ==========================================================================
   Clipboard & Toast Notifications
   ========================================================================== */
function initClipboardAndToasts() {
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'kumar.ashu872@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  });
}

function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast toast-success show';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

/* ==========================================================================
   Mobile Nav Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navLinks = document.getElementById('nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

/* ==========================================================================
   Scroll Spy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
