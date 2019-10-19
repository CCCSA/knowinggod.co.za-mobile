import { TestBed } from '@angular/core/testing';

import { ReadAssetTextService } from './read-asset-text.service';

describe('ReadAssetTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadAssetTextService = TestBed.get(ReadAssetTextService);
    expect(service).toBeTruthy();
  });
});
