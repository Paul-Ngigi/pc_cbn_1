import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-initiative-dropdown',
  templateUrl: './initiative-dropdown.component.html',
  styleUrls: ['./initiative-dropdown.component.scss']
})
export class InitiativeDropdownComponent {

  @Output() initiativeEvent = new EventEmitter<String>();

  initiatives: string[] = ['Night Power Lights Out', 'EV leasing fleet', 'Reduce air travel'];

  onInitiativeChange(selectedInitiative: string) {
    this.initiativeEvent.emit(selectedInitiative);
  }

}
