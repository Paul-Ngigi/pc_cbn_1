import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppEnums } from 'src/app/enums/app.enums';
import { RolesEnums } from 'src/app/enums/roles.enums';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  show_button: Boolean = false;
  show_eye: Boolean = false;

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  signInLoading: boolean = false;
  loginFormGroup: FormGroup;
  @Output() authUser = new EventEmitter<IUser>();

  constructor(
    private _formBuilder: FormBuilder,
    public appService: AppService,
    private router: Router
  ) {
    this.loginFormGroup = _formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get Email(): FormControl {
    return this.loginFormGroup.get('email') as FormControl;
  }

  get Password(): FormControl {
    return this.loginFormGroup.get('password') as FormControl;
  }

  validateLoginFormGroup() {
    if (!this.loginFormGroup.valid) {
      const controls = this.loginFormGroup.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.appService.showToastMessage(
            AppEnums.ToastTypeWarning,
            'Field Required',
            name
          );
        }
      }
      return;
    }
    this.signIn();
  }

  signIn() {
    this.signInLoading = true;
    this.appService
      .makeAnyPostRequest(`${environment.BASE_URL}/auth`, {
        email: this.loginFormGroup.value.email,
        password: this.loginFormGroup.value.password,
      })
      .subscribe(
        (res) => {
          this.signInLoading = false;
          if (res.status == 'success') {
            if (res?.data) {
              const data = res?.data;
              const accessToken = data.accessToken;
              const userObj = data.userData.userData;
              const authUserObj = {
                ...userObj,
                accessToken: accessToken,
              };
              this.authUser.emit(authUserObj);
              this.appService.setAuthUser(authUserObj);
              this.appService.setSessionUser(authUserObj);
              const validateAccess = this.checkCompanyAdminRole(authUserObj);
              if (validateAccess) {
                this.router.navigate(['/dashboard']);
              }
              else {
                // this.appService.showToastMessage(
                //   AppEnums.ToastTypeWarning,
                //   'Unauthorized',
                //   'Please contact your admin for access'
                // )
                // return;
                this.router.navigate(['/account']);
              }
            }
          } else {
            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              res.status,
              res.msg
            );
          }
        },
        (error) => {
          console.log(error);
          this.signInLoading = false;
          this.appService.showToastMessage(
            AppEnums.ToastTypeError,
            'Error!',
            error?.msg
          );
        }
      );
  }

  checkCompanyAdminRole(user: IUser): boolean {        
    if (user.systemRole === RolesEnums.IsCompanyAdmin && user.company) {
      if (user.company != null && user.company != undefined) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
