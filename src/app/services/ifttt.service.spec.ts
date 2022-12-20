import { TestBed } from '@angular/core/testing';

import { IftttService } from './ifttt.service';

describe('IftttService', () => {
  let service: IftttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IftttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
