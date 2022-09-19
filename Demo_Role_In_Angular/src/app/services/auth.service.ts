import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USERS } from '../models/users';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _login = false;
  private _isAdmin = false;
  constructor(
    private router: Router
  ) { }
  login(username: string = '', password: string = '') {
    const userInfo = USERS.find(u => u.username === username && u.password === password);
    if (userInfo == null) {
      this.router.navigateByUrl('sign-in');
    } else {
      this._login = true;
      this.router.navigateByUrl('home');
      this.IsAdmin(userInfo.role);
    }
  }//login
  Logined(): boolean {
    return this._login;
  }
  IsAdmin(role: string): void {
    if (role == 'ADMIN') {
      this._isAdmin = true;
    } else {
      this._isAdmin = false;
    }
  }
  CheckAdmin(): boolean {
    return this._isAdmin;
  }
}
