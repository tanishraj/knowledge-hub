import { TestBed, inject } from '@angular/core/testing';

import { VisitorsService } from './visitors.service';

describe('VisitorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitorsService]
    });
  });

  it('should be created', inject([VisitorsService], (service: VisitorsService) => {
    expect(service).toBeTruthy();
  }));
});
