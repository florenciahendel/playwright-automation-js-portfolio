import { expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async waitForPageLoad() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.pageTitle).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async getProductCount() {
    return await this.inventoryItems.count();
  }

  async getProductNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async addProductToCart(productName) {
    await this.inventoryItems.filter({ hasText: productName }).locator('button').click();
  }
}
