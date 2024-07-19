import {test,expect} from '@playwright/test'
import { PageManger } from './Page-Objects/pagemanger'


test.beforeEach(async({page}) => {
    await page.goto("/")
    })

    test ('navigate to forms page',async({page})=>
    {
const pm = new PageManger(page)
   
   
   await pm.navigateto().formlayoitpage()
   await pm.navigateto().datepicker()
   await pm.navigateto().smarttable()

    })

    test ('parameterized',async ({page})=>{
        const pm = new PageManger(page)
        await pm.navigateto().formlayoitpage()
        await pm.onformlayoutpage().submitusingbygridwithcredentialsandsubmit('test@test.com','test007','Option 2')
        await pm.onformlayoutpage().submitinformbyusingdrid('john smith','test@gmail.com',true)

    })

    