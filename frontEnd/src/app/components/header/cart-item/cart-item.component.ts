import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem : any;
  @Input() index  : any;
  cartItems: Cart[] = [];

  constructor(private msg : MessageService) { }

  ngOnInit(): void {
  }

  handleDeleteToCart(){
    this.msg.sendDeleteCartItemMsg(this.index);
    }

 

  

 

}
