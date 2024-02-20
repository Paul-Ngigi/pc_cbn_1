import { Component } from '@angular/core';

interface Faqs {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  toggleItems: Faqs[] = [
    {
      question: 'What is SaaStain?',
      answer:
        'Saastain is an innovative Climate Management & Tracking Platform that helps businesses measure, manage, and reduce carbon emissions through advanced technology.',
      open: false
    },

    {
      question: 'what are the key features of Saastain?',
      answer:
        'Saastain is an innovative Climate Management & Tracking Platform that helps businesses measure, manage, and reduce carbon emissions through advanced technology.',
        open: false
    },

    {
      question: 'How Secure is my Data with Saasstain software?',
      answer:
        'Saastain is an innovative Climate Management & Tracking Platform that helps businesses measure, manage, and reduce carbon emissions through advanced technology.',
        open: false
    },

    {
      question: 'Can Saastain be tailored to different industries?',
      answer:
        'Saastain is an innovative Climate Management & Tracking Platform that helps businesses measure, manage, and reduce carbon emissions through advanced technology.',
        open: false
    },

    {
      question: 'How does Sustain compare to other competitors?',
      answer:
        'Saastain is an innovative Climate Management & Tracking Platform that helps businesses measure, manage, and reduce carbon emissions through advanced technology.',
        open: false
    },

    {
      question: 'Any benefit of using blockchain technology?',
      answer:
        'Saastain is an innovative Climate Management & Tracking Platform that helps businesses measure, manage, and reduce carbon emissions through advanced technology.',
        open: false
    },
  ];

  

  expandedIndex: number | null = null; // Track the currently expanded item

  toggleItem(index: number): void {
   this.toggleItems[index].open = !this.toggleItems[index].open;
  }
}
