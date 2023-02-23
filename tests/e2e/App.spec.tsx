import { test, expect } from "@playwright/experimental-ct-react";
import App from "../../src/App";

test.use({
  headless: false,
});

test("Main page test", async ({ mount, browserName, isMobile }) => {
  const page = await mount(<App />);
  console.log(isMobile);
  await page.screenshot({
    type: "jpeg",
    quality: 100,
    path: `./tests/screenshots/${browserName}${isMobile ? "Mobile" : ""}.jpeg`,
    // fullPage: true,
    scale: "device",
  });

  await expect(page).toContainText("Vite + React");
});
