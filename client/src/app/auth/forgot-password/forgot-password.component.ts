import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppEnums } from 'src/app/enums/app.enums';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  resetPasswordFormGroup: FormGroup;
  isLoading: boolean = false;

  constructor(
    private appService: AppService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.resetPasswordFormGroup = _formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  validateForm() {
    if (!this.resetPasswordFormGroup.valid) {
      this.appService.showToastMessage(
        AppEnums.ToastTypeWarning,
        'Field Required',
        'Email'
      );
      return;
    }
    this.resetPassword();
  }
  
  resetPassword() {
    this.isLoading = true;
    this.appService
      .makeAnyPostRequest(
        `${environment.BASE_URL}/auth/request-password-reset`,
        {
          email: this.resetPasswordFormGroup.get('email')?.value,
        }
      )
      .subscribe(
        (apiResponse) => {
          this.isLoading = false;
          if (apiResponse.status === 'success') {
            localStorage.setItem(
              'email',
              JSON.stringify({
                email: this.resetPasswordFormGroup.get('email')?.value,
              })
            );
            this.appService.showToastMessage(
              AppEnums.ToastTypeSuccess,
              apiResponse.msg,
              'Check your email for reset link'
            );
          } else {
            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              apiResponse.status,
              apiResponse.msg
            );
          }
        },
        
        (error) => {
          this.isLoading = false;
          this.appService.showToastMessage(
            AppEnums.ToastTypeError,
            'Error',
            'An error was encounted while processing your request.'
          );
        }
      );
  }
}
