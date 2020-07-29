export class LoanProcessingDetails {
  customerDetails: CustomerDetails;
  loanHelperDetails: LoanHelperDetails;
  loanDetails: LoanDetails;

  constructor(loanProcessingDetails: any) {
    this.customerDetails = new CustomerDetails(loanProcessingDetails.customerDetails);
    this.loanDetails = new LoanDetails(loanProcessingDetails.loanDetails);
    this.loanHelperDetails = new LoanHelperDetails(loanProcessingDetails.loanHelperDetails);
  }
}

export class CustomerDetails {
  firstName: string;
  lastName: string;
  businessName: string;
  businessPanNumber: string;
  adhaarNumber: string;
  accountAggregatorId: string;

  constructor(customerDetails: any) {
    this.firstName = customerDetails.firstName;
    this.lastName = customerDetails.lastName;
    this.businessName = customerDetails.businessName;
    this.businessPanNumber = customerDetails.businessPanNumber;
    this.adhaarNumber = customerDetails.adhaarNumber;
    this.accountAggregatorId = customerDetails.accountAggregatorId;
  }
}

export class LoanHelperDetails {
  fullName: string;
  mobileNumber: string;

  constructor(loanHelperDetails: any) {
    this.fullName = loanHelperDetails.fullName;
    this.mobileNumber = loanHelperDetails.mobileNumber;
  }
}

export class LoanDetails {
  loanAmount: number;
  reasonForLoan: string;
  loanDuration: LoanDuration;

  constructor(loanDetails: any) {
    this.loanAmount = loanDetails.loanAmount;
    this.reasonForLoan = loanDetails.reasonForLoan;
    this.loanDuration = new LoanDuration(loanDetails.loanDuration);
  }
}

export class LoanDuration {
  years: number;
  months: number;
  days: number;

  constructor(loanDuration: any) {
    this.years = loanDuration.years;
    this.months = loanDuration.months;
    this.days = loanDuration.days;
  }

}
