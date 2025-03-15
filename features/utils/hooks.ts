import { After, AfterAll } from '@cucumber/cucumber';
import { browser } from '@wdio/globals';

// Runs after each scenario
After(async function () {
  console.log('Tearing down after scenario...');
  await browser.deleteCookies(); // Clear cookies to reset session
  await browser.execute('window.localStorage.clear();'); // Clear local storage
  await browser.execute('window.sessionStorage.clear();'); // Clear session storage
});

// Runs after all scenarios
AfterAll(async function () {
  console.log('Closing browser after all tests...');
  await browser.closeWindow(); // Close the browser
});
