import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProduct():Observable<Product>{
     return this.http.get<Product>(productsUrl);
   }

   getOneProduct(productId : any):Observable<Product>{
    return this.http.get<Product>(`${productsUrl}/${productId}`);
  }
}
