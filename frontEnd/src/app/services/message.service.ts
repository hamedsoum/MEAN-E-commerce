import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject()
  deleteSubject = new Subject()
  delSubject =  new Subject()
  constructor() { }

  //la methode sendMsg envoie un msg au panier contenant le produit a ajouter au panier 
  sendMsg(produit : any){
    this.subject.next(produit);
    console.log(produit);
    
    }
 //getMsg renvoie un observable concernant le message envoyé au quel il faut souscrire 
   getMsg(){
     return this.subject.asObservable();
   }

   sendDeleteCartItemMsg(id : any){
      this.deleteSubject.next(id)
      console.log(id)
   }

   getDeleteCartItemMsg(){
    return this.deleteSubject.asObservable();
   }

   sendPa(id : any){
    this.delSubject.next(id)
    console.log(id)
 }

 getP(){
  return this.delSubject.asObservable();
 }

}
