const https = require('https');
const http = require('http');

const urlsToCheck = [
  { name: 'Wondrfly', url: 'https://www.wondrfly.com' },
  { name: 'Tripknock', url: 'https://www.tripknock.com' },
  { name: 'Buddha Trail', url: 'https://www.buddhatrail.com/' },
  { name: 'Codifier', url: 'https://codifier.co/' },
  { name: 'Urja for Women', url: 'https://urjaforwomen.org' },
  { name: 'Address Home', url: 'https://www.addresshome.com' },
  { name: 'Mindrops', url: 'https://mindrops.com' },
  { name: 'Toplad', url: 'https://toplad.in' },
  // Testing variants for Tripomate:
  { name: 'Tripomate (https www)', url: 'https://www.tripomate.com' },
  { name: 'Tripomate (https apex)', url: 'https://tripomate.com' },
  { name: 'Tripomate (.in)', url: 'https://tripomate.in' },
  // Testing variants for MSP Asia:
  { name: 'MSP Asia (mspasia.in)', url: 'https://mspasia.in' },
  { name: 'MSP Asia (mspasia.com)', url: 'https://mspasia.com' },
  { name: 'MSP Asia (msp-asia.com)', url: 'https://www.msp-asia.com' },
  // Testing variants for EZR:
  { name: 'EZR (ezr.com)', url: 'https://ezr.com' },
  { name: 'EZR (ezr360.com)', url: 'https://ezr360.com' },
  { name: 'EZR (ezr.in)', url: 'https://ezr.in' }
];

function checkUrl(item) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(item.url);
      const client = parsed.protocol === 'https:' ? https : http;
      const req = client.request(item.url, {
        method: 'HEAD',
        timeout: 8000,
        rejectUnauthorized: false,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, (res) => {
        resolve({
          name: item.name,
          url: item.url,
          status: res.statusCode,
          ok: res.statusCode >= 200 && res.statusCode < 400
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({ name: item.name, url: item.url, status: 'TIMEOUT', ok: false });
      });

      req.on('error', (err) => {
        resolve({ name: item.name, url: item.url, status: err.code || err.message, ok: false });
      });

      req.end();
    } catch (e) {
      resolve({ name: item.name, url: item.url, status: e.message, ok: false });
    }
  });
}

async function run() {
  console.log('Testing all website URLs from resume...');
  const results = await Promise.all(urlsToCheck.map(checkUrl));
  console.log(JSON.stringify(results, null, 2));
}

run();
