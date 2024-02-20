import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppEnums } from 'src/app/enums/app.enums';
import { IPortfolio } from 'src/app/interfaces/portfolio.interface';
import { IProject } from 'src/app/interfaces/project.interface';
import { AppService } from 'src/app/services/app.service';
import { OffsetService } from 'src/app/services/offset.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  projectId: string;
  activatedTabIndex: any = 0;
  tabs: string[] = [
    'Project Details',
    'Carbon Impact & Perfomance',
    'Co-benefit Impact',
    'Price Insights',
  ];
  projectDetails: IPortfolio;
  description: any;
  sdgs: any;
  inventory: any;
  location: any;
  isLoading: boolean = false;
  portfolios: IPortfolio[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private offsetService: OffsetService,
    private appService: AppService
  ) {
    this.activatedRouter.paramMap.subscribe((param) => {
      this.projectId = param['params']['id'];
      this.getAllPortfolioDataByCountryandType(this.projectId);
    });
  }

  selectedOption: string | undefined;

  options = ['Option 1', 'Option 2', 'Option 3'];

  selectedValue: string;

  onChange() {
    console.log('Selected value: ', this.selectedValue);
  }

  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
  }

  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  toggleItemEmitter($event: boolean) {
    console.log($event);
    this.isOpen = $event;
  }

  getAllPortfolioDataByCountryandType(id: string) {
    this.isLoading = true;
    this.offsetService.getHomeProjects({ country: '', type: '' }).subscribe(
      (res) => {
        this.isLoading = false;
        if (res.status === 'success') {
          const response = res.data;
          this.portfolios = response.data;
          this.portfolios.map((item) => {
            if (item.id === id) {
              this.projectDetails = item;
              this.description = {
                header: 'More Project Details',
                description: this.projectDetails.description,
              };
              this.sdgs = {
                header: 'What SDG does this project solve?',
                sdgs: this.projectDetails.sdgs,
              };
              this.inventory = {
                header: 'Previous Pricing Insights?',
                inventory: this.projectDetails.inventory,
              };
              this.location = {
                header: 'Where is the project located?',
                location: {
                  longitude: this.projectDetails.longitude,
                  latitude: this.projectDetails.latitude,
                },
              };
            }
          });
        } else {
          this.appService.showToastMessage(
            AppEnums.ToastTypeWarning,
            res.status,
            res.msg
          );
        }
      },
      (error) => {
        this.isLoading = false;
        this.appService.showToastMessage(AppEnums.ToastTypeError, 'Error!', '');
      }
    );
  }
}
