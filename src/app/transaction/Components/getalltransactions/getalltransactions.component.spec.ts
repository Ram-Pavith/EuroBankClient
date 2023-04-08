import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltransactionsComponent } from './getalltransactions.component';

describe('GetalltransactionsComponent', () => {
  let component: GetalltransactionsComponent;
  let fixture: ComponentFixture<GetalltransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalltransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalltransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
