import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-create',
  templateUrl: './upload-create.component.html',
  styleUrls: ['./upload-create.component.scss']
})
export class UploadCreateComponent {
  upload() {
  
  }

  create() {
 
  }
  activatedTabIndex: any = 0;
  tabs: string[] = ['Vehicles', 'Reports', 'Add Fleet'];  
  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
  }  
}


