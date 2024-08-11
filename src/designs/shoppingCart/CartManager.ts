import { Cart } from "./Cart";
import { PercentageDiscountDecorator } from "./decorators/PercentageDiscountDecorator";
import { PercentageDiscountNextDecorator } from "./decorators/PercentageDiscountNextProduct";
import { Product, ProductType } from "./Product";

class CartManager {
  main() {
    const cart = new Cart();

    cart.addProduct(new Product("1", ProductType.accessories, 100));
    cart.addProduct(new Product("2", ProductType.accessories, 100));
    cart.addProduct(new Product("3", ProductType.furniture, 1000));

    console.log("Cart total without discount: ");
    console.log(cart.calculateTotal());

    const nextItemDiscountCart = new PercentageDiscountNextDecorator(cart, 20);

    console.log("Next item at 20% off");
    console.log("Adding next item worth 2000: ");

    nextItemDiscountCart.addProduct(
      new Product("4", ProductType.furniture, 2000)
    );

    console.log("Cart total with discount: ");
    console.log(nextItemDiscountCart.calculateTotal());

    const discountedCart = new PercentageDiscountDecorator(
      nextItemDiscountCart,
      30
    );

    console.log("Complete cart at 30% off: ");
    console.log("Cart total with discount: ");
    console.log(discountedCart.calculateTotal());
  }
}

const cm = new CartManager();

cm.main();
