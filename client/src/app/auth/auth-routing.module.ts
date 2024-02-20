import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FinishRegistrationProcessComponent } from './finish-registration-process/finish-registration-process.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationLoaderComponent } from './verification-loader/verification-loader.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'subscribe', component: SubscriptionComponent },
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {
        path: 'finish-registration',
        component: FinishRegistrationProcessComponent,
      },
      { path: 'verify', component: VerificationLoaderComponent },
      { path: 'reset-password', component: CreateNewPasswordComponent }, 
      {path: 'forgot-password', component: ForgotPasswordComponent},
      { path: '**', component: LoginComponent },    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
