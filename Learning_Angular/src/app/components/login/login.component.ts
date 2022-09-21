import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = {
    username: '',
    password: ''
  };
  public msg = '';
  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private routE: Router
  ) { }

  ngOnInit(): void {
  }
  checkLogin(): void {
    if (this.loginService.checkLogin(this.user.username, this.user.password)) {
      this.msg = 'Login Success';
      this.routE.navigate(['/product']);
    } else {
      this.msg = 'Login Error';
      this.routE.navigate(['']);
    }
  }
}
