import { TestBed } from '@angular/core/testing';

import { LoanProcessingService } from './loan-processing.service';

describe('LoanProcessingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanProcessingService = TestBed.get(LoanProcessingService);
    expect(service).toBeTruthy();
  });
});
