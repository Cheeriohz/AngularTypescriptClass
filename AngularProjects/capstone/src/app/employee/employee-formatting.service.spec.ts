import { TestBed } from '@angular/core/testing';

import { EmployeeFormattingService } from './employee-formatting.service';

describe('EmployeeFormattingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeFormattingService = TestBed.get(EmployeeFormattingService);
    expect(service).toBeTruthy();
  });
});
