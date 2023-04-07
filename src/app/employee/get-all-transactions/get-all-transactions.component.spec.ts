import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTransactionsComponent } from './get-all-transactions.component';

describe('GetAllTransactionsComponent', () => {
  let component: GetAllTransactionsComponent;
  let fixture: ComponentFixture<GetAllTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
