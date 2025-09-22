import { TestBed } from '@angular/core/testing';

import { TriviaApi } from './trivia-api';

describe('TriviaApi', () => {
  let service: TriviaApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
