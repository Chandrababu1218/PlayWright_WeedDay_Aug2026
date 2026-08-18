import test, { chromium, firefox } from "@playwright/test";

test("launch page fixture ", async ({ page }) => {
  await page.goto("https://leaftaps.com/opentaps/control/login");
  await page.waitForTimeout(3000);
  console.log(await page.title());
});
