import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss'],
})
export class ReportTableComponent {
  reports: any[] = [
    { name: 'Emmission Analysis', size: '10KB', date: 'Oct 64', kind: 'DOCX' },
    { name: 'Emmission Analysis', size: '10KB', date: 'Oct 64', kind: 'DOCX' },
    { name: 'Emmission Analysis', size: '10KB', date: 'Oct 64', kind: 'DOCX' },
    { name: 'Emmission Analysis', size: '10KB', date: 'Oct 64', kind: 'DOCX' },
    { name: 'Emmission Analysis', size: '10KB', date: 'Oct 64', kind: 'DOCX' },
  ];
  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {    
  }

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
