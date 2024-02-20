import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ISideNav } from 'src/app/interfaces/sidenav.interface';
import { navItems } from './nav-items';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { Location } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
import { AppEnums } from 'src/app/enums/app.enums';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SideNavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData: ISideNav[] = navItems;

  constructor(
    private router: Router,
    private location: Location,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['']);
  }

  isCurrentPath(path: string): boolean {
    return this.location.path() === path;
  }

  navigatePath(url: string) {
    if (url != null) {
      this.router.navigate([url]);
    } else {
      this.router.navigate(['/coming-soon']);
    }
  }
}
