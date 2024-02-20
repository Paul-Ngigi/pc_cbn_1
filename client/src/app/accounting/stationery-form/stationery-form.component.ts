import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppEnums } from 'src/app/enums/app.enums';
import { ApiResponse } from 'src/app/interfaces/api.response';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';
import { stationaryGuide } from '../guides';
import { trigger, transition, style, animate } from '@angular/animations';
import { IConfirm } from 'src/app/interfaces/confirm.details.interface';

export interface IStationaryCombustion {
  _id: string;
  fuelState: string;
  fuel: string;
  unit: string;
  factor: number;
  __v: number;
}

@Component({
  selector: 'app-stationery-form',
  templateUrl: './stationery-form.component.html',
  styleUrls: ['./stationery-form.component.scss'],
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
export class StationeryFormComponent {
  // Formgroup
  stationaryFormGroup: FormGroup;

  // Arrays
  emissionSources: string[] = ['Generators', 'Heaters', 'Boilers'].sort();
  equipmentNames: string[] = ['New Gen 2', 'Back Up Gen', 'New Gen'].sort();
  fuelTypes: string[] = [];
  fuelUnits: string[] = [];
  months: string[] = [];
  years: number[] = [];
  guides: string[] = stationaryGuide;
  confirmDetails: IConfirm[];

  // booleans
  guidesActive: boolean = false;
  accountingMonthActive: boolean = false;
  accountingYearActive: boolean = false;
  emissionSourceActive: boolean = false;
  equipmentNameActive: boolean = false;
  fuelTypeActive: boolean = false;
  fuelUnitActive: boolean = false;
  confirmModal: boolean = false;

  // touched fields bools
  accountingMonthTouched: boolean = false;
  accountingYearTouched: boolean = false;
  emissionSourceTouched: boolean = false;
  equipmentNameTouched: boolean = false;
  fuelTypeTouched: boolean = false;
  fuelUnitTouched: boolean = false;

  isLoading: boolean = false;

  // strings
  selectedMonth: string | null = null;
  selectedYear: number | null = null;
  selectedEmissionSource: string | null = null;
  selectedEquipmentName: string | null = null;
  selectedFuelType: string | null = null;
  selectedFuelUnit: string | null = null;
  companyId: string | null = null;
  c02kgEmitted: number | null = null;
  fuelState: string = 'Gaseous fuels';

  constructor(
    private appService: AppService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.stationaryFormGroup = _formBuilder.group({
      fuelAmount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchFuelTypes();
  }

  makeCommonRequests(fuelType: any): Observable<ApiResponse> {
    return this.appService.makeGetWithParamsRequest(
      `${environment.SCOPE_ONE_FUELS}/query`,
      fuelType
    );
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
      case 'emission_source':
        this.emissionSourceActive = !this.emissionSourceActive;
        this.emissionSourceTouched = true;
        break;
      case 'equiment_name':
        this.equipmentNameActive = !this.equipmentNameActive;
        this.equipmentNameTouched = true;
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

  submitEmissionSource(idx: number): void {
    // This method is used to capture user select for emission source
    this.selectedEmissionSource = this.emissionSources[idx];
    this.toggleView('emission_source');
  }

  submitEquipmentName(idx: number): void {
    // This method is used to capture user select for equipment name
    this.selectedEquipmentName = this.equipmentNames[idx];
    this.toggleView('equiment_name');
  }

  fetchFuelTypes(): void {
    this.isLoading = true;
    this.companyId = this.appService.getSessionUser()?.company;
    this.months = this.appService.getCalenderMonths();
    this.years = this.appService.getCalenderYears();
    this.appService
      .makeGetWithParamsRequest(`${environment.SCOPE_ONE_FUELS}/query`, {
        fuelState: this.fuelState,
      })
      .subscribe(
        (res) => {
          this.isLoading = false;
          if (res.status == 'success') {
            const response: IStationaryCombustion[] = res.data;
            response.map((item, idx) => {
              this.fuelTypes.push(item.fuel);
              this.fuelTypes = this.appService.removeDuplicates(this.fuelTypes);
            });
            this.fuelTypes = this.fuelTypes.sort();
            this.selectedFuelType = this.fuelTypes[0];
          } else {
            this.appService.showToastMessage(
              AppEnums.ToastTypeWarning,
              res.status,
              res.msg
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

  submitFuelType(idx: number): void {
    // This method is used to capture user select for equipment name
    this.selectedFuelType = this.fuelTypes[idx];
    this.toggleView('fuel_type');
    this.makeCommonRequests({
      fuelState: this.fuelState,
      fuel: this.selectedFuelType,
    }).subscribe(
      (res) => {
        this.isLoading = false;
        if (res.status == 'success') {
          const response: any[] = res.data;
          response.map((item, idx) => {
            this.fuelUnits.push(item.unit);
            this.fuelUnits = this.appService.removeDuplicates(this.fuelUnits);
          });
          this.fuelUnits = this.fuelUnits.sort();
          this.selectedFuelUnit = this.fuelUnits[0];
        } else {
          this.appService.showToastMessage(
            AppEnums.ToastTypeWarning,
            res.status,
            res.msg
          );
        }
      },
      (error) => {
        this.appService.showToastMessage(AppEnums.ToastTypeError, 'Error!', '');
        this.isLoading = false;
      }
    );
  }

  submitFuelUnit(idx: number): void {
    // This method is used to capture user select for equipment name
    this.selectedFuelUnit = this.fuelUnits[idx];
    this.toggleView('fuel_unit');
    this.makeCommonRequests({
      fuelState: this.fuelState,
      fuel: this.selectedFuelType,
      unit: this.selectedFuelUnit,
    }).subscribe(
      (res) => {
        this.isLoading = false;
        if (res.status == 'success') {
          const response: any[] = res.data;
          if (response.length > 0) {
            this.c02kgEmitted = response[0].factor;
          }
        } else {
          this.appService.showToastMessage(
            AppEnums.ToastTypeWarning,
            res.status,
            res.msg
          );
        }
      },
      (error) => {
        this.appService.showToastMessage(AppEnums.ToastTypeError, 'Error!', '');
        this.isLoading = false;
      }
    );
  }

  validateFields(field): boolean {
    if (field === null || field === undefined || field === '') {
      return false;
    }
    return true;
  }

  prepareConfirmObj() {
    if (
      this.stationaryFormGroup.valid &&
      // this.validateFields(this.selectedMonth) &&
      // this.validateFields(this.selectedYear) &&
      this.validateFields(this.selectedEmissionSource) &&
      this.validateFields(this.selectedEquipmentName) &&
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
          title: 'emission',
          items: [
            {
              field: 'emission source',
              value: this.selectedEmissionSource,
            },
            {
              field: 'emission name',
              value: this.selectedEquipmentName,
            },
            {
              field: 'total emissions',
              value: Number(this.stationaryFormGroup.get('fuelAmount').value) * Number(this.c02kgEmitted),
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
              value: this.stationaryFormGroup.get('fuelAmount').value,
            },            
          ],
        },
      ];
    }
  }

  submitAllFields(): void {
    this.isLoading = true;
    const payload = {
      emissionSource: this.selectedEmissionSource,
      description: this.selectedEquipmentName,
      fuelState: this.fuelState,
      fuelType: this.selectedFuelType,
      fuelUnit: this.selectedFuelUnit,
      fuelAmount: this.stationaryFormGroup.get('fuelAmount').value,
      c02kgEmitted: this.c02kgEmitted,
      CompanyId: this.companyId,
    };
    this.appService
      .makePostRequest(`${environment.SCOPE_ONE_FUELS}/save`, payload)
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
              res.status,
              res.msg
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
