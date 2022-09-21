import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USERS } from '../models/users';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _login = false;
  private _isAdmin = false;
  private _urlGetAccount = 'https://localhost:7271/Account/GetAccounts';
  private _urlcheckLogin = 'https://localhost:7271/Account/CheckLogin';
  public users: User[] = [];
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
  login(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post<User>(this._urlcheckLogin, {'query_string' : user}, { 'headers': headers });
  }//login
  Logined(): boolean {
    return this._login;
  }
  IsAdmin(role: boolean): void {
    if (role) {
      this._isAdmin = true;
    } else {
      this._isAdmin = false;
    }
    console.log('IsAdmin: ' + this._isAdmin);
  }
  CheckAdmin(): boolean {
    return this._isAdmin;
  }
  getAllProduct(): any {
    return this.http.get(`${this._urlGetAccount}`);
  }

}
