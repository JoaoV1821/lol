import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rf012Component } from './rf012.component';

describe('Rf012Component', () => {
  let component: Rf012Component;
  let fixture: ComponentFixture<Rf012Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rf012Component]
    });
    fixture = TestBed.createComponent(Rf012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
