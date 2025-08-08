const { test, expect } = require('@playwright/test');
const path = require('path');

test.use({
  storageState: path.resolve('auth/employee-user.json'),
  headless: false,
});

test('Debugging must be able to display the employee dashboard', async ({ page }) => {
  await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
  await page.pause(); // Optional for debugging
});

// Verify that the employee dashboard is displayed
test('Employee User Able to Login Successfully', async ({ page }) => {
  await page.getByRole('button', { name: 'Sign in with Google' }).click();
  await page.getByRole('button', { name: 'Sign in with Google' }).click();
  await page.goto('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=1076770452341-6mva64abcrmoj3l8mg4phb5r3ad75d3r.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Fstaging-hris.sun-ph-dev.link%2Fapi%2Fauth%2Fcallback%2Fgoogle&access_type=offline&prompt=consent&state=TJvj_FjZDDnrz8SYHpbZaUiGlwQkq4q84Y_KPNwRaao&code_challenge=7LntBAZoHPvIKDKBxwi-YjzuiZdybQQqr4hOzzU_qk0&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow');
  await page.getByRole('link', { name: 'Mel Test melanthonytest5@' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://staging-hris.sun-ph-dev.link/my-daily-time-record');
});