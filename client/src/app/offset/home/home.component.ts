import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppEnums } from 'src/app/enums/app.enums';
import { IOrder } from 'src/app/interfaces/order.interface';
import { IPortfolio } from 'src/app/interfaces/portfolio.interface';
import { AppService } from 'src/app/services/app.service';
import { OffsetService } from 'src/app/services/offset.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activatedTabIndex: number = 0;
  tabs: string[] = ['Overview', 'Offset Projects', 'Orders'];
  activatedTab: string = this.tabs[this.activatedTabIndex];

  portfolios: IPortfolio[] = [];
  isLoading: boolean = false;
  isSearchLoading: boolean = false;
  searchChar: number = 0;
  searchFormGroup: FormGroup;

  constructor(
    private appService: AppService,
    private offsetService: OffsetService,
    private _formBuilder: FormBuilder
  ) {
    this.searchFormGroup = _formBuilder.group({
      searchInput: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getPortfolioDataByCountryandType();
  }

  getPortfolioDataByCountryandType() {
    this.isLoading = true;
    this.offsetService.getHomeProjects({ country: '', type: '' }).subscribe(
      (res) => {
        this.isLoading = false;
        if (res.status === 'success') {
          const response = res.data;
          this.portfolios = response.data;
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

  async searchByTypeOrCountry(query) {}

  submitSearch() {
    this.isSearchLoading = true;
    let inputValue: string = this.searchFormGroup.get('searchInput')?.value;
    this.searchByTypeOrCountry(inputValue);
    this.isSearchLoading = false;
  }

  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
    this.activatedTab = this.tabs[this.activatedTabIndex];
  }
}
