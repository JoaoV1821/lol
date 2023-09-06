import { TestBed } from '@angular/core/testing';

import { CrudRoupasService } from './crud-roupas.service';

describe('CrudRoupasService', () => {
  let service: CrudRoupasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudRoupasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
