import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoComponent } from './orcamento.component';

describe('OrcamentoComponent', () => {
  let component: OrcamentoComponent;
  let fixture: ComponentFixture<OrcamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrcamentoComponent]
    });
    fixture = TestBed.createComponent(OrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
