import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/services/message.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  cartItems: Cart[] = [];
  cartITEM: [] = [];
  recu: any;
  allProduct = 0;
  allPRoductt  : string = '' ;
  cartTotal = 0;
  carTTotal : string = '' ;
  count = 0;
  showCartItem : boolean = false;

  constructor(private msg: MessageService,private toastr: ToastrService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
     this.username = user.username;
    }
    this.msg.getDeleteCartItemMsg().subscribe((id)=>{
      this.deleteCartItem(id)
    })
    this.msg.getMsg().subscribe((product ) =>{
     this.addToCart(product)
     this.showPanier();
    })
    this.showPanier();
    this.calcCartTotal();
    this.numberOfProductInCart();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
  addToCart(produit: any){
      let item = new Cart(produit.id, produit);
      let name = item.productName;
      console.log(name);
      
      let productinCart = false ;
      for (let i in this.cartItems) {
        if (this.cartItems[i].id === produit.id) {
          this.cartItems[i].qty++;
          localStorage.setItem("panier",JSON.stringify(this.cartItems));  
          productinCart = true;
          break;
        }
      }

      if(!productinCart /*&& getLocalStorage != null*/){
        this.cartItems.push(item)
        console.log(this.cartItems);
       localStorage.setItem("panier",JSON.stringify(this.cartItems));  
      }
      
      
    
    this.calcCartTotal();
    this.numberOfProductInCart();
    this.toastr.success(`${item.productName} ajouté au panier`);

  }

  numberOfProductInCart(){
      this.allProduct = 0;
      this.cartItems.forEach((item) => {
        this.allProduct += item.qty 
      })
      localStorage.setItem("allProduct", JSON.stringify(this.allProduct));
      this.allPRoductt = JSON.parse(localStorage.getItem('allProduct') || '{}');
      
  }

  calcCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach((item) => {
     this.cartTotal += (item.qty * item.price)
   })
   localStorage.setItem("produitTotal",JSON.stringify(this.cartTotal));
   this.carTTotal = JSON.parse(localStorage.getItem('produitTotal') || '{}');
    
  }

  showPanier(){
    let getLocalStorage = localStorage.getItem("panier");
    if(getLocalStorage == null){
      this.cartItems = [];
    }else{
    this.cartItems= JSON.parse(getLocalStorage);
      this.cartITEM = JSON.parse(getLocalStorage);
      console.log(this.cartITEM);
      
    }
  }

  deleteCartItem(index : any){
    this.cartItems = JSON.parse(localStorage.getItem('panier') || '{}');;
    this.cartItems.splice(index, 1)
      localStorage.setItem("panier",JSON.stringify( this.cartItems));
      this.showPanier()
      this.calcCartTotal();
    this.numberOfProductInCart();
   }

  showCartItems(){
    this.showCartItem =  !this.showCartItem;
  }
  
}
