import fs from 'fs';
import path from 'path';

const projects = [
  {
    id: 'wondrfly',
    domain: 'wondrfly.com',
    title: 'Wondrfly',
    subtitle: 'Children Activities & Camps Discovery',
    badge: 'Kids EdTech & Enrichment',
    bgStart: '#1e1b4b',
    bgEnd: '#312e81',
    accent: '#818cf8',
    secondary: '#f59e0b',
    textMain: '#ffffff',
    textMuted: '#c7d2fe',
    uiType: 'marketplace'
  },
  {
    id: 'samsung-metadata',
    domain: 'metadata.samsung-sds.internal',
    title: 'Samsung SDS Metadata',
    subtitle: 'Enterprise Data Governance Platform',
    badge: 'Enterprise Architecture',
    bgStart: '#090d16',
    bgEnd: '#0f172a',
    accent: '#38bdf8',
    secondary: '#22c55e',
    textMain: '#ffffff',
    textMuted: '#94a3b8',
    uiType: 'enterprise-dashboard'
  },
  {
    id: 'samsung-agm',
    domain: 'agm.samsung-sds.internal',
    title: 'Samsung SDS AGM Platform',
    subtitle: 'Annual General Meeting & Hybrid Voting',
    badge: 'High-Concurrency Governance',
    bgStart: '#061a23',
    bgEnd: '#0f2937',
    accent: '#10b981',
    secondary: '#38bdf8',
    textMain: '#ffffff',
    textMuted: '#99f6e4',
    uiType: 'voting-portal'
  },
  {
    id: 'cisco-bpa',
    domain: 'bpa.cisco.corp',
    title: 'Cisco BPA Portal',
    subtitle: 'Business Process Automation',
    badge: 'Telecom & Network Operations',
    bgStart: '#041e2f',
    bgEnd: '#06324d',
    accent: '#00bceb',
    secondary: '#f97316',
    textMain: '#ffffff',
    textMuted: '#bae6fd',
    uiType: 'telecom-portal'
  },
  {
    id: 'cisco-sdwan',
    domain: 'sdwan.cisco.corp',
    title: 'Cisco SD-WAN Portal',
    subtitle: 'Software-Defined Network Operations',
    badge: 'Real-time Network Telemetry',
    bgStart: '#0a192f',
    bgEnd: '#112240',
    accent: '#00d2d3',
    secondary: '#64ffda',
    textMain: '#ffffff',
    textMuted: '#8892b0',
    uiType: 'network-monitor'
  },
  {
    id: 'tripknock',
    domain: 'tripknock.com',
    title: 'Tripknock Travels',
    subtitle: 'Curated Holidays & Experience Tours',
    badge: 'Travel Tech & Booking',
    bgStart: '#1c1917',
    bgEnd: '#292524',
    accent: '#f97316',
    secondary: '#fbbf24',
    textMain: '#ffffff',
    textMuted: '#fed7aa',
    uiType: 'travel-portal'
  },
  {
    id: 'urja-for-women',
    domain: 'urjaforwomen.org',
    title: 'Urja For Women',
    subtitle: 'Grassroots Women Empowerment NGO',
    badge: 'Non-Profit & Community',
    bgStart: '#1f1319',
    bgEnd: '#3b122d',
    accent: '#fb7185',
    secondary: '#f43f5e',
    textMain: '#ffffff',
    textMuted: '#fecdd3',
    uiType: 'ngo-portal'
  },
  {
    id: 'toplad',
    domain: 'toplad.in',
    title: 'Toplad EdTech',
    subtitle: 'CMA / CS Professional Video Learning',
    badge: 'EdTech & Video LMS',
    bgStart: '#172554',
    bgEnd: '#1e3a8a',
    accent: '#60a5fa',
    secondary: '#facc15',
    textMain: '#ffffff',
    textMuted: '#bfdbfe',
    uiType: 'edtech'
  },
  {
    id: 'address-home',
    domain: 'addresshome.com',
    title: 'Address Home',
    subtitle: 'Luxury Decor & Premium Furniture',
    badge: 'Luxury E-Commerce',
    bgStart: '#18181b',
    bgEnd: '#27272a',
    accent: '#d97706',
    secondary: '#f59e0b',
    textMain: '#ffffff',
    textMuted: '#e4e4e7',
    uiType: 'ecommerce'
  },
  {
    id: 'tripomate',
    domain: 'tripomate.com',
    title: 'Tripomate',
    subtitle: 'Global Fare Aggregator & Itineraries',
    badge: 'Aviation & Hospitality',
    bgStart: '#082f49',
    bgEnd: '#075985',
    accent: '#38bdf8',
    secondary: '#34d399',
    textMain: '#ffffff',
    textMuted: '#bae6fd',
    uiType: 'travel-portal'
  },
  {
    id: 'buddha-trail',
    domain: 'capitaltrails.in',
    title: 'Buddha Trail',
    subtitle: 'High-Altitude Singalila Trail Running',
    badge: 'Expedition & Adventure',
    bgStart: '#142718',
    bgEnd: '#1c3d22',
    accent: '#4ade80',
    secondary: '#fb923c',
    textMain: '#ffffff',
    textMuted: '#bbf7d0',
    uiType: 'adventure'
  },
  {
    id: 'mindrops',
    domain: 'mindrops.com',
    title: 'Mindrops Digital',
    subtitle: 'Product Design & Engineering Agency',
    badge: 'Digital Product Agency',
    bgStart: '#1e1b4b',
    bgEnd: '#2e1065',
    accent: '#a855f7',
    secondary: '#ec4899',
    textMain: '#ffffff',
    textMuted: '#e9d5ff',
    uiType: 'agency'
  },
  {
    id: 'codifier',
    domain: 'codifier.in',
    title: 'Codifier Technologies',
    subtitle: 'Web Solutions & Design Systems',
    badge: 'Frontend Engineering Agency',
    bgStart: '#042f2e',
    bgEnd: '#134e4a',
    accent: '#2dd4bf',
    secondary: '#a7f3d0',
    textMain: '#ffffff',
    textMuted: '#ccfbf1',
    uiType: 'agency'
  },
  {
    id: 'playwright-workflow',
    domain: 'playwright.ci.pipeline',
    title: 'Playwright Impact Engine',
    subtitle: 'Git-Aware Targeted Regression Workflow',
    badge: 'AI & Test Automation',
    bgStart: '#09090b',
    bgEnd: '#18181b',
    accent: '#22c55e',
    secondary: '#a855f7',
    textMain: '#ffffff',
    textMuted: '#a1a1aa',
    uiType: 'test-runner'
  }
];

