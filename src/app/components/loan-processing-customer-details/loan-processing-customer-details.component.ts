import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-processing-customer-details',
  templateUrl: './loan-processing-customer-details.component.html',
  styleUrls: ['./loan-processing-customer-details.component.css']
})
export class LoanProcessingCustomerDetailsComponent implements OnInit {

  assetBasedTableHeader = ['#', 'Assets', 'Amount', 'Availability', 'Source'];
  flowBasedTableHeader = ['#', 'Flow', 'Amount', 'Availability', 'Source'];
  constructor() { }

  ngOnInit() {
  }

  customerDetails = {
    name: 'Example Name',
    aaId: 'example@aa',
    consentReceived: 'yes',
    assetBased: [
      {
        asset: {
          assetName: 'Stocks',
          amount: '1000',
          availability: 'Yes',
          source: 'AA'
        }
      },
      {
        asset: {
          assetName: 'Recivables',
          amount: '1000',
          availability: 'Yes',
          source: 'NonAA'
        }
      },
      {
        asset: {
          assetName: 'Fixed assets',
          amount: '1000',
          availability: 'Yes',
          source: 'AA'
        }
      }
    ],
    flowBased: [
      {
        flows: {
          flowName: 'GST',
          amount: '1000',
          availability: 'Yes',
          source: 'AA'
        }
      },
      {
        flows: {
          flowName: 'Corporate tax',
          amount: '1000',
          availability: 'Yes',
          source: 'NonAA'
        }
      },
      {
        flows: {
          flowName: 'Bill of Lading',
          amount: '1000',
          availability: 'Yes',
          source: 'NonAA'
        }
      },
      {
        flows: {
          flowName: 'Bill of Exchange',
          amount: '1000',
          availability: 'Yes',
          source: 'NonAA'
        }
      }
    ]

  }

  navigate() {

  }

}
