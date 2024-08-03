import { Page } from "@playwright/test";
import ProductPage from "./productPage";
import CartPage from "./productCartPage";
export default class ProductDetailsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private readonly backButton = "#back-to-products";
  private readonly backpackSelector =
    "//div[@class='inventory_details_name large_size']";
  private readonly priceSelector = 'div[data-test="inventory-item-price"]';
  private readonly addToCartButton = "#add-to-cart";
  private readonly cartBadgeSelector = ".shopping_cart_badge";

  async clickBackButton() {
    await this.page.locator(this.backButton).click();
    return new ProductPage(this.page);
  }

  backpackElement() {
    return this.page.locator(this.backpackSelector);
  }

  private async clickElement(locator: string) {
    await this.page.locator(locator).click();
  }

  async clickCart() {
    await this.clickElement(this.cartBadgeSelector);
    return new CartPage(this.page);
  }


  async getPriceText() {
    return await this.page.locator(this.priceSelector).innerText();
  }

  async clickAddToCartButton() {
    await this.page.locator(this.addToCartButton).click();
  }

  getCartBadgeElement() {
    return this.page.locator(this.cartBadgeSelector);
  }
}
