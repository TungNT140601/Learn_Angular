import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  checkLogin(data: any) {
    var userInfo: User | any;
    this.auth.login(data).subscribe(data => {
      console.log(data);
      userInfo = data;
      console.log('userInfo : ' + userInfo.role);
      if (userInfo.role == '') {
        this.router.navigateByUrl('sign-in');
      } else {
        this.router.navigateByUrl('home');
        this.auth.IsAdmin(userInfo.role == 'ADMIN');
        console.log(userInfo.role);
      }
    });

  }
}
