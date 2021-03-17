import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(userUrl + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(userUrl + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(userUrl + 'admin', { responseType: 'text' });
  }
}