function getMockupContent(p) {
  switch (p.uiType) {
    case 'marketplace':
      return `
        <!-- Search bar -->
        <g transform="translate(36, 68)">
          <rect width="728" height="42" rx="10" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.15"/>
          <circle cx="24" cy="21" r="7" fill="none" stroke="${p.accent}" stroke-width="2"/>
          <line x1="29" y1="26" x2="35" y2="32" stroke="${p.accent}" stroke-width="2" stroke-linecap="round"/>
          <text x="46" y="25" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="13">Search kids activities, STEM robotics, swimming, ballet camps...</text>
          <rect x="620" y="7" width="98" height="28" rx="6" fill="url(#accentGlow-${p.id})"/>
          <text x="669" y="25" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Find Classes</text>
        </g>
        <!-- Cards -->
        <g transform="translate(36, 126)">
          <!-- Card 1 -->
          <rect width="232" height="280" rx="12" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
          <rect width="232" height="130" rx="12" fill="#4338ca" fill-opacity="0.5"/>
          <rect x="12" y="12" width="70" height="20" rx="10" fill="#f59e0b"/>
          <text x="47" y="25" fill="#000000" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Robotics</text>
          <text x="14" y="160" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Young Innovators Lab</text>
          <text x="14" y="180" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="11">Ages 6-12 • Weekend Batch</text>
          <text x="14" y="210" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12">★ 4.9 (128 reviews)</text>
          <text x="14" y="245" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800">$45 <tspan font-size="10" fill="#a5b4fc" font-weight="normal">/ session</tspan></text>
          <rect x="136" y="226" width="82" height="28" rx="6" fill="${p.accent}"/>
          <text x="177" y="244" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Book Spot</text>

          <!-- Card 2 -->
          <g transform="translate(248, 0)">
            <rect width="232" height="280" rx="12" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
            <rect width="232" height="130" rx="12" fill="#065f46" fill-opacity="0.5"/>
            <rect x="12" y="12" width="75" height="20" rx="10" fill="#10b981"/>
            <text x="49" y="25" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Aquatics</text>
            <text x="14" y="160" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Junior Swim Champions</text>
            <text x="14" y="180" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="11">Ages 4-10 • Heated Indoor Pool</text>
            <text x="14" y="210" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12">★ 4.8 (94 reviews)</text>
            <text x="14" y="245" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800">$60 <tspan font-size="10" fill="#a5b4fc" font-weight="normal">/ session</tspan></text>
            <rect x="136" y="226" width="82" height="28" rx="6" fill="${p.accent}"/>
            <text x="177" y="244" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Book Spot</text>
          </g>

          <!-- Card 3 -->
          <g transform="translate(496, 0)">
            <rect width="232" height="280" rx="12" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
            <rect width="232" height="130" rx="12" fill="#831843" fill-opacity="0.5"/>
            <rect x="12" y="12" width="70" height="20" rx="10" fill="#f43f5e"/>
            <text x="47" y="25" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Fine Arts</text>
            <text x="14" y="160" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Clay &amp; Canvas Atelier</text>
            <text x="14" y="180" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="11">Ages 5-14 • Creative Studio</text>
            <text x="14" y="210" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12">★ 5.0 (76 reviews)</text>
            <text x="14" y="245" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800">$40 <tspan font-size="10" fill="#a5b4fc" font-weight="normal">/ session</tspan></text>
            <rect x="136" y="226" width="82" height="28" rx="6" fill="${p.accent}"/>
            <text x="177" y="244" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Book Spot</text>
          </g>
        </g>
      `;

    case 'enterprise-dashboard':
      return `
        <!-- Top Metrics Bar -->
        <g transform="translate(36, 68)">
          <rect width="170" height="60" rx="8" fill="#ffffff" fill-opacity="0.05" stroke="#38bdf8" stroke-opacity="0.3"/>
          <text x="14" y="24" fill="#94a3b8" font-family="system-ui" font-size="10">TOTAL DATA ASSETS</text>
          <text x="14" y="48" fill="#38bdf8" font-family="system-ui" font-size="20" font-weight="800">1,420,890</text>

          <g transform="translate(186, 0)">
            <rect width="170" height="60" rx="8" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="14" y="24" fill="#94a3b8" font-family="system-ui" font-size="10">QUALITY SCORE</text>
            <text x="14" y="48" fill="#22c55e" font-family="system-ui" font-size="20" font-weight="800">97/100 (A+)</text>
          </g>

          <g transform="translate(372, 0)">
            <rect width="170" height="60" rx="8" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="14" y="24" fill="#94a3b8" font-family="system-ui" font-size="10">SYNCHRONIZED PIPELINES</text>
            <text x="14" y="48" fill="#f59e0b" font-family="system-ui" font-size="20" font-weight="800">3,412 Active</text>
          </g>

          <g transform="translate(558, 0)">
            <rect width="170" height="60" rx="8" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="14" y="24" fill="#94a3b8" font-family="system-ui" font-size="10">ACCESSIBILITY (WCAG)</text>
            <text x="14" y="48" fill="#a855f7" font-family="system-ui" font-size="20" font-weight="800">100% AA</text>
          </g>
        </g>
        <!-- Data Table / Lineage View -->
        <g transform="translate(36, 142)">
          <rect width="728" height="265" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
          <text x="20" y="32" fill="#ffffff" font-family="system-ui" font-size="13" font-weight="700">Metadata Schema Catalog &amp; Enterprise Governance</text>
          <rect x="20" y="48" width="688" height="30" rx="4" fill="#ffffff" fill-opacity="0.06"/>
          <text x="32" y="68" fill="#94a3b8" font-family="system-ui" font-size="11" font-weight="600">SCHEMA ID</text>
          <text x="180" y="68" fill="#94a3b8" font-family="system-ui" font-size="11" font-weight="600">DATA DOMAIN</text>
          <text x="360" y="68" fill="#94a3b8" font-family="system-ui" font-size="11" font-weight="600">PIPELINE STATUS</text>
          <text x="520" y="68" fill="#94a3b8" font-family="system-ui" font-size="11" font-weight="600">COMPLIANCE</text>
          <text x="650" y="68" fill="#94a3b8" font-family="system-ui" font-size="11" font-weight="600">ACTION</text>
          
          <line x1="20" y1="120" x2="708" y2="120" stroke="#ffffff" stroke-opacity="0.06"/>
          <text x="32" y="106" fill="#38bdf8" font-family="system-ui" font-size="11" font-weight="600">SCH-SAMSUNG-CORE-01</text>
          <text x="180" y="106" fill="#e2e8f0" font-family="system-ui" font-size="11">Global Supply Chain</text>
          <rect x="360" y="94" width="85" height="18" rx="9" fill="#22c55e" fill-opacity="0.2"/>
          <text x="402" y="107" fill="#22c55e" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">Synced (2ms)</text>
          <text x="520" y="106" fill="#38bdf8" font-family="system-ui" font-size="11">Passed (99.8%)</text>
          <rect x="645" y="92" width="55" height="22" rx="4" fill="#38bdf8" fill-opacity="0.2"/>
          <text x="672" y="107" fill="#38bdf8" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">Inspect</text>

          <line x1="20" y1="165" x2="708" y2="165" stroke="#ffffff" stroke-opacity="0.06"/>
          <text x="32" y="148" fill="#38bdf8" font-family="system-ui" font-size="11" font-weight="600">SCH-SAMSUNG-FIN-08</text>
          <text x="180" y="148" fill="#e2e8f0" font-family="system-ui" font-size="11">Financial Settlement HQ</text>
          <rect x="360" y="136" width="85" height="18" rx="9" fill="#22c55e" fill-opacity="0.2"/>
          <text x="402" y="149" fill="#22c55e" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">Synced (5ms)</text>
          <text x="520" y="148" fill="#38bdf8" font-family="system-ui" font-size="11">Passed (100%)</text>
          <rect x="645" y="134" width="55" height="22" rx="4" fill="#38bdf8" fill-opacity="0.2"/>
          <text x="672" y="149" fill="#38bdf8" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">Inspect</text>

          <text x="32" y="190" fill="#38bdf8" font-family="system-ui" font-size="11" font-weight="600">SCH-SAMSUNG-LOGISTICS-14</text>
          <text x="180" y="190" fill="#e2e8f0" font-family="system-ui" font-size="11">Automated Fleet Telematics</text>
          <rect x="360" y="178" width="85" height="18" rx="9" fill="#f59e0b" fill-opacity="0.2"/>
          <text x="402" y="191" fill="#f59e0b" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">Processing</text>
          <text x="520" y="190" fill="#38bdf8" font-family="system-ui" font-size="11">Passed (99.4%)</text>
          <rect x="645" y="176" width="55" height="22" rx="4" fill="#38bdf8" fill-opacity="0.2"/>
          <text x="672" y="191" fill="#38bdf8" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">Inspect</text>

          <g transform="translate(20, 215)">
            <rect width="688" height="38" rx="6" fill="#000000" fill-opacity="0.3"/>
            <text x="15" y="24" fill="#94a3b8" font-family="system-ui" font-size="10">Lineage: Kafka Stream ➔ Samsung SDS Lakehouse ➔ Delta Indexer ➔ Metadata Portal [Active 24/7]</text>
          </g>
        </g>
      `;

    case 'voting-portal':
      return `
        <g transform="translate(36, 68)">
          <rect width="450" height="210" rx="10" fill="#000000" fill-opacity="0.4" stroke="#ffffff" stroke-opacity="0.1"/>
          <circle cx="30" cy="30" r="6" fill="#ef4444"/>
          <text x="45" y="34" fill="#ef4444" font-family="system-ui" font-size="11" font-weight="700">LIVE AGM BROADCAST • 54th Session</text>
          <text x="30" y="70" fill="#ffffff" font-family="system-ui" font-size="16" font-weight="700">Samsung SDS Shareholders General Meeting</text>
          <text x="30" y="95" fill="#99f6e4" font-family="system-ui" font-size="12">Quorum Established: 84.6% Voting Rights Registered</text>
          
          <rect x="30" y="115" width="390" height="80" rx="6" fill="#0f2937" stroke="#10b981" stroke-opacity="0.3"/>
          <circle cx="225" cy="155" r="18" fill="#10b981" fill-opacity="0.2"/>
          <polygon points="220,147 234,155 220,163" fill="#10b981"/>

          <g transform="translate(468, 0)">
            <rect width="260" height="340" rx="10" fill="url(#cardBg-${p.id})" stroke="#10b981" stroke-opacity="0.3"/>
            <rect x="16" y="16" width="100" height="20" rx="10" fill="#10b981" fill-opacity="0.2"/>
            <text x="66" y="30" fill="#10b981" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">ACTIVE BALLOT</text>
            <text x="16" y="60" fill="#ffffff" font-family="system-ui" font-size="13" font-weight="700">Agenda Item #3</text>
            <text x="16" y="78" fill="#99f6e4" font-family="system-ui" font-size="11">Approval of Financial Statements &amp; Dividends</text>
            
            <rect x="16" y="105" width="228" height="40" rx="8" fill="#10b981"/>
            <text x="130" y="130" fill="#ffffff" font-family="system-ui" font-size="13" font-weight="700" text-anchor="middle">✓ VOTE IN FAVOR</text>

            <rect x="16" y="155" width="228" height="40" rx="8" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-opacity="0.4"/>
            <text x="130" y="180" fill="#f87171" font-family="system-ui" font-size="13" font-weight="700" text-anchor="middle">✗ VOTE AGAINST</text>

            <rect x="16" y="205" width="228" height="36" rx="8" fill="#ffffff" fill-opacity="0.08"/>
            <text x="130" y="228" fill="#94a3b8" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">ABSTAIN</text>

            <text x="16" y="270" fill="#99f6e4" font-family="system-ui" font-size="11">Real-time Hybrid Tally:</text>
            <rect x="16" y="280" width="228" height="12" rx="6" fill="#ffffff" fill-opacity="0.1"/>
            <rect x="16" y="280" width="210" height="12" rx="6" fill="#10b981"/>
            <text x="16" y="310" fill="#ffffff" font-family="system-ui" font-size="10" font-weight="600">92.1% In Favor • Encrypted Ballot</text>
          </g>

          <g transform="translate(0, 222)">
            <rect width="450" height="118" rx="8" fill="#ffffff" fill-opacity="0.04" stroke="#ffffff" stroke-opacity="0.08"/>
            <text x="16" y="24" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700">Scheduled Agenda Timeline</text>
            <text x="16" y="48" fill="#10b981" font-family="system-ui" font-size="11">✓ Item 1: Election of Internal Directors [Adopted]</text>
            <text x="16" y="70" fill="#10b981" font-family="system-ui" font-size="11">✓ Item 2: Audit Committee Member Appointments [Adopted]</text>
            <text x="16" y="92" fill="#38bdf8" font-family="system-ui" font-size="11">➔ Item 3: FY2023 Dividend Distribution [Voting Now]</text>
          </g>
        </g>
      `;

    case 'telecom-portal':
      return `
        <g transform="translate(36, 68)">
          <rect width="728" height="50" rx="8" fill="#ffffff" fill-opacity="0.06" stroke="#00bceb" stroke-opacity="0.3"/>
          <text x="16" y="30" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Cisco Business Process Automation (BPA) Engine</text>
          <rect x="580" y="12" width="132" height="26" rx="13" fill="#00bceb"/>
          <text x="646" y="29" fill="#041e2f" font-family="system-ui" font-size="11" font-weight="700" text-anchor="middle">+ New Workflow</text>
        </g>
        <g transform="translate(36, 130)">
          <rect width="728" height="275" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
          <text x="20" y="28" fill="#bae6fd" font-family="system-ui" font-size="12" font-weight="600">Enterprise Orchestration Canvas: Zero-Touch SD-WAN Provisioning</text>
          <g transform="translate(20, 50)">
            <rect width="145" height="90" rx="8" fill="#042a42" stroke="#00bceb" stroke-width="1.5"/>
            <text x="14" y="24" fill="#00bceb" font-family="system-ui" font-size="10" font-weight="700">TRIGGER: API CALL</text>
            <text x="14" y="44" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700">Customer Order</text>
            <text x="14" y="62" fill="#bae6fd" font-family="system-ui" font-size="10">Payload Validation</text>
            <circle cx="130" cy="74" r="5" fill="#22c55e"/>

            <line x1="145" y1="45" x2="185" y2="45" stroke="#00bceb" stroke-width="2" stroke-dasharray="4"/>
            <polygon points="185,45 178,41 178,49" fill="#00bceb"/>

            <g transform="translate(185, 0)">
              <rect width="145" height="90" rx="8" fill="#042a42" stroke="#00bceb" stroke-width="1.5"/>
              <text x="14" y="24" fill="#00bceb" font-family="system-ui" font-size="10" font-weight="700">STEP 2: TOPOLOGY</text>
              <text x="14" y="44" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700">Path Allocation</text>
              <text x="14" y="62" fill="#bae6fd" font-family="system-ui" font-size="10">QoS SLA Check</text>
              <circle cx="130" cy="74" r="5" fill="#22c55e"/>
            </g>

            <line x1="330" y1="45" x2="370" y2="45" stroke="#00bceb" stroke-width="2" stroke-dasharray="4"/>
            <polygon points="370,45 363,41 363,49" fill="#00bceb"/>

            <g transform="translate(370, 0)">
              <rect width="145" height="90" rx="8" fill="#042a42" stroke="#00bceb" stroke-width="1.5"/>
              <text x="14" y="24" fill="#00bceb" font-family="system-ui" font-size="10" font-weight="700">STEP 3: CONFIG</text>
              <text x="14" y="44" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700">Router Template</text>
              <text x="14" y="62" fill="#bae6fd" font-family="system-ui" font-size="10">CLI Push &amp; Verify</text>
              <circle cx="130" cy="74" r="5" fill="#22c55e"/>
            </g>

            <line x1="515" y1="45" x2="555" y2="45" stroke="#00bceb" stroke-width="2" stroke-dasharray="4"/>
            <polygon points="555,45 548,41 548,49" fill="#00bceb"/>

            <g transform="translate(555, 0)">
              <rect width="133" height="90" rx="8" fill="#042a42" stroke="#22c55e" stroke-width="1.5"/>
              <text x="14" y="24" fill="#22c55e" font-family="system-ui" font-size="10" font-weight="700">DEPLOYED</text>
              <text x="14" y="44" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700">Live &amp; Monitored</text>
              <text x="14" y="62" fill="#bae6fd" font-family="system-ui" font-size="10">Telemetry 100%</text>
              <circle cx="118" cy="74" r="5" fill="#22c55e"/>
            </g>
          </g>

          <g transform="translate(20, 160)">
            <rect width="688" height="95" rx="6" fill="#000000" fill-opacity="0.4" stroke="#ffffff" stroke-opacity="0.08"/>
            <text x="15" y="22" fill="#00bceb" font-family="monospace" font-size="11">[SYS-BPA-09] Workflow instance #77291 initialized by operator: ashutosh.k</text>
            <text x="15" y="42" fill="#22c55e" font-family="monospace" font-size="11">[OK] Pre-flight network latency check passed: &lt;14ms average to Singapore vEdge</text>
            <text x="15" y="62" fill="#ffffff" font-family="monospace" font-size="11">[OK] Angular Material UI form state validated with WCAG 2.1 compliance</text>
            <text x="15" y="82" fill="#f59e0b" font-family="monospace" font-size="11">[INFO] Automated regression tests passed via Playwright in 4.2s</text>
          </g>
        </g>
      `;

    case 'network-monitor':
      return `
        <g transform="translate(36, 68)">
          <rect width="232" height="110" rx="10" fill="url(#cardBg-${p.id})" stroke="#00d2d3" stroke-opacity="0.3"/>
          <text x="16" y="28" fill="#8892b0" font-family="system-ui" font-size="11">CONNECTED EDGE ROUTERS</text>
          <text x="16" y="64" fill="#00d2d3" font-family="system-ui" font-size="28" font-weight="800">4,819</text>
          <text x="16" y="90" fill="#64ffda" font-family="system-ui" font-size="11">● 100% Operational In-Sync</text>

          <g transform="translate(248, 0)">
            <rect width="232" height="110" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="16" y="28" fill="#8892b0" font-family="system-ui" font-size="11">NETWORK TRAFFIC THROUGHPUT</text>
            <text x="16" y="64" fill="#64ffda" font-family="system-ui" font-size="28" font-weight="800">84.2 <tspan font-size="16">Tbps</tspan></text>
            <text x="16" y="90" fill="#64ffda" font-family="system-ui" font-size="11">↑ 12% peak bandwidth capacity</text>
          </g>

          <g transform="translate(496, 0)">
            <rect width="232" height="110" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="16" y="28" fill="#8892b0" font-family="system-ui" font-size="11">AVERAGE JITTER &amp; PACKET LOSS</text>
            <text x="16" y="64" fill="#38bdf8" font-family="system-ui" font-size="28" font-weight="800">0.002%</text>
            <text x="16" y="90" fill="#22c55e" font-family="system-ui" font-size="11">SLA Level 1 Guaranteed</text>
          </g>
        </g>
        <g transform="translate(36, 192)">
          <rect width="728" height="215" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
          <text x="20" y="28" fill="#ffffff" font-family="system-ui" font-size="13" font-weight="700">Global SD-WAN Fabric Telemetry &amp; Latency Heatmap</text>
          
          <path d="M 30 140 Q 110 60 190 120 T 350 90 T 510 130 T 670 70 L 700 80" fill="none" stroke="#00d2d3" stroke-width="3"/>
          <path d="M 30 160 Q 110 110 190 140 T 350 120 T 510 150 T 670 100 L 700 110" fill="none" stroke="#64ffda" stroke-width="2" stroke-dasharray="4"/>
          
          <circle cx="190" cy="120" r="5" fill="#00d2d3"/>
          <circle cx="350" cy="90" r="5" fill="#00d2d3"/>
          <circle cx="510" cy="130" r="5" fill="#00d2d3"/>
          <circle cx="670" cy="70" r="5" fill="#00d2d3"/>
          
          <g transform="translate(30, 180)">
            <rect x="0" y="0" width="12" height="12" rx="3" fill="#00d2d3"/>
            <text x="20" y="10" fill="#8892b0" font-family="system-ui" font-size="11">Primary MPLS Tunnel</text>
            <rect x="180" y="0" width="12" height="12" rx="3" fill="#64ffda"/>
            <text x="200" y="10" fill="#8892b0" font-family="system-ui" font-size="11">Broadband Internet Failover</text>
            <rect x="400" y="0" width="12" height="12" rx="3" fill="#38bdf8"/>
            <text x="420" y="10" fill="#8892b0" font-family="system-ui" font-size="11">Direct Cloud OnRamp (AWS &amp; Azure)</text>
          </g>
        </g>
      `;

    case 'travel-portal':
      return `
        <g transform="translate(36, 68)">
          <rect width="728" height="90" rx="12" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.15"/>
          <text x="24" y="32" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Find Handpicked Holiday Experiences &amp; Flights</text>
          <g transform="translate(24, 45)">
            <rect width="180" height="34" rx="6" fill="#000000" fill-opacity="0.3" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="12" y="21" fill="#fed7aa" font-family="system-ui" font-size="11">📍 Where to? (Goa, Bali, Dubai...)</text>

            <rect x="190" y="0" width="140" height="34" rx="6" fill="#000000" fill-opacity="0.3" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="202" y="21" fill="#fed7aa" font-family="system-ui" font-size="11">📅 Next Weekend</text>

            <rect x="340" y="0" width="140" height="34" rx="6" fill="#000000" fill-opacity="0.3" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="352" y="21" fill="#fed7aa" font-family="system-ui" font-size="11">👥 2 Adults, 1 Room</text>

            <rect x="490" y="0" width="180" height="34" rx="6" fill="url(#accentGlow-${p.id})"/>
            <text x="580" y="22" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700" text-anchor="middle">Search Packages ✈</text>
          </g>
        </g>
        <g transform="translate(36, 172)">
          <rect width="232" height="230" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
          <rect width="232" height="110" rx="10" fill="#ea580c" fill-opacity="0.6"/>
          <text x="14" y="135" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Kashmir Winter Magic</text>
          <text x="14" y="155" fill="#fed7aa" font-family="system-ui" font-size="11">5 Nights / 6 Days • Houseboat Stay</text>
          <text x="14" y="195" fill="#f97316" font-family="system-ui" font-size="18" font-weight="800">₹24,999</text>
          <rect x="140" y="176" width="78" height="26" rx="6" fill="#f97316"/>
          <text x="179" y="193" fill="#ffffff" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">Book</text>

          <g transform="translate(248, 0)">
            <rect width="232" height="230" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
            <rect width="232" height="110" rx="10" fill="#0284c7" fill-opacity="0.6"/>
            <text x="14" y="135" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Bali Tropical Escape</text>
            <text x="14" y="155" fill="#fed7aa" font-family="system-ui" font-size="11">6 Nights / 7 Days • Villa &amp; Private Pool</text>
            <text x="14" y="195" fill="#38bdf8" font-family="system-ui" font-size="18" font-weight="800">₹48,500</text>
            <rect x="140" y="176" width="78" height="26" rx="6" fill="#38bdf8"/>
            <text x="179" y="193" fill="#ffffff" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">Book</text>
          </g>

          <g transform="translate(496, 0)">
            <rect width="232" height="230" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
            <rect width="232" height="110" rx="10" fill="#b45309" fill-opacity="0.6"/>
            <text x="14" y="135" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Dubai Luxury Highlights</text>
            <text x="14" y="155" fill="#fed7aa" font-family="system-ui" font-size="11">4 Nights / 5 Days • Burj Khalifa &amp; Desert</text>
            <text x="14" y="195" fill="#fbbf24" font-family="system-ui" font-size="18" font-weight="800">₹39,200</text>
            <rect x="140" y="176" width="78" height="26" rx="6" fill="#fbbf24"/>
            <text x="179" y="193" fill="#000000" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">Book</text>
          </g>
        </g>
      `;

    case 'ngo-portal':
      return `
        <g transform="translate(36, 68)">
          <rect width="728" height="150" rx="12" fill="url(#cardBg-${p.id})" stroke="#fb7185" stroke-opacity="0.3"/>
          <text x="30" y="42" fill="#ffffff" font-family="system-ui" font-size="22" font-weight="800">Empowering Grassroots Women Across India</text>
          <text x="30" y="68" fill="#fecdd3" font-family="system-ui" font-size="13">Providing safe shelter, mental wellness, livelihood skills, and legal protection.</text>
          
          <rect x="30" y="90" width="140" height="36" rx="8" fill="#f43f5e"/>
          <text x="100" y="113" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700" text-anchor="middle">Support Our Mission ♥</text>

          <rect x="180" y="90" width="140" height="36" rx="8" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2"/>
          <text x="250" y="113" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">Impact Reports</text>
        </g>
        <g transform="translate(36, 230)">
          <rect width="232" height="175" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
          <text x="20" y="45" fill="#fb7185" font-family="system-ui" font-size="32" font-weight="800">50,000+</text>
          <text x="20" y="75" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Lives Transformed</text>
          <text x="20" y="100" fill="#fecdd3" font-family="system-ui" font-size="11">Direct beneficiaries across community outreach programs in urban slums.</text>

          <g transform="translate(248, 0)">
            <rect width="232" height="175" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="20" y="45" fill="#fda4af" font-family="system-ui" font-size="32" font-weight="800">120+</text>
            <text x="20" y="75" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Skill Development Centers</text>
            <text x="20" y="100" fill="#fecdd3" font-family="system-ui" font-size="11">Tailoring, computer literacy, and micro-entrepreneurship training.</text>
          </g>

          <g transform="translate(496, 0)">
            <rect width="232" height="175" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="20" y="45" fill="#22c55e" font-family="system-ui" font-size="32" font-weight="800">100%</text>
            <text x="20" y="75" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">WCAG Accessible UI</text>
            <text x="20" y="100" fill="#fecdd3" font-family="system-ui" font-size="11">Inclusive screen-reader and high-contrast donor checkout flow.</text>
          </g>
        </g>
      `;

    case 'edtech':
      return `
        <g transform="translate(36, 68)">
          <rect width="460" height="250" rx="10" fill="#000000" fill-opacity="0.5" stroke="#60a5fa" stroke-opacity="0.4"/>
          <circle cx="230" cy="115" r="28" fill="#1d4ed8"/>
          <polygon points="224,103 242,115 224,127" fill="#ffffff"/>
          <text x="24" y="30" fill="#ffffff" font-family="system-ui" font-size="13" font-weight="700">CMA Final: Strategic Financial Management (Paper 14)</text>
          
          <rect x="20" y="215" width="420" height="6" rx="3" fill="#ffffff" fill-opacity="0.2"/>
          <rect x="20" y="215" width="280" height="6" rx="3" fill="#facc15"/>
          <text x="20" y="240" fill="#bfdbfe" font-family="system-ui" font-size="10">42:15 / 1:20:00 • HD Quality • Speed 1.25x</text>

          <g transform="translate(476, 0)">
            <rect width="252" height="338" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
            <text x="16" y="26" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700">Course Syllabus &amp; Tests</text>
            
            <rect x="14" y="42" width="224" height="42" rx="6" fill="#1d4ed8" fill-opacity="0.3"/>
            <text x="24" y="60" fill="#facc15" font-family="system-ui" font-size="11" font-weight="700">Module 1: Investment Decisions</text>
            <text x="24" y="74" fill="#bfdbfe" font-family="system-ui" font-size="9">▶ Currently Playing (Lecture 4)</text>

            <rect x="14" y="92" width="224" height="42" rx="6" fill="#ffffff" fill-opacity="0.04"/>
            <text x="24" y="110" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="600">Module 2: Derivatives &amp; Risk</text>
            <text x="24" y="124" fill="#94a3b8" font-family="system-ui" font-size="9">6 Lectures • 4 Practice Tests</text>

            <rect x="14" y="142" width="224" height="42" rx="6" fill="#ffffff" fill-opacity="0.04"/>
            <text x="24" y="160" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="600">Module 3: Portfolio Management</text>
            <text x="24" y="174" fill="#94a3b8" font-family="system-ui" font-size="9">8 Lectures • 5 Practice Tests</text>

            <rect x="14" y="192" width="224" height="42" rx="6" fill="#ffffff" fill-opacity="0.04"/>
            <text x="24" y="210" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="600">Module 4: Forex Management</text>
            <text x="24" y="224" fill="#94a3b8" font-family="system-ui" font-size="9">5 Lectures • 3 Practice Tests</text>

            <rect x="14" y="280" width="224" height="36" rx="6" fill="#facc15"/>
            <text x="126" y="303" fill="#000000" font-family="system-ui" font-size="12" font-weight="700" text-anchor="middle">Download Notes (PDF)</text>
          </g>

          <g transform="translate(0, 260)">
            <rect width="460" height="78" rx="8" fill="#ffffff" fill-opacity="0.04" stroke="#ffffff" stroke-opacity="0.08"/>
            <text x="16" y="26" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="600">Faculty: CA/CMA Leading Rankholders</text>
            <text x="16" y="48" fill="#bfdbfe" font-family="system-ui" font-size="11">Toplad exam test engine: 10,000+ enrolled students • Mock test analytics dashboard</text>
          </g>
        </g>
      `;

    case 'ecommerce':
      return `
        <g transform="translate(36, 68)">
          <rect width="728" height="60" rx="8" fill="#000000" fill-opacity="0.5" stroke="#d97706" stroke-opacity="0.3"/>
          <text x="24" y="36" fill="#f59e0b" font-family="serif" font-size="18" letter-spacing="2">ADDRESS HOME</text>
          <text x="240" y="35" fill="#a1a1aa" font-family="system-ui" font-size="11">FURNITURE • DINING • BED LINEN • LIGHTING • SCENT</text>
          <rect x="620" y="16" width="90" height="28" rx="4" fill="#d97706"/>
          <text x="665" y="34" fill="#000000" font-family="system-ui" font-size="11" font-weight="700" text-anchor="middle">BAG (3)</text>
        </g>
        <g transform="translate(36, 140)">
          <rect width="232" height="260" rx="8" fill="#27272a" stroke="#ffffff" stroke-opacity="0.1"/>
          <rect width="232" height="150" rx="8" fill="#3f3f46"/>
          <text x="16" y="180" fill="#ffffff" font-family="serif" font-size="14">Venetian Gold Gilded Mirror</text>
          <text x="16" y="200" fill="#a1a1aa" font-family="system-ui" font-size="11">Handcrafted antique finish</text>
          <text x="16" y="232" fill="#f59e0b" font-family="system-ui" font-size="15" font-weight="700">₹32,500</text>
          <rect x="146" y="214" width="72" height="28" rx="4" fill="#ffffff" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1"/>
          <text x="182" y="232" fill="#f59e0b" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">+ Add</text>

          <g transform="translate(248, 0)">
            <rect width="232" height="260" rx="8" fill="#27272a" stroke="#ffffff" stroke-opacity="0.1"/>
            <rect width="232" height="150" rx="8" fill="#52525b"/>
            <text x="16" y="180" fill="#ffffff" font-family="serif" font-size="14">Moroccan Crystal Chandelier</text>
            <text x="16" y="200" fill="#a1a1aa" font-family="system-ui" font-size="11">Warm ambient crystal tiers</text>
            <text x="16" y="232" fill="#f59e0b" font-family="system-ui" font-size="15" font-weight="700">₹58,000</text>
            <rect x="146" y="214" width="72" height="28" rx="4" fill="#ffffff" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1"/>
            <text x="182" y="232" fill="#f59e0b" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">+ Add</text>
          </g>

          <g transform="translate(496, 0)">
            <rect width="232" height="260" rx="8" fill="#27272a" stroke="#ffffff" stroke-opacity="0.1"/>
            <rect width="232" height="150" rx="8" fill="#71717a"/>
            <text x="16" y="180" fill="#ffffff" font-family="serif" font-size="14">Royal Velvet Armchair</text>
            <text x="16" y="200" fill="#a1a1aa" font-family="system-ui" font-size="11">Emerald green tufted velvet</text>
            <text x="16" y="232" fill="#f59e0b" font-family="system-ui" font-size="15" font-weight="700">₹44,900</text>
            <rect x="146" y="214" width="72" height="28" rx="4" fill="#ffffff" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1"/>
            <text x="182" y="232" fill="#f59e0b" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">+ Add</text>
          </g>
        </g>
      `;

    case 'adventure':
      return `
        <g transform="translate(36, 68)">
          <rect width="728" height="130" rx="10" fill="url(#cardBg-${p.id})" stroke="#4ade80" stroke-opacity="0.3"/>
          <text x="24" y="32" fill="#ffffff" font-family="system-ui" font-size="20" font-weight="800">The Buddha Trails: Singalila Ridge Ultra</text>
          <text x="24" y="55" fill="#bbf7d0" font-family="system-ui" font-size="12">100K / 65K / 30K High-Altitude Mountain Marathon Overlooking Mt. Kanchenjunga</text>
          
          <path d="M 24 110 L 100 85 L 180 95 L 260 65 L 360 80 L 460 45 L 560 70 L 660 50 L 700 80" fill="none" stroke="#fb923c" stroke-width="3"/>
          <text x="24" y="125" fill="#a7f3d0" font-family="system-ui" font-size="9">Rimbick (2,100m)</text>
          <text x="460" y="38" fill="#fb923c" font-family="system-ui" font-size="9" font-weight="700">▲ Sandakphu Peak (3,636m)</text>
          <text x="650" y="125" fill="#a7f3d0" font-family="system-ui" font-size="9">Phalut (3,600m)</text>
        </g>
        <g transform="translate(36, 210)">
          <rect width="232" height="195" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
          <rect x="14" y="14" width="70" height="22" rx="4" fill="#fb923c"/>
          <text x="49" y="29" fill="#000000" font-family="system-ui" font-size="11" font-weight="800" text-anchor="middle">100 KM</text>
          <text x="14" y="60" fill="#ffffff" font-family="system-ui" font-size="15" font-weight="700">The Buddha 100</text>
          <text x="14" y="82" fill="#bbf7d0" font-family="system-ui" font-size="11">Elevation Gain: +5,200m</text>
          <text x="14" y="100" fill="#bbf7d0" font-family="system-ui" font-size="11">Cut-off Time: 28 Hours</text>
          <text x="14" y="118" fill="#fb923c" font-family="system-ui" font-size="11">4 ITRA Points Qualifying</text>
          <rect x="14" y="142" width="204" height="36" rx="6" fill="#4ade80"/>
          <text x="116" y="165" fill="#000000" font-family="system-ui" font-size="12" font-weight="700" text-anchor="middle">Register Runner</text>

          <g transform="translate(248, 0)">
            <rect width="232" height="195" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <rect x="14" y="14" width="70" height="22" rx="4" fill="#4ade80"/>
            <text x="49" y="29" fill="#000000" font-family="system-ui" font-size="11" font-weight="800" text-anchor="middle">65 KM</text>
            <text x="14" y="60" fill="#ffffff" font-family="system-ui" font-size="15" font-weight="700">Singalila Ridge Run</text>
            <text x="14" y="82" fill="#bbf7d0" font-family="system-ui" font-size="11">Elevation Gain: +3,400m</text>
            <text x="14" y="100" fill="#bbf7d0" font-family="system-ui" font-size="11">Cut-off Time: 16 Hours</text>
            <text x="14" y="118" fill="#4ade80" font-family="system-ui" font-size="11">3 ITRA Points Qualifying</text>
            <rect x="14" y="142" width="204" height="36" rx="6" fill="#ffffff" fill-opacity="0.1" stroke="#4ade80" stroke-width="1"/>
            <text x="116" y="165" fill="#4ade80" font-family="system-ui" font-size="12" font-weight="700" text-anchor="middle">View Route GPS</text>
          </g>

          <g transform="translate(496, 0)">
            <rect width="232" height="195" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <rect x="14" y="14" width="70" height="22" rx="4" fill="#a7f3d0"/>
            <text x="49" y="29" fill="#000000" font-family="system-ui" font-size="11" font-weight="800" text-anchor="middle">30 KM</text>
            <text x="14" y="60" fill="#ffffff" font-family="system-ui" font-size="15" font-weight="700">Pine Forest Trail</text>
            <text x="14" y="82" fill="#bbf7d0" font-family="system-ui" font-size="11">Elevation Gain: +1,200m</text>
            <text x="14" y="100" fill="#bbf7d0" font-family="system-ui" font-size="11">Cut-off Time: 7 Hours</text>
            <text x="14" y="118" fill="#a7f3d0" font-family="system-ui" font-size="11">Open for Beginners</text>
            <rect x="14" y="142" width="204" height="36" rx="6" fill="#ffffff" fill-opacity="0.1" stroke="#a7f3d0" stroke-width="1"/>
            <text x="116" y="165" fill="#a7f3d0" font-family="system-ui" font-size="12" font-weight="700" text-anchor="middle">View Route GPS</text>
          </g>
        </g>
      `;

    case 'agency':
      return `
        <g transform="translate(36, 68)">
          <rect width="728" height="140" rx="12" fill="url(#cardBg-${p.id})" stroke="${p.accent}" stroke-opacity="0.3"/>
          <text x="30" y="44" fill="#ffffff" font-family="system-ui" font-size="24" font-weight="800">Engineering Digital Products with Precision</text>
          <text x="30" y="70" fill="${p.textMuted}" font-family="system-ui" font-size="13">High-converting web applications, scalable design systems, and responsive email architectures.</text>
          <g transform="translate(30, 92)">
            <rect width="130" height="32" rx="6" fill="url(#accentGlow-${p.id})"/>
            <text x="65" y="20" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="700" text-anchor="middle">Our Portfolio</text>
            <rect x="140" y="0" width="120" height="32" rx="6" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.15"/>
            <text x="200" y="20" fill="#ffffff" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">Hire Engineers</text>
          </g>
        </g>
        <g transform="translate(36, 220)">
          <rect width="232" height="185" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
          <text x="20" y="32" fill="${p.accent}" font-family="system-ui" font-size="12" font-weight="700">01 / FRONTEND ARCHITECTURE</text>
          <text x="20" y="58" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Angular &amp; Modern JS</text>
          <text x="20" y="80" fill="${p.textMuted}" font-family="system-ui" font-size="11">Production component design systems with pixel-perfect Figma/PSD translations.</text>
          <rect x="20" y="145" width="80" height="20" rx="10" fill="${p.accent}" fill-opacity="0.2"/>
          <text x="60" y="159" fill="${p.accent}" font-family="system-ui" font-size="9" font-weight="700" text-anchor="middle">WCAG 2.1</text>

          <g transform="translate(248, 0)">
            <rect width="232" height="185" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="20" y="32" fill="${p.secondary}" font-family="system-ui" font-size="12" font-weight="700">02 / EMAIL TEMPLATING</text>
            <text x="20" y="58" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Cross-Client Verified</text>
            <text x="20" y="80" fill="${p.textMuted}" font-family="system-ui" font-size="11">Tested across Outlook, Gmail, Apple Mail, and mobile responsive web clients.</text>
            <rect x="20" y="145" width="80" height="20" rx="10" fill="${p.secondary}" fill-opacity="0.2"/>
            <text x="60" y="159" fill="${p.secondary}" font-family="system-ui" font-size="9" font-weight="700" text-anchor="middle">100% Verified</text>
          </g>

          <g transform="translate(496, 0)">
            <rect width="232" height="185" rx="10" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.1"/>
            <text x="20" y="32" fill="#22c55e" font-family="system-ui" font-size="12" font-weight="700">03 / WEB PERFORMANCE</text>
            <text x="20" y="58" fill="#ffffff" font-family="system-ui" font-size="14" font-weight="700">Core Web Vitals</text>
            <text x="20" y="80" fill="${p.textMuted}" font-family="system-ui" font-size="11">Optimized LCP, CLS, and FID metrics delivering lightning-fast responsive speed.</text>
            <rect x="20" y="145" width="80" height="20" rx="10" fill="#22c55e" fill-opacity="0.2"/>
            <text x="60" y="159" fill="#22c55e" font-family="system-ui" font-size="9" font-weight="700" text-anchor="middle">98+ Score</text>
          </g>
        </g>
      `;

    case 'test-runner':
      return `
        <g transform="translate(36, 68)">
          <rect width="728" height="55" rx="8" fill="#000000" fill-opacity="0.4" stroke="#22c55e" stroke-opacity="0.3"/>
          <text x="20" y="24" fill="#22c55e" font-family="monospace" font-size="11">✔ PLAYWRIGHT IMPACT ENGINE: COMMIT #918fa2 (main branch)</text>
          <text x="20" y="44" fill="#a1a1aa" font-family="system-ui" font-size="12">Targeted 24 affected component tests • Skipped 142 unaffected suites • Duration: 6.4s (-65% time)</text>
          <rect x="620" y="14" width="88" height="26" rx="4" fill="#22c55e"/>
          <text x="664" y="31" fill="#000000" font-family="system-ui" font-size="10" font-weight="800" text-anchor="middle">PASSED ALL</text>
        </g>
        <g transform="translate(36, 134)">
          <rect width="420" height="270" rx="8" fill="#09090b" stroke="#ffffff" stroke-opacity="0.12"/>
          <rect width="420" height="28" rx="8" fill="#18181b"/>
          <circle cx="16" cy="14" r="4" fill="#ff5f56"/>
          <circle cx="28" cy="14" r="4" fill="#ffbd2e"/>
          <circle cx="40" cy="14" r="4" fill="#27c93f"/>
          <text x="56" y="18" fill="#71717a" font-family="monospace" font-size="10">bash - playwright-impact-runner.sh</text>
          
          <g transform="translate(16, 42)">
            <text y="14" fill="#71717a" font-family="monospace" font-size="10">$ git diff --name-only origin/main</text>
            <text y="28" fill="#38bdf8" font-family="monospace" font-size="10">src/components/modal/modal.component.ts</text>
            <text y="42" fill="#38bdf8" font-family="monospace" font-size="10">src/styles/_tokens.scss</text>
            <text y="62" fill="#a855f7" font-family="monospace" font-size="10">[AST Engine] Resolving dependent downstream consumers...</text>
            <text y="78" fill="#e4e4e7" font-family="monospace" font-size="10">Found 3 affected specs: e2e/modal.spec.ts, e2e/dialog.spec.ts</text>
            <text y="100" fill="#22c55e" font-family="monospace" font-size="10">Running 24 targeted tests across Chromium, Firefox, WebKit</text>
            <text y="120" fill="#e4e4e7" font-family="monospace" font-size="10">✓ [chromium] › modal.spec.ts:18:3 › WCAG keyboard trap (182ms)</text>
            <text y="136" fill="#e4e4e7" font-family="monospace" font-size="10">✓ [chromium] › modal.spec.ts:45:3 › aria-modal attribute (124ms)</text>
            <text y="152" fill="#e4e4e7" font-family="monospace" font-size="10">✓ [firefox]  › dialog.spec.ts:12:1 › high contrast render (210ms)</text>
            <text y="168" fill="#e4e4e7" font-family="monospace" font-size="10">✓ [webkit]   › modal.spec.ts:60:2 › escape key dismiss (95ms)</text>
            <text y="194" fill="#22c55e" font-family="monospace" font-size="11" font-weight="700">24 passed (6.4s) • Zero regressions detected</text>
          </g>

          <g transform="translate(436, 0)">
            <rect width="292" height="270" rx="8" fill="url(#cardBg-${p.id})" stroke="#ffffff" stroke-opacity="0.12"/>
            <text x="16" y="28" fill="#ffffff" font-family="system-ui" font-size="12" font-weight="700">AI &amp; Test Automation Architecture</text>
            
            <rect x="16" y="46" width="260" height="56" rx="6" fill="#ffffff" fill-opacity="0.04"/>
            <text x="28" y="68" fill="#22c55e" font-family="system-ui" font-size="16" font-weight="800">65% Faster CI</text>
            <text x="28" y="86" fill="#a1a1aa" font-family="system-ui" font-size="10">Prunes unnecessary test runs on unaffected routes</text>

            <rect x="16" y="112" width="260" height="56" rx="6" fill="#38bdf8" font-family="system-ui" font-size="16" font-weight="800">Cursor AI &amp; Claude</text>
            <text x="28" y="134" fill="#38bdf8" font-family="system-ui" font-size="16" font-weight="800">Cursor AI &amp; Claude</text>
            <text x="28" y="152" fill="#a1a1aa" font-family="system-ui" font-size="10">AI-assisted test generation &amp; fast bug reproduction</text>

            <rect x="16" y="178" width="260" height="56" rx="6" fill="#ffffff" fill-opacity="0.04"/>
            <text x="28" y="200" fill="#a855f7" font-family="system-ui" font-size="16" font-weight="800">Zero Flakiness</text>
            <text x="28" y="218" fill="#a1a1aa" font-family="system-ui" font-size="10">Deterministic component state isolation &amp; mocks</text>
          </g>
        </g>
      `;

    default:
      return '';
  }
}

