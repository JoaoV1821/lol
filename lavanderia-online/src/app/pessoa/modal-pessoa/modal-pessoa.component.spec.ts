import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPessoaComponent } from './modal-pessoa.component';

describe('ModalPessoaComponent', () => {
  let component: ModalPessoaComponent;
  let fixture: ComponentFixture<ModalPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPessoaComponent]
    });
    fixture = TestBed.createComponent(ModalPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
