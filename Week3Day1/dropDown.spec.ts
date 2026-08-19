import test, { chromium, firefox } from "@playwright/test";
import Javascript from "@playwright/test";

/* test("Learning Dropdown methods", async({page})=>{
    await page.goto("https://leafground.com/select.xhtml")

    await page.locator('[class="ui-selectonemenu"]').selectOption({label: 'Playwright'})
    await page.waitForTimeout(2000)

    await page.locator('[class="ui-selectonemenu"]').selectOption({index : 3})

    await page.waitForTimeout(2000)

    const dropDOwn = await page.locator('[class="ui-selectonemenu"]>option')
    const dropDownValues = await dropDOwn.count()

    console.log("Count of Dropdown Values are ", dropDownValues);

    for (let index = 0; index < dropDownValues ; index++) {
        let dropDownTextValues = await dropDOwn.nth(index).innerText()
         console.log(dropDownTextValues);
         
        
    }
    

}) */

test("Validating Country Dropdown", async ({ page }) => {
  await page.goto("https://leafground.com/select.xhtml");

  const selectTool = '[class="ui-selectonemenu"]';
  const selectCountry = ".ui-selectonemenu-label.ui-inputfield.ui-corner-all";
  const selectState = ".ui-selectonemenu-label.ui-inputfield.ui-corner-all";
  const chooseCourse = '//*[@id="j_idt87:auto-complete"]/ul/li/input';

  await page.locator(selectTool).selectOption("Playwright");
  await page.waitForTimeout(2000);

  await page.locator(selectCountry).nth(0).click();
  await page.locator('[data-label="India"]').click();
  await page.waitForTimeout(2000);

  await page.locator(selectState).nth(1).click();
  await page.locator('[data-label="Bengaluru"]').click();
  await page.waitForTimeout(2000);

  await page.locator(chooseCourse).fill("Playwright");

  const automationToolDropDown = page.locator('[class="ui-selectonemenu"]>option');
  const automationToolDropDownValues = await automationToolDropDown.count();
  console.log("count of Automation Tools list is:", automationToolDropDownValues);

  for (let index = 0; index < automationToolDropDownValues; index++) {
    console.log(await automationToolDropDown.nth(index).innerText());
  }

  const countryDropdown = page.locator(selectCountry);
  const countryDropdownValues = await countryDropdown.count();
  console.log("Dropdown values of country are ", countryDropdownValues);
});

/* test("Validating Choose Course DropDown", async ({ page }) => {
  await page.goto("https://leafground.com/select.xhtml");
  /*  const courseName = page.locator(
    '[class = "ui-autocomplete-dropdown ui-button ui-widget ui-state-default ui-corner-right ui-button-icon-only ui-state-hover"]',
  ); 

  const courseName = page.locator(
    '[class="ui-autocomplete-multiple-container ui-autocomplete-dd-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-left"]',
  );

  //await courseName.clear({ delay: 1000 });
  await courseName.pressSequentially("Play", { delay: 1000 });
  await courseName.locator("#j_idt87\:auto-complete_panel > ul")
    .getByRole("listitem")
    .filter({ hasText: "Playwright", delay : 3000 })
    .click();
}); */
