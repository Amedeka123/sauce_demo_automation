import { Page, expect } from "@playwright/test";
import ProductDetailsPage from "./productDetailsPage";

export default class ProductPage{
    page:Page;

    constructor(page:Page){
        this.page = page;
    }
    private readonly productTextSelector = 'span[data-test="title"]';
    backpackSelector = '#item_4_title_link > div';
    bikeLightSelector = '#item_0_title_link > div';
    boltTShirtSelector = '#item_1_title_link > div';
    //private readonly cartBadgeSelector = ".shopping_cart_badge";

    productTextElement(){
        return this.page.locator(this.productTextSelector)

    }


    private async clickItem(locator:string){
        await this.page.locator(locator).click()
    }

    async clickBackpack (){
        await this.clickItem(this.backpackSelector)
        return new ProductDetailsPage(this.page)
    }

    async clickBikeLight(){
        await this.clickItem(this.bikeLightSelector)
        return new ProductDetailsPage(this.page)
    }

    async clickBoltTShirt(){
        await this.clickItem(this.boltTShirtSelector)
        return new ProductDetailsPage(this.page)
    }

} 