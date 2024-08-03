import {test as setup, expect} from "@playwright/test"
import LoginPage from "../Pages/loginPage"
require('dotenv').config();
const authfile = "playwright/.auth/user.json"

setup("login and store session", async({page})=>{
   const loginPage = new LoginPage(page)
  await page.goto("/")
  await loginPage.enterUsername("standard_user") //process.env.DEMO_USER!
  await loginPage.enterPassword("secret_sauce") // process.env.PASSWORD!
  await loginPage.clickLoginButton()
  await page.context().storageState({path:authfile})
  await page.close()
})

export default setup;