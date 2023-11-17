import { TestBed } from '@angular/core/testing';

import { AutoCadastroService } from './autoCadastro.service';

describe('AutocadastroService', () => {
  let service: AutoCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
