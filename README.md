# Ashutosh Kumar — Senior Frontend Engineer & Senior UI Developer Portfolio

A modern, high-performance multi-page portfolio website engineered specifically for **Ashutosh Kumar (Senior Frontend Engineer & Senior UI Developer)**. Crafted to 2026 design standards (Linear / Apple dark aesthetic, Bento Grid layout, zero external framework dependencies, 100% Lighthouse Performance, WCAG 2.1 AA accessibility, and zero horizontal overflow across 320px–1280px+ screens).

---

## 🌟 Multi-Page Architecture

1. **Home (`index.html`)**:
   - **Hero Section**: Senior introduction, status pill (`🟢 Immediate Joiner (0 Days Notice)`), prominent GitHub profile button (`ashutosh872`), live IST clock, and metrics bento grid (8+ years experience, 14 shipped systems, 97/100 rating at Samsung SDS Global).
   - **Top 3 Featured Works**: Handpicked highlights representing commercial scale (`Wondrfly`), enterprise portals (`Samsung SDS Metadata Platform`), and live e-commerce/travel (`The Buddha Trail`).
   - **View All Works Banner**: Direct pathway to the full 14-project catalog.
   - **About Me Preview**: Executive summary with career highlights and direct link to `about.html`.
   - **Quick Contact Card**: Fast conversion with 1-click email copy, GitHub, LinkedIn, and direct phone link.

2. **About Me (`about.html`)**:
   - **Engineering Philosophy**: Detailed breakdown of frontend architecture, zero layout shift (CLS), mobile-first responsiveness, and Playwright test automation.
   - **Technical Skills Matrix**: Comprehensive skills bento grid (Frontend Core, UI Engineering & Frameworks, Testing & Performance, Tooling & Design).
   - **Full Career Timeline (8+ Years)**: 7 positions spanning 2016 to 2026 (Wondrfly Inc., Freelance Startups, Samsung SDS Global, Experience Commerce, Mindrops, Infinity Labs / Cisco Client, Codifier Technologies).
   - **Education & Honors**: MCA (GGSIPU New Delhi), BCA (Sikkim Manipal University), and 97/100 Performance Appraisal & Formal Management Appreciation at Samsung SDS Global.

3. **Selected Works (`works.html`)**:
   - **Complete 14 Projects Catalog**: All enterprise and commercial projects documented in resume.
   - **Interactive Toolbar**: Filter tabs (All Works [14], Enterprise Platforms [4], Commercial & Client [10]) plus live search box.
   - **Real Production Screens & Sanitized NDA Wireframes**: High-res screenshots for live client sites and clean architectural wireframes for internal enterprise portals.
   - **Case Study Modal**: Deep-dive implementation details, measurable metrics, skills tags, and 1-click shareable project links (`#project-id`).

4. **Contact & Availability (`contact.html`)**:
   - **Contact Bento Grid (6 Channels)**:
     - Direct Email (`kumar.ashu872@gmail.com`) with 1-click clipboard copy.
     - GitHub Profile (`https://github.com/ashutosh872`) highlighted prominently for code review.
     - LinkedIn Profile (`https://linkedin.com/in/kumarashu872`).
     - Direct Phone (`+91 9310681373`).
     - ATS Resume Download (`assets/Ashutosh_Kumar_Resume.pdf` and link to `assets/Ashutosh_Kumar_ATS_Resume.html`).
     - Location & Real-Time IST Clock (`New Delhi / Remote India`, `Asia/Kolkata` live clock with Immediate Joiner status).
   - **Recruiter Quick Notes**: Immediate 0 days notice, role preferences, work authorization, and tech stack match.

---

## 📄 ATS-Friendly Resume Header

```text
ASHUTOSH KUMAR
SENIOR FRONTEND ENGINEER • SENIOR UI DEVELOPER
New Delhi, India | +91 9310681373 | kumar.ashu872@gmail.com
Portfolio: https://ashutosh872.github.io/portfolio | GitHub: https://github.com/ashutosh872 | LinkedIn: https://linkedin.com/in/kumarashu872
```

---

## 🚀 Live Deployment (GitHub Pages)

- **Live URL**: `https://ashutosh872.github.io/portfolio/`
- **Home**: `https://ashutosh872.github.io/portfolio/index.html`
- **About**: `https://ashutosh872.github.io/portfolio/about.html`
- **Works**: `https://ashutosh872.github.io/portfolio/works.html`
- **Contact**: `https://ashutosh872.github.io/portfolio/contact.html`

---

## 📂 Project Structure

```text
portfolio/
├── index.html                  # Home page (Intro, Top 3 Projects, About Summary, Quick Contact)
├── about.html                  # Complete About page (Philosophy, Skills, 8+ yr Timeline, Education)
├── works.html                  # Full Works catalog (14 Projects, Filter Tabs, Search, Case Studies)
├── contact.html                # Dedicated Contact page (6-Channel Bento Grid & Real-Time IST Clock)
├── css/
│   └── style.css               # Modern CSS3 with Custom Properties, Bento Grid, Print Styles, Strict Anti-Overflow
├── js/
│   └── main.js                 # Theme toggle, live clock, project filtering, modal, toast notifications
└── assets/
    ├── Ashutosh_Kumar_Resume.pdf # Printable PDF ATS resume
    ├── Ashutosh_Kumar_ATS_Resume.html # Semantic ATS resume web version
    └── projects/               # Real production screenshots and sanitized architectural wireframes
```

---

## 💻 Tech Stack & Design Decisions

- **Pure Semantic HTML5 & Modern CSS3**: Zero heavy runtime frameworks (React/Vue/Webpack/Vite overhead eliminated for 100/100 Lighthouse performance).
- **CSS Custom Properties**: Fluid dark/light theme switching with instant `localStorage` persistence across all pages.
- **Strict Anti-Overflow Architecture**: `overflow-x: hidden`, flexible flexbox wrap, and responsive typography ensuring zero word-clipping and zero horizontal scroll from 320px mobile to 4K displays.
- **Executive Print View**: Clean `@media print` styling allowing recruiters to print or save a candidate summary directly via `Ctrl+P`.
