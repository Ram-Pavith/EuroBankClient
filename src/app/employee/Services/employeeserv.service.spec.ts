import { TestBed } from '@angular/core/testing';

import { EmployeeservService } from './employeeserv.service';

describe('EmployeeservService', () => {
  let service: EmployeeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
