import { Cart } from "../Cart";
import { ICart } from "../ICart";
import { CartDecorator } from "./CartDecorator";

export class PercentageDiscountDecorator extends CartDecorator {
  percentageDiscount: number;
  calculateTotal(): number {
    const totalAmount = super.calculateTotal();
    return totalAmount * (1 - this.percentageDiscount / 100);
  }

  constructor(cart: ICart, discount: number) {
    super(cart);
    this.percentageDiscount = discount;
  }
}
