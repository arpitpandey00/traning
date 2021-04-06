import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedchild1child2Component } from './sharedchild1child2.component';

describe('Sharedchild1child2Component', () => {
  let component: Sharedchild1child2Component;
  let fixture: ComponentFixture<Sharedchild1child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharedchild1child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sharedchild1child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
