const { test, expect } = require('@playwright/test');
const { time } = require('console');
const path = require('path');

test.use({
  storageState: path.resolve('auth/employee-user.json'),
  headless: false,
});

test('Employee user should be able to Login successfully using Google Account', async ({ page }) => {
  await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
  await page.pause(); // Optional for debugging
  await page.getByRole('button', { name: 'Sign in with Google' }).click();

  await page.waitForTimeout(1000); // Wait for the page to load

  // Text Displayed google account
  await expect(page.getByText('Pumili ng account', { exact: true })).toBeVisible();
  await expect(page.getByText('upang magpatuloy sa sun-ph-dev.link', { exact: true })).toBeVisible();

    await page.waitForTimeout(10000); // Wait for the page to load

  await page.getByRole('link', { name: 'Mel Test melanthonytest5@' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.waitForTimeout(500); // Wait for the page to load
  // verify text display in the Google Account page
  await page.locator('div').filter({ hasText: /^Sign in with Google$/ }).nth(1);
  await page.getByText('You’re signing back in to sun').toBeVisible();
  await page.waitForTimeout(1000); // Wait for the page to load

  // Verify Successfully Message Display
  await expect(page.getByText('Verification Success!')).toBeVisible();

  await expect(page.getByText('Review sun-ph-dev.link’s')).toBeVisible();
  await expect(page.getByText('To make changes at any time,')).toBeVisible();
  await expect(page.getByText('Learn more about Sign in with')).toBeVisible();
  await expect(page.getByText('To make changes at any time,', { exact: true })).toBeVisible();
});