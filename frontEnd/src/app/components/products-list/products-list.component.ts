import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: any;
  constructor(private produitService : ProductService,) { }


  ngOnInit(): void {
    this.produitService.getAllProduct().subscribe(data =>{
      this.products = data;
      console.log(this.products);
      
    })
  }
}
