import {Page} from '@playwright/test'

export class formlayoutpage {

    private readonly Page: Page

        constructor (Page:Page){

            this.Page = Page
        }

async submitusingbygridwithcredentialsandsubmit (email: string, password:string,optiontext: string){

    const usinggridemailinput = this.Page.locator('nb-card',{hasText: "Using the Grid"})
     await usinggridemailinput.getByRole('textbox',{name:"Email"}).fill(email)
     await usinggridemailinput.getByRole('textbox',{name:"Password"}).fill(password)
     await usinggridemailinput.getByRole('radio',{name: optiontext}).check({force: true})
     await usinggridemailinput.getByRole('button').click()

}

async submitinformbyusingdrid (name: string,email: string, rememberMe: boolean){

    const informpage = this.Page.locator('nb-card',{hasText: "Inline form"})
     await informpage.getByRole('textbox',{name:"Jane Doe"}).fill(name)
     await informpage.getByRole('textbox',{name:"Email"}).fill(email)
     if(rememberMe)
        await informpage.getByRole('checkbox').check({force: true})
        await informpage.getByRole('button').click()


    }

}

