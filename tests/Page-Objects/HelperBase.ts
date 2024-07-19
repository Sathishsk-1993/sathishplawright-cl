import {Page,expect} from '@playwright/test'

export class Helperpage {

    readonly page: Page

    constructor (page:Page){
        this.page= page
    }

    async waitfornumberofseconds(timeinseconds: number){

        await this.page.waitForTimeout(timeinseconds*2)
    }
}