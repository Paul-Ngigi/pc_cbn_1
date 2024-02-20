import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { RolesEnums } from '../enums/roles.enums';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}
  canActivate() {
    // return true
    if (
      this.appService.getSessionUser()?.accessToken &&
      this.appService.getSessionUser()?.systemRole ===
        RolesEnums.IsCompanyAdmin &&
      this.appService.getSessionUser()?.company
    ) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
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
