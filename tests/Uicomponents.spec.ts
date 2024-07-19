import {expect,test} from '@playwright/test'
import { table } from 'console'
import { delay } from 'rxjs-compat/operator/delay'
import { PageManger } from './Page-Objects/pagemanger'
import { first } from 'rxjs-compat/operator/first'
import {faker} from '@faker-js/faker'

test.beforeEach(async({page}) => {
await page.goto("/")
})


test.describe("inputfields",() => {
    test.beforeEach('the first test', async({page})=> {
  
        await page.getByText("Forms").click()
        await page.getByText("Form Layouts").click()
        //await page.locator('nb-card',{hasText: "Using the Grid"}).getByRole('textbox',{name:"Email"}).fill("test@test.com")
     
    })

    test ('input fields',async({page})=>{
        
     const usinggridemailinput = page.locator('nb-card',{hasText: "Using the Grid"}).getByRole('textbox',{name:"Email"})
     await usinggridemailinput.fill("test@test.com")
     await usinggridemailinput.clear()
     await usinggridemailinput.pressSequentially("test@test.com",)//{delay:2000})
    
     // general assertion

     const inputvalue = await usinggridemailinput.inputValue()
     expect (inputvalue).toEqual("test@test.com")

     await expect(usinggridemailinput).toHaveValue("test@test.com")

    })

    test('radio buttons',async({page})=>{
        const radiobutton = page.locator('nb-card',{hasText: "Using the Grid"})
        await radiobutton.getByLabel("Option 1").check({force: true})
        //await radiobutton.getByRole('radio', {name: "Option 1"}).check({force: true})
        const radiostatus = await radiobutton.getByLabel("Option 1").isChecked()
        expect (radiostatus).toBeTruthy

        const radiobutton2 = await radiobutton.getByLabel("Option 2").check({force: true})
        expect (await radiobutton.getByLabel("Option 1").isChecked()).toBeTruthy
        expect (await radiobutton.getByLabel("Option 2").isChecked()).toBeFalsy

    })
})

test ('check box',async ({page})=>{

    await page.getByText("Modal & Overlays").click()
        await page.getByText("Toastr").click()

        await page.getByRole('checkbox',{name: 'Hide on click'}).uncheck({force:true})
        await page.getByRole('checkbox',{name: 'Prevent arising of duplicate toast'}).uncheck({force:true})

        const allbox = page.getByRole('checkbox')
        for(const box of await allbox.all()){
            await box.check({force: true})
            expect(await box.isChecked()).toBeTruthy

        }

})
test ('list & dropdowns', async ({page})=>{

    const dropdowns = page.locator('ngx-header nb-select')
    await dropdowns.click()

    const optionlist = page.locator('nb-option-list nb-option')
    await expect(optionlist).toHaveText(["Light", "Dark", "Cosmic","Corporate"])
    await optionlist.filter({hasText: "Dark"}).click()


})

test ('tool tip',async ({page})=>{

    await page.getByText("Modal & Overlays").click()
        await page.getByText("Tooltip").click()

        
        page.getByRole("tooltip")
        const tooltip = page.locator("nb-card", {hasText:'Tooltip Placements'})
        await page.getByRole('button', {name :"Top"}).hover()

        // const tooltip1 = await page.getByRole('nbtooltip').first().textContent()
        // expect (tooltip1).toEqual('This is a tooltip')

})

test('dialog box', async({page})=>{
    
       await page.getByText("Tables & Data").click()
        await page.getByText("Smart Table").click()

        page.on('dialog',dialog =>{
       expect(dialog.message()).toEqual("Are you sure you want to delete?")
       dialog.accept()
        })

        await page.getByRole('table').locator('tr', {hasText:'mdo@gmail.com'}).locator('.nb-trash').click()
        await expect (page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
})

test ('web table1', async({page})=>{

    await page.getByText("Tables & Data").click()
    await page.getByText("Smart Table").click()

    const targetrow =page.getByRole('row', {name: 'twitter@outlook.com'})
    await targetrow.locator('.nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('Age').clear()
    await page.locator('input-editor').getByPlaceholder('Age').fill('65')
    await targetrow.locator('.nb-checkmark').click()


    await page.locator('.ng2-smart-pagination-nav').getByText('2').click()
    const row1 = await page.getByRole('row', {name : '11'}).filter({has:page.locator('td').nth(1).getByText('11')})
   await row1.locator('.nb-edit').click()
   await page.locator('input-editor').getByPlaceholder('E-mail').clear()
    await page.locator('input-editor').getByPlaceholder('E-mail').fill('Test@test.com')
    await page.locator('.nb-checkmark').click()
    await expect(page.locator('td').nth(5)).toHaveText('Test@test.com')

    // webpage2

    const ages =['20','30','40','50','200']

    for(let age of ages){
        await page.locator('input-filter').getByPlaceholder('Age').clear()
    await page.locator('input-filter').getByPlaceholder('Age').fill(age)
await page.waitForTimeout(500)
const cellvalue =  page.locator('td').last().textContent()

for(let row of await row1.all()){

    const cellvalue = await row.locator('td').last().textContent()

    if (age == '200'){
        expect(await page.getByRole('table').textContent()).toContain('no data found')
    }else
    expect(cellvalue).toEqual(age)



}}
    })

    test('datepicker', async({page}) =>{
        await page.getByText("Forms").click()
        await page.getByText("Datepicker").click()


        const datepicker = await page.getByPlaceholder("Form Picker")
        await datepicker.click()

        await page.locator('[class="day-cell ng-star-inserted"]').getByText("1", {exact :true}).click()
        await expect(datepicker).toHaveValue("Jul 1, 2024")


})

test('drag&drop', async({page})=>{
await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")
const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')

await frame.locator('li', {hasText:"High Tatras 2"}).dragTo(frame.locator('#trash'))

await frame.locator('li', {hasText:"High Tatras 4"}).hover()
await page.mouse.down()

await frame.locator('#trash').hover()
await page.mouse.up()
await expect(frame.locator('#trash li h5')).toHaveText(["High Tatras 2","High Tatras 4"])
    })

    test ('screenshotandrandompicker',async ({page})=>{
        const randomfullname = faker.person.fullName()
        const randomemail = `${randomfullname.replace(' ','')}${faker.number.int(1000)}@test.com`
        await page.getByText("Forms").click()
        await page.getByText("Form Layouts").click()
     await page.getByPlaceholder('Jane Doe').fill(randomfullname)
     await page.getByPlaceholder('Email').first().fill(randomemail)
     await page.waitForTimeout(1500)
     //await page.screenshot({ path: 'screenshot/screenshot.png' });
     //await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
    //  const buffer = await page.screenshot({ path: 'screenshot/screenshot.png' });
    //  console.log(buffer.toString('base64'));
    //const usinggridemailinput = page.locator('nb-card',{hasText: "Using the Grid"}).screenshot({ path: 'screenshot/screenshot.png'});
    //const path = await page.video().path();
    //await page.waitForTimeout(1500)
     await page.getByPlaceholder('Jane Doe').clear()
     await page.getByPlaceholder('Email').first().clear()


    })
    

