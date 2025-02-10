import { TestBed } from '@angular/core/testing';

import { EletroService } from './eletro.service';

describe('EletroService', () => {
  let service: EletroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EletroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
