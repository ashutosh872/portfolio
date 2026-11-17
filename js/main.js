/**
 * Ashutosh Kumar — Senior Frontend & UI Engineer Portfolio
 * Interactive Functionality & Modern UX Enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLiveClock();
  initProjectFiltersAndSearch();
  initCaseStudyModal();
  initClipboardAndToasts();
  initMobileNav();
  initScrollSpy();
  initDesignTokenPlayground();
});

/* ==========================================================================
   Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  // Check saved theme or default to dark
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
   Live Timezone Clock (New Delhi GMT+5:30)
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
   Project Filtering & Live Search
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
   Project Details / Case Study Modal
   ========================================================================== */
const projectDetailsData = {
  'wondrfly': {
    title: 'Wondrfly — Children Enrichment Platform',
    domain: 'wondrfly.com',
    role: 'Frontend Developer (Contract)',
    line1: 'AI-powered marketplace connecting parents with verified children enrichment classes, camps, and activities.',
    line2: 'Engineered responsive pixel-perfect interfaces from Figma and automated end-to-end regression testing with Playwright.',
    architecture: 'Built with HTML5, SCSS, Modern JavaScript, and Angular Material UI components. Integrated strict WCAG 2.1 accessibility criteria with high-contrast color tokens and keyboard navigation primitives. Implemented an impact-based Playwright regression test runner that isolates updated components to expedite releases.',
    metrics: '99.8% Test pass rate • 0.8s LCP on mobile • Multi-device responsive across 6 breakpoints',
    image: 'assets/projects/wondrfly.svg',
    liveUrl: 'https://www.wondrfly.com',
    tags: ['Angular Material UI', 'HTML5/SCSS', 'JavaScript ES6+', 'Playwright', 'WCAG 2.1', 'Figma-to-Code']
  },
  'samsung-metadata': {
    title: 'Samsung SDS Metadata Platform',
    domain: 'metadata.samsung-sds.internal',
    role: 'Assistant Manager - Web Publisher (Samsung SDS)',
    line1: 'Enterprise data governance and metadata indexing system managing core business pipelines at Samsung HQ.',
    line2: 'Delivered modular component architectures with strict accessibility standards, earning a 97/100 code rating.',
    architecture: 'Designed and published enterprise-grade interfaces utilizing internal Samsung UI frameworks and scalable design tokens. Structured high-density data tables, data lineage graphs, and Kafka streaming monitors with zero layout shift and cross-browser verified CSS architectures.',
    metrics: '97/100 code quality rating • 1.4M+ cataloged enterprise assets • 100% WCAG AA compliance',
    image: 'assets/projects/samsung-metadata.svg',
    liveUrl: null,
    enterpriseNote: 'Enterprise Platform (Confidential Internal System at Samsung SDS HQ)',
    tags: ['Enterprise UI Framework', 'Design Systems', 'SCSS Architecture', 'Data Tables', 'WCAG 2.1', 'Code Reviews']
  },
  'samsung-agm': {
    title: 'Samsung SDS Annual General Meeting (AGM) Platform',
    domain: 'agm.samsung-sds.internal',
    role: 'Assistant Manager - Web Publisher (Samsung SDS)',
    line1: 'High-concurrency Annual General Meeting platform facilitating hybrid voting and shareholder proceedings.',
    line2: 'Built fault-tolerant responsive layouts and validated cross-browser behavior across mission-critical devices.',
    architecture: 'Constructed an ultra-resilient electronic voting interface and real-time quorum tally dashboard. Optimized DOM re-renders to handle real-time voting bursts from tens of thousands of simultaneous shareholders with zero latency spikes.',
    metrics: '84.6% shareholder participation handled • 99.99% voting system uptime • Zero visual regressions',
    image: 'assets/projects/samsung-agm.svg',
    liveUrl: null,
    enterpriseNote: 'Enterprise Platform (Confidential Governance System at Samsung SDS HQ)',
    tags: ['Enterprise Web Publisher', 'Angular Components', 'Real-time UI', 'Cross-Browser QA', 'High Concurrency']
  },
  'cisco-bpa': {
    title: 'Cisco Business Process Automation (BPA) Portal',
    domain: 'bpa.cisco.corp',
    role: 'Associate Software Engineer (Infinity Labs / Cisco Client)',
    line1: 'Unified telecom workflow automation portal streamlining enterprise network service provisioning.',
    line2: 'Constructed interactive wireframes and production UI components aligned with Cisco brand design systems.',
    architecture: 'Developed front-end interfaces for telecom automation pipelines using Bootstrap, HTML5/CSS3, and Angular Material UI. Built interactive canvas nodes that visualize end-to-end SD-WAN device orchestration workflows with clear state indicators.',
    metrics: 'Streamlined network service turn-up time by 40% • Compliant with Cisco corporate UI guidelines',
    image: 'assets/projects/cisco-bpa.svg',
    liveUrl: null,
    enterpriseNote: 'Enterprise Platform (Confidential Telecom Automation System at Cisco Systems)',
    tags: ['Bootstrap', 'Angular Material UI', 'Telecom Automation', 'Wireframing', 'Interactive Flows']
  },
  'cisco-sdwan': {
    title: 'Cisco SD-WAN Interface System',
    domain: 'sdwan.cisco.corp',
    role: 'Associate Software Engineer (Infinity Labs / Cisco Client)',
    line1: 'Next-gen software-defined WAN management dashboard monitoring enterprise network topologies in real-time.',
    line2: 'Developed complex data visualization components and responsive UI modules across multi-screen setups.',
    architecture: 'Contributed to Cisco SD-WAN UI screens, rendering real-time network traffic graphs, MPLS tunnel health, and edge router connectivity meters. Created reusable modular CSS components to support high-density NOC operations.',
    metrics: 'Monitored 4,800+ edge routers • Sub-second telemetry UI updates • Responsive NOC layouts',
    image: 'assets/projects/cisco-sdwan.svg',
    liveUrl: null,
    enterpriseNote: 'Enterprise Platform (Confidential Network Management Portal at Cisco Systems)',
    tags: ['Angular Material UI', 'Telemetry Dashboards', 'Modular CSS', 'Network Topology', 'UI Components']
  },
  'tripknock': {
    title: 'Tripknock Travels',
    domain: 'tripknock.com',
    role: 'Frontend Developer (Freelance)',
    line1: 'Modern holiday discovery and experiential booking platform featuring customized itineraries and tours.',
    line2: 'Translated visual design mockups into blazing-fast mobile-first interfaces with SEO-optimized markup.',
    architecture: 'Engineered responsive booking cards, date pickers, and interactive destination carousels. Optimized image loading via modern responsive attributes (srcset/sizes) and streamlined Core Web Vitals to improve search ranking.',
    metrics: '95+ Mobile PageSpeed score • 35% increase in mobile booking conversion • Semantic SEO markup',
    image: 'assets/projects/tripknock.svg',
    liveUrl: 'https://www.tripknock.com',
    tags: ['HTML5/SCSS', 'Modern JavaScript', 'SEO Architecture', 'Mobile-First UI', 'Figma-to-Code']
  },
  'urja-for-women': {
    title: 'Urja For Women (NGO Platform)',
    domain: 'urjaforwomen.org',
    role: 'Frontend Developer (Freelance)',
    line1: 'Digital home for a prominent non-profit empowering women through healthcare, shelter, and community training.',
    line2: 'Designed fully accessible, high-contrast layouts with donation funnels and multi-device responsiveness.',
    architecture: 'Converted Figma designs into accessible WordPress and HTML5 web interfaces. Enforced WCAG 2.1 AA standards for high color contrast, screen reader compatibility, accessible forms, and fast checkout for philanthropic donations.',
    metrics: '50,000+ Women beneficiaries served • 100% WCAG AA contrast ratio • Seamless donor funnel',
    image: 'assets/projects/urja-for-women.svg',
    liveUrl: 'https://urjaforwomen.org',
    tags: ['Accessible HTML5', 'SCSS', 'WordPress', 'WCAG 2.1 AA', 'Non-Profit Tech']
  },
  'toplad': {
    title: 'Toplad EdTech Learning Ecosystem',
    domain: 'toplad.in',
    role: 'Frontend Developer (Client Engagement)',
    line1: 'Leading ed-tech platform delivering online prep and video lectures for professional CMA/CS certifications.',
    line2: 'Implemented responsive lecture dashboards, course catalog filters, and streamlined student checkout flows.',
    architecture: 'Engineered responsive video player controls, interactive module syllabi, test series evaluation screens, and dynamic course pricing calculators using JavaScript ES6 and modern CSS Grid layouts.',
    metrics: '10,000+ active students enrolled • Adaptive video streaming player • Responsive checkout',
    image: 'assets/projects/toplad.svg',
    liveUrl: 'https://toplad.in',
    tags: ['JavaScript ES6', 'CSS Grid & Flexbox', 'Video Player UI', 'EdTech LMS', 'Checkout Funnel']
  },
  'address-home': {
    title: 'Address Home Luxury Decor',
    domain: 'addresshome.com',
    role: 'Frontend Developer (Client Engagement)',
    line1: 'High-end luxury home decor and lifestyle e-commerce destination with rich editorial collections.',
    line2: 'Engineered sleek micro-interactions, responsive product grids, and optimized asset loading for Core Web Vitals.',
    architecture: 'Translated luxury brand aesthetics into high-converting e-commerce product detail pages, mini-cart slide-ins, and high-fidelity zoomable image galleries with buttery smooth CSS transitions.',
    metrics: 'Sub-second LCP on luxury catalog • Fluid mobile touch gestures • Responsive checkout UX',
    image: 'assets/projects/address-home.svg',
    liveUrl: 'https://www.addresshome.com',
    tags: ['Luxury E-Commerce', 'Responsive CSS3', 'JavaScript', 'Core Web Vitals', 'Micro-interactions']
  },
  'tripomate': {
    title: 'Tripomate Travel Aggregator',
    domain: 'tripomate.com',
    role: 'Frontend Developer (Freelance)',
    line1: 'Dynamic flight and hotel aggregation platform with real-time fare comparison and booking workflows.',
    line2: 'Built interactive search filters, date-picker widgets, and cross-browser verified reservation screens.',
    architecture: 'Constructed asynchronous search filters, airline baggage breakdown accordions, and fare matrix tables with robust error state fallbacks and responsive breakpoints.',
    metrics: 'Multi-carrier fare comparison • Fast filtering under 100ms • Cross-browser verified',
    image: 'assets/projects/tripomate.svg',
    liveUrl: 'https://www.tripomate.com',
    tags: ['HTML5/Bootstrap', 'JavaScript', 'Flight Matrix UI', 'API Integration', 'Responsive Design']
  },
  'buddha-trail': {
    title: 'The Buddha Trail: Mountain Marathon',
    domain: 'capitaltrails.in',
    role: 'Frontend Developer (Client Engagement)',
    line1: 'Ultramarathon and high-altitude mountain expedition portal featuring scenic Singalila trail routes.',
    line2: 'Crafted immersive visual storytelling pages, route elevation maps, and frictionless registration forms.',
    architecture: 'Created an elevation profile visualizer for the 100K/65K/30K ultra runs across Sandakphu peak, complete with ITRA qualifier points display and mandatory gear checklist modals.',
    metrics: '4 ITRA qualifying points display • Fast mobile trail map viewer • High-altitude runner portal',
    image: 'assets/projects/buddha-trail.svg',
    liveUrl: 'https://capitaltrails.in',
    tags: ['Modern CSS', 'JavaScript', 'Elevation Visualizer', 'Visual Storytelling', 'Form Validation']
  },
  'mindrops': {
    title: 'Mindrops Digital Agency Showcase',
    domain: 'mindrops.com',
    role: 'UI/UX & Frontend Developer (Mindrops)',
    line1: 'Agency brand site showcasing custom software engineering, product design, and digital solutions.',
    line2: 'Developed modular UI components, interactive portfolio galleries, and cross-client responsive email templates.',
    architecture: 'Delivered clean, modular page layouts aligned strictly with functional requirements. Converted visual designs into accessible HTML/CSS, resolved multi-device defects, and authored verified cross-client HTML email newsletters.',
    metrics: 'Cross-client verified emails across Outlook & Gmail • 100% semantic markup • Reusable components',
    image: 'assets/projects/mindrops.svg',
    liveUrl: 'https://mindrops.com',
    tags: ['HTML5/CSS3', 'Component Architecture', 'HTML Email Templating', 'Cross-Device QA', 'SEO']
  },
  'codifier': {
    title: 'Codifier Technologies',
    domain: 'codifier.in',
    role: 'Frontend Developer (Codifier)',
    line1: 'Creative agency web presence delivering custom web applications and digital transformation services.',
    line2: 'Converted complex PSD designs into standards-compliant HTML/CSS and crafted verified responsive newsletters.',
    architecture: 'Implemented pixel-perfect web pages from Photoshop mockups, maintained strict cross-browser compatibility across legacy and modern engines, and ensured SEO-friendly semantic structure.',
    metrics: 'Pixel-perfect PSD translation • Supported concurrent client deliveries • Fast turn-around',
    image: 'assets/projects/codifier.svg',
    liveUrl: 'https://codifier.in',
    tags: ['PSD-to-HTML', 'WordPress', 'CSS3 Transitions', 'Responsive Web Design', 'Email Verification']
  },
  'playwright-workflow': {
    title: 'Impact-Aware Bug Validation Workflow',
    domain: 'playwright.ci.pipeline',
    role: 'Concept & Implementation Lead',
    line1: 'Intelligent test execution framework that analyzes Git diffs and executes only tests for impacted components.',
    line2: 'Accelerated CI/CD test feedback cycles by 65% while maintaining rigorous end-to-end regression safety.',
    architecture: 'Designed an impact-based bug-fix workflow connecting task context, Git change analysis, and targeted Playwright tests. Leverages AI-assisted tools (Cursor AI, Claude) to accelerate bug reproduction, automated test generation, and fix-and-retest workflows without running unneeded suites.',
    metrics: '65% CI pipeline speedup • Zero regression escapees • AI-assisted test authoring',
    image: 'assets/projects/playwright-workflow.svg',
    liveUrl: null,
    enterpriseNote: 'Architectural Innovation & Concept (Designed for Enterprise CI/CD at Wondrfly)',
    tags: ['Playwright Test', 'Git Hook Analysis', 'Cursor AI', 'Claude Workflows', 'CI/CD Optimization']
  }
};

