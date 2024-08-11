export class Product {
  private price: number;
  private readonly id: string;
  private type: ProductType;

  getPrice(): number {
    return this.price;
  }

  constructor(id: string, type: ProductType, price: number) {
    this.id = id;
    this.price = price;
    this.type = type;
  }

  clone(price: number) {
    return new Product(this.id, this.type, price);
  }
}

export enum ProductType {
  furniture = "furniture",
  accessories = "accessories",
  mobiles = "mobiles",
}
