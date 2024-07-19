import { defineConfig, devices } from '@playwright/test';
import type { Testoptions } from './test-options'


 require('dotenv').config();

 const config = {
  webServer: {
    command: 'npm start',
    url: 'http://localhost:4200',
    timeout: 120000, // increase timeout to 2 minutes (120000ms)
    reuseExistingServer: !process.env.CI
  },
  // other configurations
};

module.exports = config;


export default defineConfig<Testoptions>({
  timeout:70000,
  //globalTimeout:60000,
  expect:{
    timeout: 120 * 1000,
  },
  
  retries:1,
  reporter: [
    process.env.CI ? ["dot"] : ["list"],
    [
      "@argos-ci/playwright/reporter",
      {
        // Upload to Argos on CI only.
        uploadToArgos: !!process.env.CI,

      
      },
    ],
  
  //['allure-playwright'],
  ['html'],
 
  ],
  use: {
   
    baseURL: 'http://localhost:4200/',
    GlobalsQa: 'https://www.globalsqa.com/demo-site/draganddrop/',
   
    
   
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    video : 'off'
  },

  projects: [
    
    // {
    //   name: 'Staging',
    //   use: { 
    //     ...devices['Desktop Chrome'],
    //     baseURL: 'http://localhost:4202/',
    //    },
   
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'mobile',
      testMatch: 'testmobile.spec.ts',
      use: { ...devices['Nexus 4 landscape'] },
    },
    
  ],

  webServer:{
    command:'npm run start',
    url:'http://localhost:4200/'


  }


});
