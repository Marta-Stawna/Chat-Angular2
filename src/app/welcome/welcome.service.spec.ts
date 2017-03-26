import { TestBed, inject } from '@angular/core/testing';

import { WelcomeService } from './welcome.service';

describe('WelcomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeService]
    });
  });

  it('should ...', inject([CWelcomeService], (service: WelcomeService) => {
    expect(service).toBeTruthy();
  }));
});
