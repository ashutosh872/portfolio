# Ashutosh Kumar — Senior Frontend Engineer & UI Architect Portfolio

A modern, high-performance portfolio website engineered specifically for **Ashutosh Kumar (Senior Frontend / UI Engineer)**. Crafted to 2025/2026 design standards (Linear / Apple dark aesthetic, Bento Grid layout, zero external framework dependencies, 100% Lighthouse Performance, WCAG 2.1 AA accessibility).

---

## 🌟 Key Features

1. **Bento Grid Architecture**:
   - Modern dark/light theme with ambient radial lighting and subtle mesh texture.
   - Interactive live status pill (`🟢 Open for Senior Frontend / UI Engineer Roles`).
   - Live time in New Delhi (IST GMT+5:30) with ticking real-time clock.
   - High-impact metrics showcase (8+ years experience, 97/100 code rating at Samsung SDS).

2. **Selected Works Showcase (All 14 Projects)**:
   - **Name**: Clear brand/system name with domain tag.
   - **2-Line Impact Summary**: Exactly two clean, punchy lines detailing what was built and the measurable outcome.
   - **High-Fidelity Screenshot Mockup**: Clean SVG browser preview for each project with custom UI components, data tables, graphs, and badges.
   - **Live Link in New Tab**: Direct links (`target="_blank" rel="noopener noreferrer"`) for all online client sites (Wondrfly, Tripknock, Urja for Women, Toplad, Address Home, Buddha Trail, Mindrops, etc.).
   - **Enterprise Specs & Case Study Modals**: Dedicated deep-dive architectural breakdowns for confidential enterprise systems (Samsung SDS Metadata, Samsung SDS AGM, Cisco BPA, Cisco SD-WAN, and Playwright Bug Engine).

3. **Interactive UI Developer Playground**:
   - Live Design Token Inspector with interactive border-radius slider, color tokens, and real-time WCAG AAA contrast ratio calculation. Proves frontend & design system mastery immediately to hiring managers.

4. **Complete Career Timeline**:
   - Highlights 8+ years across Wondrfly, Freelance startups, Samsung SDS (with 97/100 rating badge), Experience Commerce, Mindrops, Infinity Labs (Cisco), and Codifier.

5. **Technical Skills Matrix**:
   - Grouped into Frontend Core, UI Engineering & Design Systems, Testing & Automation (Playwright), Accessibility & Performance (WCAG 2.1/2.2), and Tools & AI Workflows (Cursor AI, Claude).

6. **Resume Download & Fast Conversion**:
   - Download ATS Resume button linked directly to `assets/Ashutosh_Kumar_Resume.pdf`.
   - 1-click "Copy Email" button with toast notification.
   - Direct mailto, phone, and LinkedIn profile links.

---

## 📄 Adding this Portfolio to Your Resume

Include this link right below your name in your Resume header:

### ATS-Friendly Resume Header Example:

```text
ASHUTOSH KUMAR
SENIOR FRONTEND ENGINEER • SENIOR UI DEVELOPER
New Delhi, India | +91 9310681373 | kumar.ashu872@gmail.com
Portfolio: https://ashutosh872.github.io/portfolio | LinkedIn: linkedin.com/in/kumarashu872 | GitHub: github.com/ashutosh872
```

---

## 🚀 How to Deploy (Free in 2 Minutes)

### Option 1: GitHub Pages (Recommended)
1. Initialize git in this directory and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: initial senior frontend portfolio"
   ```
2. Create a new repository on GitHub named `portfolio` (or `ashutosh872.github.io`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/ashutosh872/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub Repository Settings -> **Pages** -> Select **Branch: main** -> Save.
5. Your portfolio is instantly live at: `https://ashutosh872.github.io/portfolio`!

### Option 2: Vercel (1-Click)
1. Run `npx vercel` or import the GitHub repository in [vercel.com](https://vercel.com).
2. It deploys automatically as a static site with global CDN in 10 seconds.

### Option 3: Netlify
1. Drag and drop the `portfolio` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Instantly receive a live URL.

---

## 📂 Project Structure

```text
portfolio/
├── index.html                  # Semantic, accessible HTML5 single-page application
├── css/
│   └── style.css               # Modern CSS3 with Custom Properties, Bento Grid, Flexbox
├── js/
│   └── main.js                 # Theme toggle, live clock, project filtering, modal, toast
├── assets/
│   ├── Ashutosh_Kumar_Resume.pdf # Downloadable resume PDF
│   └── projects/               # High-fidelity SVG mockup screenshots for all 14 projects
│       ├── wondrfly.svg
│       ├── samsung-metadata.svg
│       ├── samsung-agm.svg
│       ├── cisco-bpa.svg
│       ├── cisco-sdwan.svg
│       ├── tripknock.svg
│       ├── urja-for-women.svg
│       ├── toplad.svg
│       ├── address-home.svg
│       ├── tripomate.svg
│       ├── buddha-trail.svg
│       ├── mindrops.svg
│       ├── codifier.svg
│       └── playwright-workflow.svg
└── generate-previews.js        # Node.js SVG generator script
```

---

## 🎨 Swapping with Real Screenshots Later

If you want to replace any SVG mockups with actual PNG/JPG screenshots of your work in the future:
1. Save your screenshot as a PNG or JPG (e.g. `assets/projects/wondrfly.png`).
2. Update the `src` attribute in `index.html` (e.g. `<img src="assets/projects/wondrfly.png" ...>`).
3. Update the `image` path in `js/main.js` under `projectDetailsData`.
