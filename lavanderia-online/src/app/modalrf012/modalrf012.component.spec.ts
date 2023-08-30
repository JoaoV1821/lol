import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalrf012Component } from './modalrf012.component';

describe('Modalrf012Component', () => {
  let component: Modalrf012Component;
  let fixture: ComponentFixture<Modalrf012Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Modalrf012Component]
    });
    fixture = TestBed.createComponent(Modalrf012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
