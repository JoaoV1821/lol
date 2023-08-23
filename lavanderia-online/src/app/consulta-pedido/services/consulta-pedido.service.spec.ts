import { TestBed } from '@angular/core/testing';

import { ConsultaPedidoService } from './consulta-pedido.service';

describe('ConsultaPedidoService', () => {
  let service: ConsultaPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
