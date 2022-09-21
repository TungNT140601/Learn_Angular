import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: [
    './admin-page.component.css'
  ]
})
export class AdminPageComponent implements OnInit {
  public users: User[] = [];
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this.auth.getAllProduct().subscribe(
      (data: any) => {
        console.log(data);
        this.users = data;
      }
    );
  }
}
