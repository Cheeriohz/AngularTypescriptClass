import { TestBed } from '@angular/core/testing';

import { EmployeeAjaxService } from './employee-service.service';

describe('EmployeeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeAjaxService = TestBed.get(EmployeeAjaxService);
    expect(service).toBeTruthy();
  });
});
