import test from "@playwright/test";

test("Salesforce application Edit Individual Lead using Relative Xpath Locators", async({page})=>{
    await page.goto("https://login.salesforce.com")

    const userName = page.locator('//div[@id="username_container"]/input')// Parent to child
    const loginButton = page.locator('//*[@id="Login"]') // Attribute based Xpath
    const password = page.locator('//*[@id="usernamegroup"]/following-sibling::input');//Elder Sibling to younger Sibling
    const toggleMenuButton=page.locator('//div[@class="slds-icon-waffle"]') //Attribute based Xpath
    const viewAllLink = page.locator('//div[@class="slds-size_medium al-menu-div"]//button')// Grand Parent to Grand Child
    const individualsText = page.locator('//lightning-input[@class="searchBar slds-form-element"]//input[@class="slds-input"] ')
    const individualLink = page.locator('//mark[contains(text(),"Individuals")]')
    const searchIndividuals = page.locator('//input[@name="Individual-search-input"]')
    const dropDownIcon = page.getByRole('button', { name: 'Show Actions' })
    const editMenu = page.getByRole('menuitem', { name: 'Edit' })
    const firstName = page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]')
    const saveButton = page.locator('//span[text()="Save"]')
   
    

    await userName.nth(0).fill("dilipkumar.rajendran@testleaf.com")
    await loginButton.click()
    await password.nth(0).fill("TestLeaf@2025")
    await loginButton.click()
    
    await toggleMenuButton.click()
    await page.waitForTimeout(2000)
    await viewAllLink.click()
    await page.waitForTimeout(2000)

    await individualsText.fill("individuals")
    await individualsText.click()
    await page.waitForTimeout(2000)

    await individualLink.click()
    await searchIndividuals.fill("babu")
    await searchIndividuals.press('Enter')
    
    await dropDownIcon.first().click()
    
    await editMenu.click()
    
    await firstName.fill("Chandra")
    await page.waitForTimeout(3000)
    await saveButton.click()
    await page.waitForTimeout(2000)


   

   
    

    

    


})