import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './interfaces/user.interface';
import { AppService } from './services/app.service';
import { IAuth } from './interfaces/auth.interface';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {  
  title = 'peercarbon';    
  isSideNavCollapsed = false;
  screenWidth = 0;
  isLandingLayout: boolean = true;
  isLoggedIn: boolean = false;
  authUser!: IAuth;

  constructor(private appService: AppService) {    
  }

  ngOnInit(): void {
    this.authUser = this.appService.getSessionUser();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
