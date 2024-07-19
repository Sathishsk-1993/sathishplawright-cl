import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
await page.goto("/")
})

test.describe("suite1-clickforms",() => {
    test ('the first test', async({page})=> {
  
        await page.getByText("Forms").click()
        await page.getByText("Form Layouts").click()
     
     })

    })
test.describe("suite2-clickcharts",() => {
test ('the first test1', async({page})=> {
  
    await page.getByText('Charts').click()
    await page.getByText("Echarts").click()
 
 })
})