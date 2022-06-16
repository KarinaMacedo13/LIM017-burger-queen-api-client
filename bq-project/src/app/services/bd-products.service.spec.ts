import { TestBed } from '@angular/core/testing';

import { BdProductsService } from './bd-products.service';

describe('BdProductsService', () => {
  let service: BdProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
