import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DownloadComponent } from './components/download/download.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminGuard } from './guards/admin.guard';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'admin-page', component: AdminPageComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'download', component: DownloadComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'change-password', component: ChangePasswordComponent,
    canActivate: [GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
