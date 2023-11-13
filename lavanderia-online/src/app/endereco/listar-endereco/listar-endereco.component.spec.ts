import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEnderecoComponent } from './listar-endereco.component';

describe('ListarEnderecoComponent', () => {
  let component: ListarEnderecoComponent;
  let fixture: ComponentFixture<ListarEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEnderecoComponent]
    });
    fixture = TestBed.createComponent(ListarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
