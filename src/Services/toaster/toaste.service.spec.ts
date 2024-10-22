import { TestBed } from '@angular/core/testing';

import { ToasteService } from './toaste.service';

describe('ToasteService', () => {
  let service: ToasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
