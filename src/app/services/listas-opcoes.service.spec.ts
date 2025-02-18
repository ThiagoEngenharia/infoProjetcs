import { TestBed } from '@angular/core/testing';

import { ListasOpcoesService } from './listas-opcoes.service';

describe('ListasOpcoesService', () => {
  let service: ListasOpcoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasOpcoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
