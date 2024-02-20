import { Component, ElementRef } from '@angular/core';
import gsap from 'gsap';

interface IFeature {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}
@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
})
export class FeaturesSectionComponent {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const textElements =
      this.elementRef.nativeElement.querySelectorAll('.animate-text');
    gsap.from(textElements, {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
    });

    const image = this.elementRef.nativeElement.querySelector('.animate-image');
    gsap.from(image, { opacity: 0, x: 100, duration: 5, ease: 'power2.out' });
  }

  features: IFeature[] = [
    {
      imageUrl: 'assets/images/greenhouse.svg',
      title: 'Analyze Your Emissions',
      description:
        'Effortlessly generate insightful carbon footprint report with no need of special skills or experience',
      url: '',
    },
    {
      imageUrl: 'assets/images/leaf-arrow.svg',
      title: 'Collaborate With Confidence',
      description:
        'Share and collaborate on Emissions data securely with your team and organization',
      url: '',
    },
    {
      imageUrl: 'assets/images/kanban.svg',
      title: 'Agile Sustainability',
      description:
        'With a ready-to-use database, you can quickly get started with carbon footprint calculation',
      url: '',
    },
    {
      imageUrl: 'assets/images/verified-check.svg',
      title: 'Credible Emission Data',
      description:
        'Calculation & reports are based on scientific research and audited methodology and emission factory',
      url: '',
    },
  ];
}
