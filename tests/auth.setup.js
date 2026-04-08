import { test as setup, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const authFile = path.join(process.cwd(), 'playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // 1. Crear la carpeta automáticamente si no existe
  const folder = path.dirname(authFile);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory\.html/);

  // 2. Guardar la sesión
  await page.context().storageState({ path: authFile });
});