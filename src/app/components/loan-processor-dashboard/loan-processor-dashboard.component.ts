import { Component, OnInit } from '@angular/core';
import { LoanProcessingService } from 'src/app/services/loan-processing/loan-processing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-processor-dashboard',
  templateUrl: './loan-processor-dashboard.component.html',
  styleUrls: ['./loan-processor-dashboard.component.css']
})
export class LoanProcessorDashboardComponent implements OnInit {

  customerDetails: Array<any>;
  tableHeader = ['Index', 'Name', 'Account Aggregator ID', 'Consent Received', '']
  constructor(private loanService: LoanProcessingService, private router: Router) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

  async getCustomerDetails() {
    // this.customerDetails = await this.loanService.fetchCustomerDetails();
    this.customerDetails = [
      {
        name: 'John',
        accountAggregatorId: 'john@aa',
        consentReceived: 'no'
      },
      {
        name: 'sruthi',
        accountAggregatorId: 'sruthi@aa',
        consentReceived: 'no'
      },
      {
        name: 'anu',
        accountAggregatorId: 'anu@aa',
        consentReceived: 'yes'
      }
    ]
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
