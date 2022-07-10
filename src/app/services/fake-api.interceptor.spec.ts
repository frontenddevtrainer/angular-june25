import { TestBed } from '@angular/core/testing';

import { FakeApiInterceptor } from './fake-api.interceptor';

describe('FakeApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeApiInterceptor = TestBed.inject(FakeApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
