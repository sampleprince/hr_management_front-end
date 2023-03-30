import { TestBed } from '@angular/core/testing';

import { LandingserviceService } from './landingservice.service';

describe('LandingserviceService', () => {
  let service: LandingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
