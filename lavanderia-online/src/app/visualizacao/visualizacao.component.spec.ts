import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoComponent } from './visualizacao.component';

describe('VisualizacaoComponent', () => {
  let component: VisualizacaoComponent;
  let fixture: ComponentFixture<VisualizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacaoComponent]
    });
    fixture = TestBed.createComponent(VisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
