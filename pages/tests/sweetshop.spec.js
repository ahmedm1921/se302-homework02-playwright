import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Sweet Shop Tests', () => {

  test('TC01 – Homepage loads', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await expect(page).toHaveURL(/sweetshop/);
  });

  test('TC03 – Search valid product', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.searchProduct('Chocolate');
    await expect(page.locator('.product')).toBeVisible();
  });

  test('TC04 – Search invalid product (Negative)', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.searchProduct('xxxx');
    await expect(page.locator('.product')).toHaveCount(0);
  });

  test('TC05 – Add product to cart', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.addFirstProductToCart();
    await expect(page.locator('.cart')).toBeVisible();
  });

});
