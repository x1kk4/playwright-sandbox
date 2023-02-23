import { defineConfig, devices } from "@playwright/experimental-ct-react";

export default defineConfig({
  testDir: "./tests/e2e",
  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: "./__snapshots__",
  /* Maximum time one test can run for. */
  timeout: 10 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Chrome",
      // use: { ...devices["Desktop Chrome"], viewport: { width: 1920, height: 1080 } },
      use: { ...devices["Desktop Chrome"], viewport: { width: 1600, height: 900 } },
    },
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"], viewport: { width: 1920, height: 1080 } },
    },
    {
      name: "Safari",
      use: { ...devices["Desktop Safari"], viewport: { width: 1920, height: 1080 } },
    },

    {
      name: "IPhone 6s Chrome",
      use: { ...devices["iPhone 6 Plus Chrome"], viewport: { width: 300, height: 300 } },
    },

    {
      name: "IPhone 6s Firefox",
      use: { ...devices["iPhone 6 Plus Firefox"], viewport: { width: 300, height: 300 } },
    },

    {
      name: "IPhone 6s Safari",
      use: { ...devices["iPhone 6 Plus Safari"], viewport: { width: 300, height: 300 } },
    },
    // {
    //   name: "edge",
    //   use: devices["Desktop Edge"],
    // },
  ],
});
