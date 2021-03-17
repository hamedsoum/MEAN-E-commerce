import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authUrl } from '../config/api';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(username: string, password1 : string):Observable<any>{
    return this.http.post(authUrl + 'signin', {
      username,
      password1
    }, httpOptions)
  }

  register(user: User/*firstName: String,lastName: String,username: String,email: String,genre: String,
    city : String,country : String,password1: String,password2: String*/):Observable<User>{
      return this.http.post<User>(authUrl + 'signup', user/*{
        firstName,
        lastName,
        username,
        email,
        genre,
        city,
        country,
        password1,
        password2
      }*/, httpOptions)
    }
}
