import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProcessingCustomerDetailsComponent } from './loan-processing-customer-details.component';

describe('LoanProcessingCustomerDetailsComponent', () => {
  let component: LoanProcessingCustomerDetailsComponent;
  let fixture: ComponentFixture<LoanProcessingCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProcessingCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProcessingCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
