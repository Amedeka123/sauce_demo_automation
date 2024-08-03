import { Page } from "@playwright/test";
import ProductPage from "./productPage";

export default class ThankPage{
    page:Page;

    constructor(page:Page){
        this.page = page;
    }

    private readonly thanksSelector = ".complete-header"
    private readonly backHomeSelector = "#back-to-products"


    geThanksLocator (){
        return  this.page.locator(this.thanksSelector)
    }

    async clickBackHomeButton (){
        await this.page.locator(this.backHomeSelector).click()
        return new ProductPage(this.page)
    }
}