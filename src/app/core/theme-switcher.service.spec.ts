import { TestBed } from '@angular/core/testing';
import { ThemeSwitcherService } from './theme-switcher.service';

describe('ThemeSwitcherService', () => {
  let service: ThemeSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeSwitcherService],
    });
    service = TestBed.inject(ThemeSwitcherService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
