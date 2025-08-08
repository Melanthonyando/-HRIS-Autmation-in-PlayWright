const { test, expect } = require('@playwright/test');
const path = require('path');

test.use({
  storageState: path.resolve('auth/admin-user.json'),
  headless: false,
});

test('Admin user should be able to Logout successfully', async ({ page }) => {
    await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
    /* await page.pause(); */ // Optional for debugging

    // Click on the Sign in with Google button
    await page.getByRole('button', { name: 'Sign in with Google' }).click();

    await page.waitForTimeout(1000); // Wait for the page to load;

    await page.getByRole('link', { name: 'Mel Test melanthonytest4@' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    // Verify user to Employee Information
    await expect(page.getByRole('button', { name: 'user-avatar' })).toBeVisible();
    await page.getByRole('button', { name: 'user-avatar' }).click();
    await page.waitForTimeout(500);
    // Profile information
    await expect(page.getByLabel('', { exact: true }).getByText('Mel Admin')).toBeVisible();
    await expect(page.getByText('Admin', { exact: true })).toBeVisible();
    //These buttons must be visible but remain static
    await expect(page.getByRole('menuitem', { name: 'Settings & Security' })).toBeVisible();

    await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible(); 
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForTimeout(1000); // Wait for the logout process

    // Should it back to the login page
    await page.waitForURL('https://staging-hris.sun-ph-dev.link/sign-in');
});