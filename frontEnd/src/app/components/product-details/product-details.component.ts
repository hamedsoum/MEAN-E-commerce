import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  constructor(private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router, private msg : MessageService) { }

  ngOnInit(): void {
    this.getPproduct(this.route.snapshot.paramMap.get('id'));
  }

  getPproduct(id:any): void {
    this.productService.getOneProduct(id)
      .subscribe(
        data => {
          this.product = data;
          console.log(this.product);
        },
        error => {
          console.log(error);
        });
  }

  handleAddToCart(){
    this.msg.sendMsg(this.product) 
   }


}
