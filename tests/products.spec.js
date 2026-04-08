import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products page functionalities', () => {
    let loginPage;
    let productsPage;

    test.beforeEach(async ({ page }) => {

        productsPage = new ProductsPage(page);
        await page.goto('https://www.saucedemo.com/inventory.html', { 
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
        await productsPage.waitForPageLoad();
    });

    test('Should be 6 products', async () => {
        await expect(productsPage.inventoryItems).toHaveCount(6);
    });

    test('Should have correct product names', async () => {
        const expectedNames = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)'
        ];

        const actualNames = await productsPage.getProductNames();
        expect(actualNames).toEqual(expectedNames);
    });

    test('Should add product to cart', async () => {
        await productsPage.addProductToCart('Sauce Labs Backpack');
        await expect(productsPage.cartBadge).toBeVisible();
        await expect(productsPage.cartBadge).toHaveText('1');
    });

});
