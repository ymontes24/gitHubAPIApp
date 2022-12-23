import { TestBed } from '@angular/core/testing';

import { CommitsAppService } from './commits-app.service';

describe('CommitsAppService', () => {
  let service: CommitsAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitsAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
