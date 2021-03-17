import { Product } from "./product";

export class Cart {
    id: number;
  productId: number;
  _productName: string;
  description : string;
  image : string;
  qty: number;
  price: number;

  constructor(id: number, product: Product, qty = 1) {
    this.id = id;
    this.productId = product.id;
    this._productName = product.name;
    this.description = product.description;
    this.image = product.image
    this.price = product.prix;
    this.qty = qty;
  }

  get productName(){
    return this._productName;
  }
}
