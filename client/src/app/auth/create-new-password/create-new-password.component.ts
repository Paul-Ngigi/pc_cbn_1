import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AppEnums } from 'src/app/enums/app.enums';
import { ApiResponse } from 'src/app/interfaces/api.response';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'],
})
export class CreateNewPasswordComponent {
  isLoading: boolean = false;
  userId!: string;
  token!: string;
  email!: string;
  createPasswordFormGroup: FormGroup;

  constructor(
    private appService: AppService,
    private router: Router,
    private _activedRouter: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.createPasswordFormGroup = _formBuilder.group({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    const localEmail: any = localStorage.getItem('email');
    let jsonE: any = JSON.parse(localEmail);
    this.email = jsonE.email;
    this.getRouterParams();
  }

  get Password(): FormControl {
    return this.createPasswordFormGroup.get('password') as FormControl;
  }

  getRouterParams() {
    this._activedRouter.queryParams.subscribe((param) => {
      if (param['id'] && param['token']) {
        this.userId = param['id'];
        this.token = param['token'];
      } else {
        this.appService.showToastMessage(
          AppEnums.ToastTypeWarning,
          'Warning',
          'Something went wrong. Please try again'
        );
      }
    });
  }

  validateRegisterFormGroup() {
    if (!this.createPasswordFormGroup.valid) {
      const controls = this.createPasswordFormGroup.controls;
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
    this.verifyEmail();
  }

  verifyEmail() {
    this.isLoading = true;
    this.appService
      .makeAnyPostRequest(`${environment.BASE_URL}/auth/reset-password`, {
        userId: this.userId,
        token: this.token,
        password: this.createPasswordFormGroup.get('password')?.value,
      })
      .pipe(switchMap(() => this.logIn()))
      .subscribe(
        (res) => {
          this.isLoading = false;
          if (res.status === 'success') {
            localStorage.clear();
            this.appService.setSessionUser(res.data);
            this.router.navigate(['/dashboard']);
          } else {
            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              res.status,
              res.msg
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

  logIn(): Observable<ApiResponse> {
    console.log(this.email);
    return this.appService.makeAnyPostRequest(`${environment.BASE_URL}/auth`, {
      email: this.email,
      password: this.createPasswordFormGroup.get('password')?.value,
    });
  }
}
