import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorhandelerComponent } from './errorhandeler.component';

describe('ErrorhandelerComponent', () => {
  let component: ErrorhandelerComponent;
  let fixture: ComponentFixture<ErrorhandelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorhandelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorhandelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
