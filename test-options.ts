import {test as base } from '@playwright/test'

export  type Testoptions ={
    GlobalsQa: string
}

export const test = base.extend<Testoptions>({
    GlobalsQa:['',{option:true}]
})