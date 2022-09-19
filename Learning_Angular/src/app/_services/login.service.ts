import { Injectable } from '@angular/core';
import { USERS } from '../users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  checkLogin(username: string, password: string): boolean {
    var check = true;
    var u = USERS.find(u => u.username == username && u.password == password);
    if(u != null){
      check = true;
    }else{
      check = false;
    }
    return check;
  }
}
