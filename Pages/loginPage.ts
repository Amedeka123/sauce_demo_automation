import { Page, expect } from "@playwright/test";
import ProductPage from "./productPage";

export default class LoginPage {
    page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    private readonly usernameSelector = "#user-name"
    private readonly passwordSelector = "#password"
    private readonly loginButtonSelector = "#login-button"

    async enterUsername (username:string) {
      await  this.page.locator(this.usernameSelector).fill(username)
    }

    async enterPassword (password: string){
        await this.page.locator(this.passwordSelector).fill(password)
    }

    async clickLoginButton(){
        await this.page.locator(this.loginButtonSelector).click()
       return new ProductPage(this.page)
    }
}