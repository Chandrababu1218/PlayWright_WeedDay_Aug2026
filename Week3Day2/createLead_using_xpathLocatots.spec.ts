import test from "@playwright/test";

test("Salesforce application Create Lead using Relative Xpath Locators", async({page})=>{
    await page.goto("https://login.salesforce.com")

    const userName = page.locator('//div[@id="username_container"]/input')// Parent to child
    const loginButton = page.locator('//*[@id="Login"]') // Attribute based Xpath
    const password = page.locator('//*[@id="usernamegroup"]/following-sibling::input');//Elder Sibling to younger Sibling
    const toggleMenuButton=page.locator('//div[@class="slds-icon-waffle"]') //Attribute based Xpath
    const viewAllLink = page.locator('//div[@class="slds-size_medium al-menu-div"]//button')// Grand Parent to Grand Child
    const salesText = page.locator('//lightning-input[@class="searchBar slds-form-element"]//input[@class="slds-input"] ')
    const salesLink=page.locator('(//p[@class="slds-truncate"])[2]')//Collection based Xpath
    const LeadsTab = page.locator('(//a[@class="slds-context-bar__label-action dndItem"])[3]')
    const newLead = page.locator('(//a[@class="forceActionLink"])[1]')
    const saluation=page.locator('//button[@name="salutation"]')
    const lastName = page.locator('//input[@name="lastName"]')
    const companyName = page.locator('//input[@name="Company"]')
    const saveButton = page.locator('//button[@name="SaveEdit"]')
   
    
    
    
    await userName.nth(0).fill("dilipkumar.rajendran@testleaf.com")
    await loginButton.click()
    await password.nth(0).fill("TestLeaf@2025")
    
    await loginButton.click()
    
    await toggleMenuButton.click()

    await page.waitForTimeout(2000)
    await viewAllLink.click()
    await page.waitForTimeout(2000)

    await salesText.fill("Sales")
    await salesLink.click()

    await page.waitForTimeout(3000)

    await LeadsTab.click()
    await page.waitForTimeout(3000)

    await newLead.click()
    

    await saluation.click()
    await page.locator('[data-value="Mr."]').click();

    const saluationDropDown =  page.locator('//span[text()="--None--"]');
    const saluationDropDownValues = await saluationDropDown.count()
    console.log("Count of Saluation :", saluationDropDownValues) 

  
    await lastName.fill("Bukkapuram")
    await companyName.fill("Test Leaf")
    await page.waitForTimeout(4000)


    


})

/*
//await courseName.clear({ delay: 1000 });
  await courseName.pressSequentially("Play", { delay: 1000 });
  await courseName.locator("#j_idt87\:auto-complete_panel > ul")
    .getByRole("listitem")
    .filter({ hasText: "Playwright", delay : 3000 })
    .click();
}); */
