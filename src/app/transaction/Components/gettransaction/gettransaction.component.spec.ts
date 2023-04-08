import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettransactionComponent } from './gettransaction.component';

describe('GettransactionComponent', () => {
  let component: GettransactionComponent;
  let fixture: ComponentFixture<GettransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
