import test, { chromium, Firefox } from "@playwright/test";

test("Learning CSS Selectors", async ({ page }) => {
  await page.goto("https://login.salesforce.com/");

  // For User name attribute I used (Descendent Sibling) 
  await page.locator("div~input").first().fill("dilipkumar.rajendran@testleaf.com");

    await page.locator('#Login').click();

    await page.locator('.label+input').nth(0).fill("TestLeaf@2025")

     await page.locator('#Login').click();
    
  await page.waitForTimeout(5000);

});
