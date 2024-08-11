import { Product } from "./Product";

export interface ICart {
  addProduct(product: Product): void;
  calculateTotal(): number;
}
