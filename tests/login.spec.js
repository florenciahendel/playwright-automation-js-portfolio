import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Sauce Demo authentication', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });


    test('User can login successfully', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory\.html/i);

    });

    test('User cannot login if locked out', async ({ page }) => {
        await loginPage.login('locked_out_user', 'secret_sauce');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
    });

    test('User cannot login with invalid credentials', async ({ page }) => {
        await loginPage.login('error_user', 'secret_sacue');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
    });
});