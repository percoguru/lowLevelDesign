import { Cart } from "../Cart";
import { ICart } from "../ICart";
import { Product } from "../Product";

export abstract class CartDecorator implements ICart {
  cart: ICart;

  constructor(cart: ICart) {
    this.cart = cart;
  }

  addProduct(product: Product): void {
    this.cart.addProduct(product);
  }

  calculateTotal(): number {
    return this.cart.calculateTotal();
  }
}

// const a = new CartDecorator();
