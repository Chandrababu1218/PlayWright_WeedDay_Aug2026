import { test, expect, chromium } from "@playwright/test";

test("Create a Lead using CSS Selectors", async ({ page }) => {
  const url = page.goto("https://leaftaps.com/opentaps/control/main");

  const userName = page.locator("#username");
  const password = page.locator("input[name='PASSWORD']");
  const loginButton = page.locator("#login > p:nth-child(3) > input");
  const crmButton = page.locator("#label > a");
  const createLead = page.locator(
    "#left-content-column > div.frameSection > div.frameSectionBody > ul > li:nth-child(1) > a",
  );
  const companyName = page.locator("#createLeadForm_companyName");
  const firstName = page.locator('input[name = "firstName"]');
  const lastName = page.locator("td>input");
  const source = page.locator("#createLeadForm_dataSourceId"); // follow this process
  const salutation = page.locator("#createLeadForm_personalTitle");
  const title = page.locator("#createLeadForm_generalProfTitle");
  const annualRevenue = page.locator('input[name ="annualRevenue"]');
  const department = page.locator("#createLeadForm_departmentName");
  const phoneNumber = page.locator("#createLeadForm_primaryPhoneNumber");
  const createLeadButton = page.locator(".smallSubmit")

  await userName.fill("democsr2");
  await password.fill("crmsfa");
  await loginButton.click();

  await crmButton.click();

  await createLead.click();
  await companyName.fill("TestLeaf");
  await firstName.nth(2).fill("Chandra");
  await lastName.nth(3).fill("Babu");
  await salutation.fill("Mr.");
  await title.fill("QA Engineer");
  await annualRevenue.fill("25Lakhs");
  await department.fill("Technology");
  await source.selectOption({ label: "Conference" });
  let selectedOption = await source.locator("option:checked").innerText();
  console.log("Selected option form the lis is: ", selectedOption);

  await page.waitForTimeout(2000);
  await expect(source.locator("option:checked")).toHaveText("Conference");
  await source.selectOption({ index: 5 });
  await page.waitForTimeout(2000);
  await expect(source.locator("option:checked")).toHaveText(
    "Existing Customer",
  );

  const dropDown = page.locator("[id='createLeadForm_dataSourceId']>option");
  const dropDownValues = await dropDown.count();

  console.log("Dropdown count is: ", dropDownValues);

  for (let index = 0; index < dropDownValues; index++) {
    console.log(await dropDown.nth(index).innerText())


  }

  await phoneNumber.fill("1234567890")
  await createLeadButton.click()
  await page.waitForTimeout(3000);

});
