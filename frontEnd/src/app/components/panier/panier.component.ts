import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { MessageService } from 'src/app/services/message.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  isLoggedIn = false;
  popupShow = false;
  cartItems: Cart[] = [];
  carTTotal : string = '' ;
  cartITEM: [] = [];

  constructor(private msg: MessageService,
    private tokenStorageService: TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.msg.getDeleteCartItemMsg().subscribe(()=>{
      let getLocalStorage = localStorage.getItem("panier");
    if(getLocalStorage == null){
      this.cartItems = [];
    }else{
    this.cartItems = JSON.parse(getLocalStorage);
    }
    let getTotalLocalStorage = localStorage.getItem("produitTotal");
    this.carTTotal = JSON.parse(localStorage.getItem('produitTotal') || '{}');
    })
    let getLocalStorage = localStorage.getItem("panier");
    if(getLocalStorage == null){
      this.cartItems = [];
    }else{
    this.cartItems = JSON.parse(getLocalStorage);

    }
    let getTotalLocalStorage = localStorage.getItem("produitTotal");
    console.log(this.cartITEM);
    this.carTTotal = JSON.parse(localStorage.getItem('produitTotal') || '{}');


  }

  handleDeleteToCart(){
    this.cartItems.forEach((element,i) => {
      this.msg.sendDeleteCartItemMsg(i);
      
    });
   }

  finaliser(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.router.navigate(['/profil']);
    }
    else
    {
      window.scroll(0,0)
      this.popupShow = true;
      return
    }
  }

  hiddenPopup(){
    this.popupShow = false;
  }

}
