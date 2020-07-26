import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerDetailsForm: FormGroup;
  loanHelperDetailsForm: FormGroup;
  loanDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      years: ['', Validators.required],
      months: ['', Validators.required],
      days: ['', Validators.required]
    });
  }


  register() {
    if (this.customerDetailsForm.valid && this.loanHelperDetailsForm.valid && this.loanDetailsForm.valid) {
      console.log('Valid form details');
      console.log('Customer Details form Value: ', this.customerDetailsForm.value);
      console.log('Loan Helper Details form Value: ', this.loanHelperDetailsForm.value);
      console.log('Loan Details form Value: ', this.loanDetailsForm.value);
    } else {
      console.log('Invalid form details');
    }
  }

}