function generateRichSVG(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.bgStart}" />
      <stop offset="100%" stop-color="${p.bgEnd}" />
    </linearGradient>
    <linearGradient id="cardBg-${p.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.03" />
    </linearGradient>
    <linearGradient id="accentGlow-${p.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
  </defs>

  <!-- Browser Frame Window -->
  <rect width="800" height="500" rx="14" fill="#0d1117" />
  
  <!-- Browser Chrome Topbar -->
  <rect width="800" height="42" rx="14" fill="#161b22" />
  <rect y="24" width="800" height="18" fill="#161b22" />
  
  <!-- Window Controls -->
  <circle cx="24" cy="21" r="6" fill="#ff5f56" />
  <circle cx="44" cy="21" r="6" fill="#ffbd2e" />
  <circle cx="64" cy="21" r="6" fill="#27c93f" />

  <!-- URL Address Bar -->
  <rect x="170" y="9" width="460" height="24" rx="12" fill="#0d1117" stroke="#30363d" stroke-width="1" />
  <g transform="translate(184, 15)">
    <path d="M4 5.5V3.5C4 2.1 5.1 1 6.5 1s2.5 1.1 2.5 2.5v2m-6 0h7a1 1 0 011 1v4a1 1 0 01-1 1h-7a1 1 0 01-1-1v-4a1 1 0 011-1z" fill="none" stroke="${p.accent}" stroke-width="1.2" stroke-linecap="round"/>
    <text x="18" y="9.5" fill="#c9d1d9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500">https://${p.domain}</text>
  </g>

  <!-- Body Content -->
  <g transform="translate(0, 42)">
    <rect width="800" height="458" fill="url(#bg-${p.id})" />

    <!-- Ambient background gradients -->
    <circle cx="680" cy="80" r="160" fill="${p.accent}" opacity="0.18" filter="blur(40px)" />
    <circle cx="120" cy="360" r="130" fill="${p.secondary}" opacity="0.12" filter="blur(30px)" />

    <!-- App Header -->
    <rect width="800" height="48" fill="#000000" fill-opacity="0.3" />
    <line x1="0" y1="48" x2="800" y2="48" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1" />
    <rect x="36" y="14" width="20" height="20" rx="5" fill="url(#accentGlow-${p.id})" />
    <text x="64" y="29" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">${p.title}</text>

    <!-- Header navigation items mock -->
    <g transform="translate(480, 18)">
      <rect x="0" y="0" width="50" height="12" rx="6" fill="#ffffff" fill-opacity="0.15" />
      <rect x="65" y="0" width="50" height="12" rx="6" fill="#ffffff" fill-opacity="0.15" />
      <rect x="130" y="0" width="50" height="12" rx="6" fill="#ffffff" fill-opacity="0.15" />
      <rect x="195" y="-3" width="85" height="20" rx="10" fill="url(#accentGlow-${p.id})" />
      <text x="237" y="11" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" text-anchor="middle">PRODUCTION</text>
    </g>

    <!-- Specific Mockup UI -->
    ${getMockupContent(p)}
  </g>
</svg>`;
}

const outDir = path.resolve('assets/projects');
for (const p of projects) {
  const filePath = path.join(outDir, `${p.id}.svg`);
  fs.writeFileSync(filePath, generateRichSVG(p), 'utf8');
}
console.log('Regenerated ultra-realistic mockups for all 14 projects!');
