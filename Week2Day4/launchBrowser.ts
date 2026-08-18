import test, { chromium, firefox } from "@playwright/test";

test("launch chromium browser", async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.flipkart.com/");
  await page.waitForTimeout(3000);
  console.log(await page.title());
});

test("launch firefox browser", async () => {
  let browser1 = await firefox.launch({ headless: false });
  let context1 = await browser1.newContext();
  let page1 = await context1.newPage();
  await page1.goto("https://leaftaps.com/opentaps/control/login");
  await page1.waitForTimeout(3000);
  console.log(await page1.title());
});

test("launch Chrome browser", async () => {
  let browser2 = await chromium.launch({ channel: "chrome", headless: false });
  let context2 = await browser2.newContext();
  let page2 = await context2.newPage();
  await page2.goto("https://www.amazon.in/");
  await page2.waitForTimeout(3000);
  console.log(await page2.title());
}); 

