import { Injectable } from '@angular/core';
import { data } from '../MockData';
import { Product } from '../Product';

@Injectable()
export class ProductService {
  products = data;

  constructor() { }
  getProducts(){ // Lay danh sach san pham
      return this.products;
  }
  getProduct(){ // Chi tiet san pham

  }
  removeProduct(){ // Xoa san pham

  }
  addProduct(product){ // them san pham
    let newObj = { id: 6, ...product};
    this.products.push(product)
  }
  editProduct(){ // sua san pham

  }
}