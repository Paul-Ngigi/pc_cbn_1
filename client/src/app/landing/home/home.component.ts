import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  featuresArray:{
    // icon:string,
    text:string
  }[]=[
    {
      // icon:"/assets/svgs/landingvector.svg",
      text:"Simplify data management"
    },

    {
      // icon:"/assets/svgs/landingvector.svg",
      text:"Sustainable growth"
    },
    {
      // icon:"/assets/svgs/landingvector.svg",
      text:"Streamlined Collaboration"
    },
    {
      // icon:"/assets/svgs/landingvector.svg",
      text:"User Role Aligned"
    },
    {
      // icon:"/assets/svgs/landingvector.svg",
      text:"Multi-organization reporting"
    },
    {
      // icon:"/assets/svgs/landingvector.svg",
      text:"Employee Offsetting"
    },

  ]


  paymentOptions:string[]=[
    "14 days Free Trial, No credit card required",
    "Complete Company Footprint Calculator",
    "View-Only report and One-User",
    "20% Increase in business",
    "View-Only report and One-User",
    "Complete Company Footprint Calculator"

  ]

  ngOnInit() {}




  
}
