import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoanProcessingDetails } from 'src/app/models/LoanProcessingDetail';
import { RegisterService } from 'src/app/services/register-service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerDetailsForm: FormGroup;
  loanHelperDetailsForm: FormGroup;
  loanDetailsForm: FormGroup;
  loanDuration: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit() {
    this.createCustomerDetailsForm();
    this.createLoanHelperDetailsForm();
    this.createLoanDetailsForm();
  }

  createCustomerDetailsForm() {
    this.customerDetailsForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName: ['', Validators.required],
      businessName: ['', Validators.required],
      businessPanNumber : ['', Validators.required],
      adhaarNumber: ['', Validators.required],
      accountAggregatorId : ['', Validators.required]
    });
  }


  createLoanHelperDetailsForm() {
    this.loanHelperDetailsForm = this.formBuilder.group({
      fullName : ['', Validators.required],
      mobileNumber: ['', Validators.required]
    });
  }

  createLoanDetailsForm() {
    this.loanDetailsForm = this.formBuilder.group({
      loanAmount : ['', Validators.required],
      reasonForLoan: ['', Validators.required],
      loanDuration : this.createLoanDurationForm()
    });
  }

  createLoanDurationForm() {
    this.loanDuration = this.formBuilder.group({
      years: ['', Validators.required],
      months: ['', Validators.required],
      days: ['', Validators.required]
    });
    return this.loanDuration;
  }


  async requestForConsent() {
    if (this.customerDetailsForm.valid && this.loanHelperDetailsForm.valid && this.loanDetailsForm.valid) {
      console.log('Valid form details');
      console.log('Customer Details form Value: ', this.customerDetailsForm.value);
      console.log('Loan Helper Details form Value: ', this.loanHelperDetailsForm.value);
      console.log('Loan Details form Value: ', this.loanDetailsForm.value);
      const formData: any= {
        customerDetails : this.customerDetailsForm.value,
        loanHelperDetails: this.loanHelperDetailsForm.value,
        loanDetails: this.loanDetailsForm.value
      }
      const loanProcessingDetails: LoanProcessingDetails = new LoanProcessingDetails(formData);
      console.log('Loan Processing Request data: ', loanProcessingDetails);
      await this.registerService.requestForConsent(loanProcessingDetails);
      this.router.navigateByUrl('consent');
    } else {
      console.log('Invalid form details');
    }
  }

}
