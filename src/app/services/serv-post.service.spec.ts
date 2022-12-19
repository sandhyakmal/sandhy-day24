import { TestBed } from '@angular/core/testing';

import { ServPostService } from './serv-post.service';

describe('ServPostService', () => {
  let service: ServPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
