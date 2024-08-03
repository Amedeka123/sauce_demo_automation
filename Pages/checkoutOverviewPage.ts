import { Page } from "@playwright/test";

export default class CheckoutOverviewPage {
  private readonly priceSelectors = ".item_pricebar > div";
  private readonly finishButtonSelector = "#finish";
  private readonly taxSelector = ".summary_tax_label";
  private readonly totalSelector = ".summary_total_label";
  private readonly subTotalSelector = 'div[data-test="subtotal-label"]';
  private readonly finalTotalSelector = 'div[data-test="total-label"]';

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Helper method to click an element
  async clickElement(locator: string) {
    await this.page.locator(locator).click();
  }

  // Method to click the finish button
  async clickFinishButton() {
    await this.clickElement(this.finishButtonSelector);
  }

  // Helper method to extract the numeric part of a string
  getNumberPart(value: string) {
    return parseFloat(value.replace(/[^\d.-]/g, ''));
  }

  // Method to get the tax amount
  async getTax() {
    const tax = await this.page.locator(this.taxSelector).innerText();
    const taxVal = this.getNumberPart(tax);
    return taxVal;
  }

  // Method to get the total amount
  async getTotal() {
    const total = await this.page.locator(this.totalSelector).innerText();
    const totalVal = this.getNumberPart(total);
    return totalVal;
  }

  // Method to get price elements
  getPriceElements() {
    return this.page.locator(this.priceSelectors);
  }

  // Method to get the total price of all items
  async getTotalPrice() {
    const priceElements = this.getPriceElements();
    const prices: number[] = [];
    for (let i = 0; i < await priceElements.count(); i++) {
      const priceText = await priceElements.nth(i).innerText();
      const priceNumber = this.getNumberPart(priceText);
      prices.push(priceNumber);
    }
    const sum = prices.reduce((total, price) => total + price, 0);
    return sum;
  }

  // Method to get the subtotal element
  getSubTotalElement() {
    return this.page.locator(this.subTotalSelector);
  }

  // Method to get the total element
  getTotalElement() {
    return this.page.locator(this.finalTotalSelector);
  }

  // Method to calculate the total price including tax
  async totalPrice() {
    return (await this.getTotalPrice()) + (await this.getTax());
  }
}