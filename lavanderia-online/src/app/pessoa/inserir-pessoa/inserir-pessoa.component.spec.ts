import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirPessoaComponent } from './inserir-pessoa.component';

describe('InserirPessoaComponent', () => {
  let component: InserirPessoaComponent;
  let fixture: ComponentFixture<InserirPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirPessoaComponent]
    });
    fixture = TestBed.createComponent(InserirPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
