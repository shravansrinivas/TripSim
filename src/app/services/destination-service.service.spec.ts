import { TestBed } from '@angular/core/testing';

import { DestinationServiceService } from './destination-service.service';
import * as xyz from "../jim.json";

describe('DestinationServiceService', () => {
  let service: DestinationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
