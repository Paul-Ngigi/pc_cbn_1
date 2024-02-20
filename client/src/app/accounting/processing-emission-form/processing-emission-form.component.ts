import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppEnums } from 'src/app/enums/app.enums';
import { ApiResponse } from 'src/app/interfaces/api.response';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';
import { stationaryGuide } from '../guides';
import { IStationaryCombustion } from '../stationery-form/stationery-form.component';
import { IConfirm } from 'src/app/interfaces/confirm.details.interface';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-processing-emission-form',
  templateUrl: './processing-emission-form.component.html',
  styleUrls: ['./processing-emission-form.component.scss'],
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
export class ProcessingEmissionFormComponent {
  // Formgroup
  processEmissionFormGroup: FormGroup;

  // Arrays'Carbo,'Carbon'
  emissionSources: string[] = [
    'Chemical Reactions',
    'Processing Emissions',
    'Industrial Equipment',
  ].sort();
  emissionNames: string[] = ['New Gen 2', 'Back Up Gen', 'New Gen'].sort();
  wasteGases: string[] = ['Carbon', 'Methane', 'Sulphide OX'];
  fuelUnits: string[] = ['Litres', 'Tonnes', 'Giga Tonnes'];
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

  constructor(
    private appService: AppService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.processEmissionFormGroup = _formBuilder.group({
      fuelAmount: ['', Validators.required],
    });
    this.companyId = this.appService.getSessionUser()?.company;
    this.months = this.appService.getCalenderMonths();
    this.years = this.appService.getCalenderYears();
  }

  ngOnInit(): void {}

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
    this.selectedEquipmentName = this.emissionNames[idx];
    this.toggleView('equiment_name');
  }

  submitFuelType(idx: number): void {
    // This method is used to capture user select for equipment name
    this.selectedFuelType = this.wasteGases[idx];
    this.toggleView('fuel_type');
  }

  submitFuelUnit(idx: number): void {
    // This method is used to capture user select for equipment name
    this.selectedFuelUnit = this.fuelUnits[idx];
    this.toggleView('fuel_unit');
  }

  validateFields(field): boolean {
    if (field === null || field === undefined || field === '') {
      return false;
    }
    return true;
  }

  prepareConfirmObj() {
    if (
      this.processEmissionFormGroup.valid &&
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
              value: this.processEmissionFormGroup.get('fuelAmount').value,
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
      emissionName: this.selectedEquipmentName,
      wasteGas: this.selectedFuelType,
      unit: this.selectedFuelUnit,
      gasAmount: this.processEmissionFormGroup.get('fuelAmount').value,
      CompanyId: this.companyId,
    };
    this.appService
      .makePostRequest(
        `${environment.SCOPE_ONE_PROCESS_EMISSION}/save`,
        payload
      )
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
