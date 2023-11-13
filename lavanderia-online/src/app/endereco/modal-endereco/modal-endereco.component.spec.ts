import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnderecoComponent } from './modal-endereco.component';

describe('ModalEnderecoComponent', () => {
  let component: ModalEnderecoComponent;
  let fixture: ComponentFixture<ModalEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEnderecoComponent]
    });
    fixture = TestBed.createComponent(ModalEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
