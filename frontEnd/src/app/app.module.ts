import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms'


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/products-list/product-item/product-item.component';
import { CartItemComponent } from './components/header/cart-item/cart-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './components/panier/panier.component';
import { ConnexionComponent } from './components/authentification/connexion/connexion.component';
import { InscriptionComponent } from './components/authentification/inscription/inscription.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfilComponent } from './components/profil/profil.component';

const routes = [
  {path : '', component : ProductsListComponent},
  {path : 'panier', component : PanierComponent},
  {path : 'productdetails/:id', component : ProductDetailsComponent },
  {path : 'connexion', component : ConnexionComponent},
  {path : 'inscription', component : InscriptionComponent},
  {path : 'profil', component : ProfilComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    ProductItemComponent,
    CartItemComponent,
    ProductDetailsComponent,
    FilterComponent,
    PanierComponent,
    ConnexionComponent,
    InscriptionComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
