import { TestBed } from '@angular/core/testing';

import { PaginaInicialFuncionarioService } from './pagina-inicial-funcionario.service';

describe('PaginaInicialFuncionarioService', () => {
  let service: PaginaInicialFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginaInicialFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
