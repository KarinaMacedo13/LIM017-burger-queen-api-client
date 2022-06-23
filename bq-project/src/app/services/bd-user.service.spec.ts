import { TestBed } from '@angular/core/testing';

import { BdUserService } from './bd-user.service';

describe('BdUserService', () => {

  let service: BdUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
