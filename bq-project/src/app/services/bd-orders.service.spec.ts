import { TestBed } from '@angular/core/testing';

import { BdOrdersService } from './bd-orders.service';

describe('BdOrdersService', () => {
  let service: BdOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
