import {Page} from '@playwright/test'
import { Helperpage } from './Page-Objects/HelperBase'

 export class navigationpage1 extends Helperpage {

    //private readonly page:Page
    
    constructor (page:Page){

        super (page)
    }



    async waitForAsync(){

        await this.page.goto("http://localhost:4200/ ")
        await this.page.getByText("Forms").click()
        await this.waitfornumberofseconds(2)
        await this.page.getByText("Form Layouts").click()
        

}


 


}
   
