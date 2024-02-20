import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AppEnums } from 'src/app/enums/app.enums';
import { ApiResponse } from 'src/app/interfaces/api.response';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-verification-loader',
  templateUrl: './verification-loader.component.html',
  styleUrls: ['./verification-loader.component.scss'],
})
export class VerificationLoaderComponent {
  name!: string;
  userId!: string;
  token!: string;
  user: IUser;
  isLoading: boolean = true;

  constructor(
    private appService: AppService,
    private router: Router,
    private _activedRouter: ActivatedRoute
  ) {
    this.user = appService.getLocalUser();
    this.name = this.user.name.split(' ')[0];
    this.getRouterParams();
  }

  getRouterParams() {
    this._activedRouter.queryParams.subscribe((param) => {
      if (param['id'] && param['token']) {
        this.userId = param['id'];
        this.token = param['token'];
        this.verifyEmail(this.userId, this.token);
      } else {
        this.appService.showToastMessage(
          AppEnums.ToastTypeWarning,
          'Warning',
          'Something went wrong. Please try again'
        );
      }
    });
  }

  verifyEmail(userId: string, token: string) {
    this.appService
      .makeAnyPostRequest(`${environment.BASE_URL}/auth/verify-email`, {
        userId: userId,
        token: token,
      })
      .pipe(switchMap(() => this.logIn()))
      .subscribe(
        (res) => {
          if (res.status === 'success') {
            this.appService.showToastMessage(
              AppEnums.ToastTypeSuccess,
              res.status,
              ""
            );
            localStorage.clear();
            console.log(res)
            this.appService.setLocalUser(res.data);
            this.router.navigate(['/auth']);
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
    return this.appService.makeAnyPostRequest(`${environment.BASE_URL}/auth`, {
      email: this.user.email,
      password: this.user.password,
    });
  }
}
