import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { AppEnums } from 'src/app/enums/app.enums';
import { environment } from 'src/environment/environment';
import { IUser } from 'src/app/interfaces/user.interface';
import { IAuth } from 'src/app/interfaces/auth.interface';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  companyForm: FormGroup;
  signInLoading: boolean = false;
  authUser!: IAuth;

  constructor(
    private _formBuilder: FormBuilder,
    public appService: AppService,
    private router: Router
  ) {
    this.authUser = this.appService.getLocalUser() ;
    this.updateForm();
  }

  get companyName(): FormControl {
    return this.companyForm.get('companyName') as FormControl;
  }
  get description(): FormControl {
    return this.companyForm.get('description') as FormControl;
  }
  get primaryEmail(): FormControl {
    return this.companyForm.get('primaryEmail') as FormControl;
  }
  get corporate(): FormControl {
    return this.companyForm.get('corporate') as FormControl;
  }
  get contact(): FormControl {
    return this.companyForm.get('phoneNo') as FormControl;
  }
  get location(): FormControl {
    return this.companyForm.get('location') as FormControl;
  }

  submitForm() {
    if (!this.companyForm.valid) {
      const controls = this.companyForm.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.appService.showToastMessage(
            AppEnums.ToastTypeWarning,
            'Field Required',
            name
          );
        }
      }

      for (const control in this.companyForm.controls) {
        this.companyForm.controls[control].markAsTouched();
      }
      return;
    }

    this.signInLoading = true;
    this.appService
      .makePostRequest(
        `${environment.BASE_URL}/company`,
        this.companyForm.value
      )
      .subscribe(
        (apiResponse) => {
          this.signInLoading = false;
          if (apiResponse.status === 'success') {
            this.appService.showToastMessage(
              AppEnums.ToastTypeSuccess,
              'Success',

              'Company registered successfully.'
            );
            this.appService.setSessionUser(this.authUser);
            this.router.navigate(['/dashboard']);
          } else {
            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              'Error',
              apiResponse.msg || 'Unexpected error occurred.'
            );
          }
        },
        (error) => {
          this.signInLoading = false;
          this.appService.showToastMessage(
            AppEnums.ToastTypeError,
            'Network Error',
            'An error occurred while sending your request. Please try again.'
          );
        }
      );
  }

  updateForm(): FormGroup {
    console.log(this.authUser)
    return (this.companyForm = this._formBuilder.group({
      companyName: ['', Validators.required],
      description: ['', Validators.required],
      primaryEmail: ['', [Validators.required, Validators.email]],
      corporate: ['', Validators.required],
      phoneNo: ['', Validators.required],
      location: ['', Validators.required],
      user: [
        this.authUser ? this.authUser!.userData.userData._id : '',
        Validators.required,
      ],
    }));
  }
}
