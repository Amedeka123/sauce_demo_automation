import { Page } from "@playwright/test";
import CheckoutOverview from "./checkoutOverviewPage";

export default class CheckoutPage{
    page:Page;

    private readonly checkoutPageTitleSelector = 'span[data-test="title"]';
    private readonly firstNameSelector = "#first-name";
    private readonly lastNameSelector = "#last-name";
    private readonly zipCodeSelector = "#postal-code";
    private readonly continueButtonSelector = "#continue"
    private readonly cancelButtonSelector = "#cancel"

    constructor(page:Page){
        this.page = page;
    }

     async clickElement(locator:string){
        await this.page.locator(locator).click()
    }

    async clickContinueButton(){
        await this.clickElement(this.continueButtonSelector)
        return new CheckoutOverview(this.page)
    }

    async clickCancelButton(){
        await this.clickElement(this.cancelButtonSelector)
    }
    getCheckoutPageTittleLocator (){
        return this.page.locator(this.checkoutPageTitleSelector)
    }

    async enterFirstName (firstName:string){
        await this.page.locator(this.firstNameSelector).fill(firstName)
    }

    async enterLastName(lastName:string){
        await this.page.locator(this.lastNameSelector).fill(lastName)
    }

    async enterZipCode (zipCode:string){
        await this.page.locator(this.zipCodeSelector).fill(zipCode)
    }
}