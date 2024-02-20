import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

interface Tab {
  label: string;
  active: boolean;
}
@Component({
  selector: 'app-reusable-slidable-tab',
  templateUrl: './reusable-slidable-tab.component.html',
  styleUrls: ['./reusable-slidable-tab.component.scss'],
})
export class ReusableSlidableTabComponent {
  view_tab = 'tab_0';
  @Input() tabs: string[] = [];
  @Output() tabIndexEmitter = new EventEmitter<number>();

  changeTab = (tab: string) => {
    let tabIdx = Number(tab.split('_')[1]);
    this.view_tab = tab;
    this.tabIndexEmitter.emit(tabIdx);
  };
}
