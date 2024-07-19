
import {expect,test} from '@playwright/test'

test ('input fields',async({page},testinfo)=>{

    await page.goto("/")
    if(testinfo.project.name=='mobile'){
        await page.locator('.sidebar-toggle').click()
    }

    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
    if(testinfo.project.name=='mobile'){
        await page.locator('.sidebar-toggle').click()
    } 
    const usinggridemailinput = page.locator('nb-card',{hasText: "Using the Grid"}).getByRole('textbox',{name:"Email"})
    await usinggridemailinput.fill("test@test.com")
    await usinggridemailinput.clear()
    await usinggridemailinput.pressSequentially("test@test.com")//{delay:2000})

})