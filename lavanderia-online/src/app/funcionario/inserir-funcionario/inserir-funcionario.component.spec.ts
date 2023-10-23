import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFuncionarioComponent } from './inserir-funcionario.component';

describe('InserirFuncionarioComponent', () => {
  let component: InserirFuncionarioComponent;
  let fixture: ComponentFixture<InserirFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirFuncionarioComponent]
    });
    fixture = TestBed.createComponent(InserirFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
