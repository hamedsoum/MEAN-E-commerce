import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms'
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
   /* form : any ={
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      genre: null,
      city : null,
      country : null,
      password1: null,
      password2: null,

    }*/
    passwordMatch :boolean = true;
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';


  userModel = new User('', '', '', '', 'Femme',
                       '',"", '', '');
  constructor(private authService: AuthService) { }


 

  ngOnInit(): void {
  }
  onSubmit(): void {
    /*const {firstName, lastName, username, email, genre, city, country, password1, password2  } = this.form;*/

    this.authService.register(this.userModel).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      } 
    );
     
  }

  validatepassord(){
   if(this.userModel.password1 !== this.userModel.password2){
      this.passwordMatch = !this.passwordMatch;  
      console.log(this.passwordMatch);    
    }
    
  }

}
