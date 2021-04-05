import { TestBed } from '@angular/core/testing';

import { MyErrorHandelerService } from './my-error-handeler.service';

describe('MyErrorHandelerService', () => {
  let service: MyErrorHandelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyErrorHandelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
