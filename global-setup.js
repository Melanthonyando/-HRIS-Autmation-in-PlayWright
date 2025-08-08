import { Browser, chromium } from "@playwright/test";

async function globalSetup() {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

        await page.goto('https://staging-hris.sun-ph-dev.link/sign-in');
        // Click Sign In with Google
        await page.getByRole('button', { name: 'Sign in with Google' }).click();

        // Save the state of the website / Login the page successfully
        await context.storageState({ path: "./LoginAuth.json" });

        await browser.close();
}

export default globalSetup;