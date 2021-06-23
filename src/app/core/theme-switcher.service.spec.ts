import { TestBed } from '@angular/core/testing';
import { ThemeSwitcherService } from './theme-switcher.service';

describe('ThemeSwitcherService', () => {
  let service: ThemeSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change to light theme', () => {
    service.enableLightTheme();

    expect(service.enableLightTheme).toHaveBeenCalled();
  });

  it('should change to dark theme', () => {
    service.enableDarkTheme();

    expect(service.enableDarkTheme).toHaveBeenCalled();
  });

  it('should change to orange theme', () => {
    service.enableOrangeTheme();

    expect(service.enableOrangeTheme).toHaveBeenCalled();
  });
});
