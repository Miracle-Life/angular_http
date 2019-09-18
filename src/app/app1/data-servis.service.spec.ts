import { TestBed } from '@angular/core/testing';

import { DataServisService } from './data-servis.service';

describe('DataServisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServisService = TestBed.get(DataServisService);
    expect(service).toBeTruthy();
  });
});
