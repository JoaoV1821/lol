import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosAbertosComponent } from './listar-pedidos-abertos.component';

describe('ListarPedidosAbertosComponent', () => {
  let component: ListarPedidosAbertosComponent;
  let fixture: ComponentFixture<ListarPedidosAbertosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPedidosAbertosComponent]
    });
    fixture = TestBed.createComponent(ListarPedidosAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