function initCaseStudyModal() {
  const modalOverlay = document.getElementById('case-study-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (!modalOverlay || !modalCloseBtn) return;

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach to all "View Details" and "Enterprise Specs" buttons
  document.querySelectorAll('[data-project-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-trigger');
      const data = projectDetailsData[projectId];
      if (!data) return;

      document.getElementById('modal-img').src = data.image;
      document.getElementById('modal-img').alt = data.title;
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-domain').textContent = data.domain;
      document.getElementById('modal-role').textContent = data.role;
      document.getElementById('modal-line1').textContent = data.line1;
      document.getElementById('modal-line2').textContent = data.line2;
      document.getElementById('modal-architecture').textContent = data.architecture;
      document.getElementById('modal-metrics').textContent = data.metrics;

      // Tags
      const tagsContainer = document.getElementById('modal-tags');
      tagsContainer.innerHTML = '';
      data.tags.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-badge';
        span.textContent = t;
        tagsContainer.appendChild(span);
      });

      // External link button in modal
      const modalActionBtn = document.getElementById('modal-action-btn');
      if (data.liveUrl) {
        modalActionBtn.href = data.liveUrl;
        modalActionBtn.target = '_blank';
        modalActionBtn.rel = 'noopener noreferrer';
        modalActionBtn.innerHTML = `Visit Live Site <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>`;
        modalActionBtn.style.display = 'inline-flex';
      } else {
        modalActionBtn.style.display = 'none';
      }

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

