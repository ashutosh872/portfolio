const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const sites = [
  { id: 'buddha-trail', url: 'https://www.buddhatrail.com/' },
  { id: 'codifier', url: 'https://codifier.co/' }
];

async function run() {
  console.log('Capturing real screens for Buddha Trail and Codifier...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  const outDir = path.resolve(__dirname, 'assets', 'projects');

  for (const site of sites) {
    const page = await context.newPage();
    const destPath = path.join(outDir, `${site.id}.png`);
    try {
      console.log(`Navigating to ${site.url}...`);
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: destPath, type: 'png' });
      console.log(`✓ Captured ${site.id}.png (${fs.statSync(destPath).size} bytes)`);
    } catch (err) {
      console.log(`⚠ Skip ${site.id}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Done capturing!');
}

run().catch(console.error);
