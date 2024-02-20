import { Component, Input } from '@angular/core';

interface Faqs {
  header: string;
  description: string;
  open: boolean;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  isOpen = false;
  @Input() description: any;
  @Input() sdgs: any;
  @Input() inventory: any;
  @Input() location: any;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  expandedIndex: number | null = null;

  toggleItem(): void {
    this.isOpen = !this.isOpen;
  }
}
