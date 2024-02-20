import { Component } from '@angular/core';

@Component({
  selector: 'app-esg-reports',
  templateUrl: './esg-reports.component.html',
  styleUrls: ['./esg-reports.component.scss']
})
export class EsgReportsComponent {

  Esgs:{
    logo:string,
    text:string,
    link:string,
  }[]=[
    {
      logo:"/assets/images/CDP.png",
      text:"Carbon Disclosure Project",
      link:"#"
    },

    {
      logo:"/assets/images/TCFD.png",
      text:"Task Force  on Climate-Related Financial Disclosures",
      link:"#"
    },

    {
      logo:"/assets/images/GRI.png",
      text:"Global Reporting Intiative",
      link:"#"
    }
  ]

}
