import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { emissionsList } from './emissions-list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { AppEnums } from 'src/app/enums/app.enums';

export interface IEmissionCard {
  scope: string;
  title: string;
  description: string;
  url: string;
}
@Component({
  selector: 'app-all-scopes',
  templateUrl: './all-scopes.component.html',
  styleUrls: ['./all-scopes.component.scss'],
})
export class AllScopesComponent {
  searchFormGroup: FormGroup;

  emissions: IEmissionCard[] = emissionsList;
  isSearchLoading: boolean = false;
  searchChar: number = 0;

  constructor(
    private router: Router,
    _formBuilder: FormBuilder,
    private appService: AppService
  ) {
    this.searchFormGroup = _formBuilder.group({
      searchInput: ['', Validators.required],
    });
  }

  goNext(idx: number) {
    const emission: IEmissionCard = emissionsList[idx];
    if (this.emissions[idx].url != null) {
      this.router.navigate([this.emissions[idx].url]);
    } else {
      this.router.navigate(['./coming-soon']);
    }
  }

  searchByScopeOrTitle(query) {
    const regex = new RegExp(query, 'i');
    this.emissions = emissionsList.filter(
      (item) => regex.test(item.scope) || regex.test(item.title)
    );
  }

  onSearchInput(event: any) {
    this.isSearchLoading = true;
    this.searchChar++;
    let inputValue: string = this.searchFormGroup.get('searchInput')?.value;
    if (inputValue.length < 2 && this.searchChar > 2) {
      this.searchChar = inputValue.length;
    } else if (inputValue.length > 2 && this.searchChar > 2) {
      this.searchByScopeOrTitle(inputValue);
    } else if (inputValue.length === 0) {
      this.emissions = emissionsList;
    }
    this.isSearchLoading = false;
  }

  submitSearch() {
    this.isSearchLoading = true;
    let inputValue: string = this.searchFormGroup.get('searchInput')?.value;
    this.searchByScopeOrTitle(inputValue);
    this.isSearchLoading = false;
  }
}
