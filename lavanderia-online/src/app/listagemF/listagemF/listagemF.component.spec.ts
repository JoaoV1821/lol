import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFComponent } from './listagemF.component';

describe('ListagemFComponent', () => {
  let component: ListagemFComponent;
  let fixture: ComponentFixture<ListagemFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemFComponent]
    });
    fixture = TestBed.createComponent(ListagemFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
