import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.scss'],
})
export class ManagerFormComponent {
  activatedTabIndex: any = 0;
  tabs: string[] = ['Organizational Unit', 'User Manager'];
  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
  }

  reports: any[] = [
    {
      image: '/assets/images/prof1.svg',
      name: 'Joe Perez',
      division: 'Camp Uganda',
      accessLevel: 'Super Admin',
      email: 'joeperez@gmail.com',
      assignRole: '/assets/images/zondicons.svg',
      status: 'Active',
    },
    {
      image: '/assets/images/prof2.svg',
      name: 'Bean Too',
      division: 'Camp Kenya',
      accessLevel: 'Team Member',
      email: 'toobean@gmail.com',
      assignRole: '/assets/images/zondicons.svg',
      status: 'invited',
    },
  ];
  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
}
