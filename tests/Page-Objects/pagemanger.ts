import {Page,expect} from '@playwright/test'
import { NavigationPage } from './NavigationPage'
import { formlayoutpage } from './FormLayoutpage'

export class PageManger {
    formlayout() {
        throw new Error('Method not implemented.')
    }

    private readonly page: Page
    private readonly navigationpage: NavigationPage
    private formlayoutpage: formlayoutpage

    constructor (page:Page){

        this.page =page
        this.navigationpage= new NavigationPage (this.page)
        this.formlayoutpage = new formlayoutpage (this.page)

    }
navigateto(){
    return this.navigationpage

}

onformlayoutpage(){
    return this.formlayoutpage

}

} 