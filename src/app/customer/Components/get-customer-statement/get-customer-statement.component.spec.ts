import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerStatementComponent } from './get-customer-statement.component';

describe('GetCustomerStatementComponent', () => {
  let component: GetCustomerStatementComponent;
  let fixture: ComponentFixture<GetCustomerStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCustomerStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
