import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-processor-dashboard',
  templateUrl: './loan-processor-dashboard.component.html',
  styleUrls: ['./loan-processor-dashboard.component.css']
})
export class LoanProcessorDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customers = [
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
