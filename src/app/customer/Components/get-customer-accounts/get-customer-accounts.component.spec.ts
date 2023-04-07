import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerAccountsComponent } from './get-customer-accounts.component';

describe('GetCustomerAccountsComponent', () => {
  let component: GetCustomerAccountsComponent;
  let fixture: ComponentFixture<GetCustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
