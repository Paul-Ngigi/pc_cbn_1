import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AppEnums } from 'src/app/enums/app.enums';
import { ApiResponse } from 'src/app/interfaces/api.response';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerIsLoading: boolean = false;
  registerFormGroup: FormGroup;
  unmatchedPass: boolean = false;
  isRegistered: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    public appService: AppService,
    private router: Router
  ) {
    this.registerFormGroup = _formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      roleInCompany: ['', Validators.required],
      terms: ['', Validators.required],
    });
  }

  get Email(): FormControl {
    return this.registerFormGroup.get('email') as FormControl;
  }

  get Name(): FormControl {
    return this.registerFormGroup.get('name') as FormControl;
  }

  get Role(): FormControl {
    return this.registerFormGroup.get('roleInCompany') as FormControl;
  }

  get Password(): FormControl {
    return this.registerFormGroup.get('password') as FormControl;
  }

  get ConfirmPassword(): FormControl {
    return this.registerFormGroup.get('confirmPassword') as FormControl;
  }

  get Terms(): FormControl {
    return this.registerFormGroup.get('terms') as FormControl;
  }

  validateConfPass($event: any): void {
    const password = this.registerFormGroup.get('password')?.value;
    if ($event.target.value !== password) {
      this.unmatchedPass = true;
    } else {
      this.unmatchedPass = false;
    }
  }

  validateRegisterFormGroup() {
    if (!this.registerFormGroup.valid) {
      const controls = this.registerFormGroup.controls;
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
    this.signUp();
  }

  signUp() {
    this.registerIsLoading = true;
    this.appService
      .makeAnyPostRequest(`${environment.BASE_URL}/users/company-admin`, {
        name: this.registerFormGroup.value.name,
        email: this.registerFormGroup.value.email,
        password: this.registerFormGroup.value.password,
        roleInCompany: this.registerFormGroup.value.roleInCompany,
      })
      .subscribe(
        (apiResponse) => {
          this.registerIsLoading = false;
          if (apiResponse.status === 'success') {
            this.appService.setLocalUser({
              name: this.registerFormGroup.value.name,
              email: this.registerFormGroup.value.email,
              password: this.registerFormGroup.value.password,
              roleInCompany: this.registerFormGroup.value.roleInCompany,
            });
            this.isRegistered = true;
          } else {
            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              apiResponse.status,
              apiResponse.msg
            );
          }
        },
        (error) => {
          this.registerIsLoading = false;
          this.appService.showToastMessage(
            AppEnums.ToastTypeError,
            'Error',
            'An error was encounted while processing your request.'
          );
        }
      );
  }

  logIn(res: ApiResponse): Observable<ApiResponse> {
    return this.appService.makeAnyPostRequest(`${environment.BASE_URL}/auth`, {
      email: this.registerFormGroup.value.email,
      password: this.registerFormGroup.value.password,
    });
  }
}
