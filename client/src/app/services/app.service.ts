import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { AppEnums } from '../enums/app.enums';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api.response';
import { IAuth } from '../interfaces/auth.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'bearer',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AppService {
  authUser!: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  setAuthUser(authUser: any) {
    // This function is used to set the authenticated user
    this.authUser = authUser;
  }

  getAuthUser() {
    // This function is used to get the authenticated user
    let userString: any = localStorage.getItem('user');
    let sessionUser: IAuth = JSON.parse(userString);
    return sessionUser;
  }

  setSessionUser(authUser: IAuth) {
    // This function is used to set the authenticated user in the session storage
    sessionStorage.setItem('user', JSON.stringify(authUser));
  }

  getSessionUser(): IAuth {
    // This function is used to get the authenticated user from the session storage
    let userString: any = sessionStorage.getItem('user');
    let sessionUser: IAuth = JSON.parse(userString);
    return sessionUser;
  }

  setLocalUser(authUser: any) {
    // This function is used to set the authenticated user in the local storage
    localStorage.setItem('user', JSON.stringify(authUser));
  }

  getLocalUser(): any {
    // This function is used to get the authenticated user from the local storage
    let userString: any = localStorage.getItem('user');
    let localUser: IUser = JSON.parse(userString);
    return localUser;
  }

  makeAnyGetRequest(fullUrl: string): Observable<ApiResponse> {
    // This function is used to make get requests
    return this.http.get<ApiResponse>(fullUrl);
  }

  makeGetRequest(fullUrl: string): Observable<ApiResponse> {
    // This function is used to make get requests to an api requiring authentication
    httpOptions.headers = httpOptions.headers.set(
      'Authorization',
      `Bearer ${this.getSessionUser()?.accessToken}`
    );
    return this.http.get<ApiResponse>(fullUrl, httpOptions);
  }

  makeGetWithParamsRequest(
    fullUrl: string,
    params: any
  ): Observable<ApiResponse> {
    // This function is used to make get requests to an api requiring authentication and have params
    const queryParams = new HttpParams({ fromObject: params });
    const urlWithParams = `${fullUrl}?${queryParams.toString()}`;
    httpOptions.headers = httpOptions.headers.set(
      'Authorization',
      `Bearer ${this.getSessionUser()?.accessToken}`
    );
    return this.http.get<ApiResponse>(urlWithParams, httpOptions);
  }

  makeAnyPostRequest(fullUrl: string, data: any): Observable<ApiResponse> {
    // This function is used to make post requests to an api requiring not authentication
    return this.http.post<ApiResponse>(fullUrl, data);
  }

  makePostRequest(fullUrl: string, data: any): Observable<ApiResponse> {
    // This function is used to make post requests to an api requiring  authentication
    if (this.getSessionUser()?.accessToken) {
      httpOptions.headers = httpOptions.headers.set(
        'Authorization',
        `Bearer ${this.getSessionUser()?.accessToken}`
      );
    } else {
      httpOptions.headers = httpOptions.headers.set(
        'Authorization',
        `Bearer ${this.getAuthUser()?.accessToken}`
      );
    }

    return this.http.post<ApiResponse>(fullUrl, data, httpOptions);
  }

  removeDuplicates(arr: any) {
    // This function is used to remove duplicated
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  public showToastMessage(
    alertType: AppEnums,
    alertTitle: string,
    alertMessage: string
  ) {
    switch (alertType) {
      case AppEnums.ToastTypeSuccess:
        return this.toastr.success(alertMessage, alertTitle);
        break;
      case AppEnums.ToastTypeInfo:
        return this.toastr.info(alertMessage, alertTitle);
        break;
      case AppEnums.ToastTypeWarning:
        return this.toastr.warning(alertMessage, alertTitle);
        break;
      case AppEnums.ToastTypeError:
        return this.toastr.error(alertMessage, alertTitle);
        break;
      default:
        return null;
        break;
    }
  }

  getCalenderDays(): string[] {
    const days: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return days;
  }

  getCalenderMonths(): string[] {
    const months: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months;
  }

  getCalenderYears(): number[] {
    const currentDate = new Date();
    const currentYear: number = currentDate.getFullYear() + 4;
    const yearsList: number[] = [];

    for (let i = 30; i >= 4; i--) {
      yearsList.push(currentYear - i);
    }

    return yearsList.reverse();
  }
}
