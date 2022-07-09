import { TestBed } from '@angular/core/testing';

import { CalloutsService } from './callouts.service';

describe('CalloutsService', () => {
  let service: CalloutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalloutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
