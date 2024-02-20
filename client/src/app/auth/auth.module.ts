import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FinishRegistrationProcessComponent } from './finish-registration-process/finish-registration-process.component';
import { VerificationLoaderComponent } from './verification-loader/verification-loader.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    SubscriptionComponent,
    FinishRegistrationProcessComponent,
    VerificationLoaderComponent,
    CreateNewPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
