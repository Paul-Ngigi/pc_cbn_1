import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/interfaces/api.response';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';
import { IStationaryCombustion } from '../stationery-form/stationery-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppEnums } from 'src/app/enums/app.enums';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { fleetGuide } from '../guides';

interface IItems {
  field: string;
  value: any;
}
interface IConfirm {
  title: string;
  items: IItems[];
}
@Component({
  selector: 'app-fleet-form',
  templateUrl: './fleet-form.component.html',
  styleUrls: ['./fleet-form.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('350ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class FleetFormComponent {
  fleetFormGroup: FormGroup;

  // Arrays
  fleetTypes: string[] = [
    '',
    'Vehicles',
    'Owned Machines',
    'Motorbikes',
  ].sort();
  fleetNames: string[] = [''];
  fleetCategories: string[] = [''];
  fleetWeights: string[] = ['', 'Mid Sized', 'Heavy Size', 'Small Size'].sort();
  fuelTypes: string[] = [''];
  fuelUnits: string[] = [''];
  guides: string[] = fleetGuide;
  months: string[] = [];
  years: number[] = [];
  confirmDetails: IConfirm[];

  // booleans
  guidesActive: boolean = false;
  accountingMonthActive: boolean = false;
  accountingYearActive: boolean = false;
  fleetTypeActive: boolean = false;
  fleetNameActive: boolean = false;
  fleetCategoryActive: boolean = false;
  fleetWeightActive: boolean = false;
  fuelTypeActive: boolean = false;
  fuelUnitActive: boolean = false;
  confirmModal: boolean = false;

  // touched fields bools
  accountingMonthTouched: boolean = false;
  accountingYearTouched: boolean = false;
  fleetTypeTouched: boolean = false;
  fleetNameTouched: boolean = false;
  fleetCategoryTouched: boolean = false;
  fleetWeightTouched: boolean = false;
  fuelTypeTouched: boolean = false;
  fuelUnitTouched: boolean = false;

  isLoading: boolean = false;

  // strings
  selectedMonth: string | null = null;
  selectedYear: number | null = null;
  selectedFleetType: string = this.fleetTypes[0];
  selectedFleetName: string | null = null;
  selectedFleetCategory: string | null = null;
  selectedFleetWeight: string = this.fleetWeights[0];
  selectedFuelType: string | null = null;
  selectedFuelUnit: string | null = null;
  companyId: string | null = null;
  c02kgEmitted: number | null = 1.656;

  constructor(
    private appService: AppService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.fleetFormGroup = _formBuilder.group({
      fuelAmount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchFleetNames();
  }

  validateFields(field): boolean {
    if (field != null && field != undefined && field != '') {
      return true;
    }
    return false;
  }

  toggleView(toggleItem): void {
    switch (toggleItem) {
      case 'guide':
        this.guidesActive = !this.guidesActive;
        break;
      case 'accounting_month':
        this.accountingMonthActive = !this.accountingMonthActive;
        this.accountingMonthTouched = true;
        break;
      case 'accounting_year':
        this.accountingYearActive = !this.accountingYearActive;
        this.accountingYearTouched = true;
        break;
      case 'fleet_type':
        this.fleetTypeActive = !this.fleetTypeActive;
        this.fleetTypeTouched = true;
        break;
      case 'fleet_name':
        this.fleetNameActive = !this.fleetNameActive;
        this.fleetNameTouched = true;
        break;
      case 'fleet_category':
        this.fleetCategoryActive = !this.fleetCategoryActive;
        this.fleetCategoryTouched = true;
        break;
      case 'fleet_weight':
        this.fleetWeightActive = !this.fleetWeightActive;
        this.fleetWeightTouched = true;
        break;
      case 'fuel_type':
        this.fuelTypeActive = !this.fuelTypeActive;
        this.fuelTypeTouched = true;
        break;
      case 'fuel_unit':
        this.fuelUnitActive = !this.fuelUnitActive;
        this.fuelUnitTouched = true;
        break;
      default:
        return;
    }
  }

  submitAccountingMonth(idx: number): void {
    // This method is used to capture user select for emission source
    this.selectedMonth = this.months[idx];
    this.toggleView('accounting_month');
  }

  submitAccountingYear(idx: number): void {
    // This method is used to capture user select for emission source
    this.selectedYear = this.years[idx];
    this.toggleView('accounting_year');
  }

  submitFleetType(idx: number): void {
    this.selectedFleetType = this.fleetTypes[idx];
    this.toggleView('fleet_type');
  }

  submitFleetName(idx: number): void {
    this.selectedFleetName = this.fleetNames[idx];
    this.makeFleetRequests({
      TypeLevel1: this.selectedFleetName,
    }).subscribe((res) => {
      if (res.status == 'success') {
        const response: any[] = res.data;
        if (response.length > 0) {
          response.map((item, idx) => {
            this.fleetCategories.push(item.TypeLevel2);
            this.fleetCategories = this.appService.removeDuplicates(
              this.fleetCategories
            );
          });
          this.fleetCategories = this.fleetCategories.sort();
          this.selectedFleetCategory = this.fleetCategories[0];
        }
      }
    });
    this.toggleView('fleet_name');
  }

  submitFleetCategory(idx: number): void {
    this.selectedFleetCategory = this.fleetCategories[idx];
    this.makeFleetRequests({
      TypeLevel1: this.selectedFleetName,
      TypeLevel2: this.selectedFleetCategory,
    }).subscribe((res) => {
      if (res.status == 'success') {
        const response: any[] = res.data;
        if (response.length > 0) {
          response.map((item, idx) => {
            this.fuelTypes.push(item.fuel);
            this.fuelTypes = this.appService.removeDuplicates(this.fuelTypes);
          });
          this.fuelTypes = this.fuelTypes.sort();
          this.selectedFuelType = this.fuelTypes[0];
        }
      }
    });
    this.toggleView('fleet_category');
  }

  submitFleetWeight(idx: number): void {
    this.selectedFleetWeight = this.fleetWeights[idx];
    this.toggleView('fleet_weight');
  }

  submitFuelType(idx: number): void {
    // This method is used to capture user select for equipment name
    this.selectedFuelType = this.fuelTypes[idx];
    this.toggleView('fuel_type');
    this.makeFleetRequests({
      TypeLevel1: this.selectedFleetName,
      TypeLevel2: this.selectedFleetCategory,
      fuel: this.selectedFuelType,
    }).subscribe((res) => {
      const response: any[] = res.data;
      response.map((item, idx) => {
        this.fuelUnits.push(item.unit);
        this.fuelUnits = this.appService.removeDuplicates(this.fuelUnits);
      });
      this.fuelUnits = this.fuelUnits.sort();
      this.selectedFuelUnit = this.fuelUnits[0];
    });
  }

  submitFuelUnit(idx: number): void {
    // This method is used to capture user select for equipment name
    this.selectedFuelUnit = this.fuelUnits[idx];
    this.toggleView('fuel_unit');
    this.makeFleetRequests({
      TypeLevel1: this.selectedFleetName,
      TypeLevel2: this.selectedFleetCategory,
      fuel: this.selectedFuelType,
      unit: this.fuelUnits,
    }).subscribe((res) => {
      const response: any[] = res.data;
      if (response.length > 0) {
        this.c02kgEmitted = response[0].factor;
      }
    });
  }

  fetchFleetNames() {
    this.isLoading = true;
    this.companyId = this.appService.getSessionUser()?.company;
    this.months = this.appService.getCalenderMonths();
    this.years = this.appService.getCalenderYears();
    this.appService
      .makeGetRequest(`${environment.SCOPE_ONE_VEHICLES}/query`)
      .subscribe(
        (res) => {
          this.isLoading = false;
          if (res.status == 'success') {
            const response: any[] = res.data;
            if (response.length > 0) {
              response.map((item, idx) => {
                this.fleetNames.push(item);
                this.fleetNames.sort();
                this.selectedFleetName = this.fleetNames[0];
              });
            } else {
              this.appService.showToastMessage(
                AppEnums.ToastTypeWarning,
                res.status,
                res.msg
              );
            }
          }
        },
        (error) => {
          this.appService.showToastMessage(
            AppEnums.ToastTypeError,
            'Error!',
            ''
          );
          this.isLoading = false;
        }
      );
  }

  makeFleetRequests(params: any): Observable<ApiResponse> {
    return this.appService.makeGetWithParamsRequest(
      `${environment.SCOPE_ONE_VEHICLES}/query`,
      params
    );
  }

  prepareConfirmObj() {
    if (
      this.fleetFormGroup.valid &&
      this.validateFields(this.selectedFleetCategory) &&
      this.validateFields(this.selectedFleetName) &&
      this.validateFields(this.selectedFleetType) &&
      this.validateFields(this.selectedFuelType) &&
      this.validateFields(this.selectedFuelUnit)
    ) {
      this.confirmModal = true;
      this.confirmDetails = [
        {
          title: 'accounting period',
          items: [
            {
              field: 'month',
              value: this.selectedMonth,
            },
            {
              field: 'year',
              value: this.selectedYear,
            },
          ],
        },
        {
          title: 'fleet',
          items: [
            {
              field: 'fleet type',
              value: this.selectedFleetType,
            },
            {
              field: 'fleet name',
              value: this.selectedFleetName,
            },
          ],
        },
        {
          title: 'fuel',
          items: [
            {
              field: 'fuel type',
              value: this.selectedFuelType,
            },
            {
              field: 'fuel unit',
              value: this.selectedFuelUnit,
            },
            {
              field: 'fuel amount',
              value: this.fleetFormGroup.get('fuelAmount').value,
            },
          ],
        },
      ];
    }
  }

  submitAllFields() {
    this.isLoading = true;
    const payload = {
      typeLevel2: this.selectedFleetCategory,
      typeLevel1: this.selectedFleetName,
      fuelType: this.selectedFuelType,
      fuelAmount: this.fleetFormGroup.get('fuelAmount').value,
      c02kgEmitted: this.c02kgEmitted,
      CompanyId: this.companyId,
    };
    this.appService
      .makePostRequest(`${environment.SCOPE_ONE_VEHICLES}/save`, payload)
      .subscribe(
        (res) => {
          this.isLoading = false;
          if (res.status == 'success') {
            this.appService.showToastMessage(
              AppEnums.ToastTypeSuccess,
              'Success!',
              ''
            );
            this.router.navigate(['accounting']);
          } else {
            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              '',
              'Warning!'
            );
          }
        },
        (error) => {
          this.appService.showToastMessage(
            AppEnums.ToastTypeError,
            'Error!',
            ''
          );
          this.isLoading = false;
        }
      );
  }

  cancel(): void {
    this.router.navigate(['accounting']);
  }

  edit(): void {
    this.confirmModal = false;
  }
}
