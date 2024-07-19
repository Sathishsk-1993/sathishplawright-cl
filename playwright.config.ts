import { defineConfig, devices } from '@playwright/test';
import type { Testoptions } from './test-options'


//  require('dotenv').config();

// export default defineConfig<Testoptions>({
//   timeout:70000,
//   //globalTimeout:60000,
//   expect:{
//     timeout: 120 * 1000,
//   },
  
//   retries:1,
//   reporter: [
//     process.env.CI ? ["dot"] : ["list"],
//     [
//       "@argos-ci/playwright/reporter",
//       {
//         // Upload to Argos on CI only.
//         uploadToArgos: !!process.env.CI,

      
//       },
//     ],
  
//   //['allure-playwright'],
//   ['html'],
 
//   ],
//   use: {
   
//     baseURL: 'http://localhost:4200/',
//     GlobalsQa: 'https://www.globalsqa.com/demo-site/draganddrop/',
   
    
   
//     trace: 'on-first-retry',
//     screenshot: "only-on-failure",
//     video : 'off'
//   },

//   projects: [
    
//     // {
//     //   name: 'Staging',
//     //   use: { 
//     //     ...devices['Desktop Chrome'],
//     //     baseURL: 'http://localhost:4202/',
//     //    },
   
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'mobile',
//       testMatch: 'testmobile.spec.ts',
//       use: { ...devices['Nexus 4 landscape'] },
//     },
    
//   ],

//   webServer:{
//     command:'npm run start',
//     url:'http://localhost:4200/'


//   }
require('dotenv').config();

module.exports = defineConfig({
  // Other Playwright configurations
  timeout: 30000, // Timeout for individual tests
  retries: 2, // Number of retries for failed tests

  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
  },

  // Project-specific settings
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Web server configuration
  webServer: {
    command: 'npm start', // Command to start the server
    url: 'http://localhost:4200', // URL to wait for
    timeout: 120000, // Increased timeout to 2 minutes (120000ms)
    reuseExistingServer: !process.env.CI, // Reuse server if not in CI environment
  },
})


});
