import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { AppEnums } from 'src/app/enums/app.enums';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {

  joinWaitListFormGroup: FormGroup;
  isLoading: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private _formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService,
    ) {
      this.joinWaitListFormGroup = _formBuilder.group({
        name: [''],
        email: ['', [Validators.required, Validators.email]],
      });
    }

    validateForm() {
      if (!this.joinWaitListFormGroup.valid) {
        this.appService.showToastMessage(
          AppEnums.ToastTypeWarning,
          'Field Required',
          'name',
        );
        this.appService.showToastMessage(
          AppEnums.ToastTypeWarning,
          'Field Required',
          'email',
        );
        return;
      }
      this.resetPassword();
    }

    resetPassword() {
      this.isLoading = true;
      this.appService
        .makeAnyPostRequest(
          `${environment.BASE_URL}/waitlist`,
          {
            name: this.joinWaitListFormGroup.get('name')?.value,
            email: this.joinWaitListFormGroup.get('email')?.value,
          }
        )
        .subscribe(
          (apiResponse) => {
            this.isLoading = false;
            if (apiResponse.status === 'success') {
              const userData = {
                name: this.joinWaitListFormGroup.get('name')?.value,
                email: this.joinWaitListFormGroup.get('email')?.value,
              };
        
              localStorage.setItem('userData', JSON.stringify(userData));
              this.appService.showToastMessage(
                AppEnums.ToastTypeSuccess,
                apiResponse.msg,
                'Check your email for the sign up guide'
              );
            } else {
              this.appService.showToastMessage(
                AppEnums.ToastTypeWarning,
                apiResponse.status,
                apiResponse.msg
              );
            }
          },
          (error) => {
            this.isLoading = false;
            this.appService.showToastMessage(
              AppEnums.ToastTypeError,
              'Error',
              'An error was encountered while processing your request.'
            );
          }
        );
        
    }
  

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
}