/* ==========================================================================
   Clipboard Actions & Toast Notifications
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
        showToast('Direct email: ' + email);
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
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   Mobile Navigation Drawer Toggle
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
   Scroll Spy & Active Section Highlighting
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    // Header shadow
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll spy
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

/* ==========================================================================
   Interactive UI Design Token Sandbox (Proves Senior UI Craftsmanship)
   ========================================================================== */
function initDesignTokenPlayground() {
  const radiusSlider = document.getElementById('token-radius-slider');
  const radiusValue = document.getElementById('token-radius-val');
  const demoCard = document.getElementById('interactive-demo-card');
  const demoBtn = document.getElementById('interactive-demo-btn');
  const swatchBtns = document.querySelectorAll('.swatch-btn');
  const contrastRatio = document.getElementById('live-contrast-ratio');

  if (!radiusSlider || !demoCard) return;

  radiusSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    radiusValue.textContent = `${val}px`;
    demoCard.style.borderRadius = `${val}px`;
    if (demoBtn) demoBtn.style.borderRadius = `${Math.min(val, 12)}px`;
  });

  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const color = btn.getAttribute('data-color');
      const ratio = btn.getAttribute('data-ratio');
      
      if (demoBtn) {
        demoBtn.style.backgroundColor = color;
      }
      if (contrastRatio) {
        contrastRatio.textContent = `${ratio} (WCAG AAA)`;
      }
      showToast(`Selected design token: ${btn.getAttribute('data-name')} (${color})`);
    });
  });
}
