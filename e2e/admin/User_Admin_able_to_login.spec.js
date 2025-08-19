const { test, expect } = require('@playwright/test');
const { time } = require('console');
const { TIMEOUT } = require('dns');
const path = require('path');

test.use({
  storageState: path.resolve('auth/admin-user.json'),
  headless: false,
});

test('Admin user should be able to Login successfully using Google Account', async ({ page }) => {
  await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
  await page.pause(); // Optional for debugging
  await page.getByRole('button', { name: 'Sign in with Google' }).click();

  await page.waitForTimeout(1000); // Wait for the page to load

  // Text Displayed google account
  await expect(page.getByText('Pumili ng account', { exact: true })).toBeVisible();
  await expect(page.getByText('upang magpatuloy sa sun-ph-dev.link', { exact: true })).toBeVisible();

  await page.waitForTimeout(500); // Wait for the page to load
  await page.getByRole('link', { name: 'Mel Test melanthonytest4@' }).click();
  await page.waitForTimeout(500);

  // verify text display in the Google Account page
  await page.locator('div').filter({ hasText: /^Sign in with Google$/ }).nth(1);
  await expect(page.getByText('You’re signing back in to sun-ph-dev.link', { exact: true })).toBeVisible();
  await expect(page.getByText(/Review sun-ph-dev\.link/, { exact: true })).toBeVisible()

  // assert the visible text (partial match)
  await expect(page.getByText(/To make changes at any time, go to your/, { exact: true})).toBeVisible();
  // assert the link text
  await expect(page.getByRole('link', { name: 'Google Account' })).toBeVisible();
  // assert the link href
  await expect(page.getByRole('link', { name: 'Google Account' }))
  .toHaveAttribute('href', 'https://myaccount.google.com/connections#filter=4');

  // assert the visible text (partial match)
  await expect(page.getByText(/Learn more about /, { exact: true })).toBeVisible();
  // asset the link text
  await expect(page.getByRole('link', { name: 'Sign in with Google' })).toBeVisible();
  // assert the link href
  await expect(page.getByRole('link', { name: 'Sign in with Google' }))
  .toHaveAttribute('href', 'https://support.google.com/accounts/answer/12921417?sjid=1919169284593837430-NC');
a
  // Click continue button
  // Can successfully login the page
  await page.getByRole('button', { name: 'Continue' }).click();
  // Verify Successfully Message Display
  await expect(page.getByText('Verification Success!')).toBeVisible();  
});

test('User Cannot Proceed to Login with Invalid Credentials', async ({ page }) => {
  await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
  await page.pause(); // Optional for debugging
  await page.getByRole('button', { name: 'Sign in with Google' }).click();

  await page.waitForTimeout(1000); // Wait for the page to load

  // Text Displayed google account
  await expect(page.getByText('Pumili ng account', { exact: true })).toBeVisible();
  await expect(page.getByText('upang magpatuloy sa sun-ph-dev.link', { exact: true })).toBeVisible();
});