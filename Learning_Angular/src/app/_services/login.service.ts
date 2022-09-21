import { Injectable } from '@angular/core';
import { USERS } from '../users';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public logInCheck: boolean = false;
  public IsAdmin: boolean = false;
  public User: User = {
    username: '',
    password: ''
  };
  constructor() { }
  checkLogin(username: string, password: string): boolean {
    var check = true;
    var u = USERS.find(u => u.username == username && u.password == password);
    if (u != null) {
      check = true;
      this.logInCheck = true;
      this.User = u;
    } else {
      check = false;
    }
    return check;
  };
  checkAdmin(): boolean {
    if (this.User.username === 'a') {
      this.IsAdmin = true;
    }
    else {
      this.IsAdmin = false;
    }
    return this.IsAdmin;
  }
}
