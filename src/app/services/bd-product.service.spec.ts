import { TestBed } from '@angular/core/testing';

import { BdProductService } from './bd-product.service';

describe('BdProductService', () => {
  let service: BdProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
