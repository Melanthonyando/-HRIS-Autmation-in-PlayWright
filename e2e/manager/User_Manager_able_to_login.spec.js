const { test, expect } = require('@playwright/test');
const { time } = require('console');
const path = require('path');

test.use({
  storageState: path.resolve('auth/manager-user.json'),
  headless: false,
});

test('Debugging must be able to display the manager dashboard', async ({ page }) => {
  await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
  await page.pause(); // Optional for debugging
});