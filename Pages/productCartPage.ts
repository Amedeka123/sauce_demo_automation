import { Page, expect } from "@playwright/test";
import CheckoutPage from "./checkoutPage";

export default class CartPage {
  page: Page;

  private readonly cartSelector = 'span[data-test="title"]';
  private readonly checkoutButtonSelector = "#checkout";
  private readonly priceSelectors = ".item_pricebar  > div";
  private readonly productNamesSelectors = ".inventory_item_name";
  private readonly cartItemsSelector = ".cart_item";

  constructor(page: Page) {
    this.page = page;
  }

  getCartElement() {
    return this.page.locator(this.cartSelector);
  }

  getPriceElements() {
    return this.page.locator(this.priceSelectors);
  }

  getProductNameElements() {
    return this.page.locator(this.productNamesSelectors);
  }

  getCartItems() {
    return this.page.locator(this.cartItemsSelector);
  }

 async clickElement(locator: string) {
    await this.page.locator(locator).click();
  }

  async clickCheckoutButton() {
    await this.clickElement(this.checkoutButtonSelector);
    return new CheckoutPage(this.page);
  }
}
