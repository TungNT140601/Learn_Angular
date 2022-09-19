import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo_Role_In_Angular';
  constructor(
    private auth: AuthService
  ) { };
  CheckAdmin():boolean{
    return this.auth.CheckAdmin();
  }
  CheckLogin():boolean{
    return this.auth.Logined();
  }
}
