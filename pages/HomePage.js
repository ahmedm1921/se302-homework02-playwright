export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Search"]');
    this.addToCartButton = page.locator('text=Add to Cart').first();
  }

  async open() {
    await this.page.goto('https://sweetshop.netlify.app/');
  }

  async searchProduct(name) {
    await this.searchInput.fill(name);
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }
}
