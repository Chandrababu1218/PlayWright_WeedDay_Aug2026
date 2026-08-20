import {test, expect} from "@playwright/test";

test("Edit Lead in Leaf Taps application ", async({page})=>{
    const url = page.goto("https://leaftaps.com/opentaps/control/main");

  const userName = page.locator("#username");
  const password = page.locator("input[name='PASSWORD']");
  const loginButton = page.locator("#login > p:nth-child(3) > input");
  const crmButton = page.locator("#label > a");
  const leads = page.locator('//a[@href="/crmsfa/control/leadsMain"]')
  const createLead = page.locator('//a[@href="/crmsfa/control/createLeadForm"]')
   const companyName = page.locator("#createLeadForm_companyName");
  const firstName = page.locator('input[name = "firstName"]');
  const lastName = page.locator("td>input");
  const createLeadButton = page.locator('//input[@name="submitButton"]')
  const editLead = page.locator('//a[contains(text(),"Edit")]')
  const updateCompanyName = page.locator('#updateLeadForm_companyName')
  


  await userName.fill("democsr2");
  await password.fill("crmsfa");
  await loginButton.click();
  await crmButton.click();
  await leads.click();
  await createLead.click()
  await companyName.fill("TestLeaf");
  await firstName.nth(2).fill("Chandra");
  await lastName.nth(3).fill("Babu");
  await createLeadButton.click()
  await editLead.click()
  await page.waitForTimeout(3000)
  await updateCompanyName.clear()
  await updateCompanyName.fill("Qeagle")

  await page.waitForTimeout(3000)

})