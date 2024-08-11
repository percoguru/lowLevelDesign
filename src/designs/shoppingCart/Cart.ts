import { ICart } from "./ICart";
import { Product } from "./Product";

export class Cart implements ICart {
  private products: Product[];
  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  calculateTotal(): number {
    let total = 0;
    this.products.forEach((product) => {
      total += product.getPrice();
    });
    return total;
  }

  getProducts() {
    return this.products;
  }
}
