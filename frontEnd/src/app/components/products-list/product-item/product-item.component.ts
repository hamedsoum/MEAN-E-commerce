import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;
  constructor(private msg : MessageService,
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem) 
   }

}
