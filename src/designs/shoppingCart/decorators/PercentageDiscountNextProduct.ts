import { Cart } from "../Cart";
import { Product } from "../Product";
import { CartDecorator } from "./CartDecorator";

export class PercentageDiscountNextDecorator extends CartDecorator {
  percentageDiscount: number;

  addProduct(product: Product): void {
    const updatedProduct = product.clone(
      product.getPrice() * (1 - this.percentageDiscount / 100)
    );
    console.log(updatedProduct.getPrice());
    super.addProduct(updatedProduct);
  }

  constructor(cart: Cart, discount: number) {
    super(cart);
    this.percentageDiscount = discount;
  }
}
