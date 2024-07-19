import {Locator, Page} from "@playwright/test";


export class NavigationPage  {

    readonly page: Page 
    readonly formlayoutmenuitem: Locator
    readonly datepickermenuitem: Locator
    readonly smarttablemenuitem: Locator



    constructor (page : Page)
    {this.page = page

       
        this.formlayoutmenuitem = page.getByText("Form Layouts")
        this.datepickermenuitem = page.getByText("Datepicker")
        this.smarttablemenuitem = page.getByText("Smart Table")

    }
    async waitexecution (){
        await this.page.getByText("Forms").click()
        await this.formlayoutmenuitem.click()
        //await this.waitfornumberofseconds(2)
    }

    async formlayoitpage(){
        await this.page.getByText("Forms").click()
       await this.formlayoutmenuitem.click() 
    }

    async datepicker(){
       
            await this.page.getByText("Forms").click()
            await this.datepickermenuitem.click()

    }

    async smarttable(){
    
        await this.page.getByText("Tables & Data").click()
         await this.smarttablemenuitem.click()
}
}
