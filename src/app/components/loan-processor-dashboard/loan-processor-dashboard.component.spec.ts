import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProcessorDashboardComponent } from './loan-processor-dashboard.component';

describe('LoanProcessorDashboardComponent', () => {
  let component: LoanProcessorDashboardComponent;
  let fixture: ComponentFixture<LoanProcessorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProcessorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProcessorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
