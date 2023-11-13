import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPessoaComponent } from './listar-pessoa.component';

describe('ListarPessoaComponent', () => {
  let component: ListarPessoaComponent;
  let fixture: ComponentFixture<ListarPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPessoaComponent]
    });
    fixture = TestBed.createComponent(ListarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
