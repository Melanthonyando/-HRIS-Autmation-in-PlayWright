// scripts/save-session.js
const { chromium } = require('@playwright/test');
const path = require('path');

const user = process.argv[2]; // node save-session.js admin
if (!user) {
  console.error('❌ Please provide a user type: admin | employee | manager');
  process.exit(1);
}

(async () => {
  const storageStatePath = path.resolve(`auth/${user}-user.json`);
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
  console.log(`\n🔐 Log in as "${user}" manually, then press ENTER in terminal to save session.`);
  await page.pause();

  await context.storageState({ path: storageStatePath });
  console.log(`✅ ${user} session saved to: ${storageStatePath}`);
  await browser.close();
})();
