module.exports = {
  testDir: './e2e',
  timeout: 30 * 1000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
};
const path = require('path');

module.exports = {
  testDir: './e2e',
  timeout: 30 * 1000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'admin',
      testMatch: /.*e2e\/admin\/.*\.spec\.js$/,
      use: {
        browserName: 'chromium',
        storageState: path.resolve(__dirname, 'auth/admin-user.json'),
      },
    },
    {
      name: 'manager',
      testMatch: /.*e2e\/manager\/.*\.spec\.js$/,
      use: {
        browserName: 'chromium',
        storageState: path.resolve(__dirname, 'auth/manager-user.json'),
      },
    },
    {
      name: 'employee',
      testMatch: /.*e2e\/employee\/.*\.spec\.js$/,
      use: {
        browserName: 'chromium',
        storageState: path.resolve(__dirname, 'auth/employee-user.json'),
      },
    },
  ],
};
