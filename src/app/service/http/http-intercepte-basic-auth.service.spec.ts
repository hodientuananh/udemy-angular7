import { TestBed } from '@angular/core/testing';

import { HttpIntercepteBasicAuthService } from './http-intercepte-basic-auth.service';

describe('HttpIntercepteBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepteBasicAuthService = TestBed.get(HttpIntercepteBasicAuthService);
    expect(service).toBeTruthy();
  });
});
