import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCidadeComponent } from './listar-cidade.component';

describe('ListarCidadeComponent', () => {
  let component: ListarCidadeComponent;
  let fixture: ComponentFixture<ListarCidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCidadeComponent]
    });
    fixture = TestBed.createComponent(ListarCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
