import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum Theme {
  Light = 'light-theme',
  Dark = 'dark-theme',
  Orange = 'orange-theme',
}
@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  private theme$ = new BehaviorSubject<Theme>(this.getInitialTheme());

  constructor() {
    this.theme$.subscribe((nextTheme) => {
      document.body.classList.remove(Theme.Light);
      document.body.classList.remove(Theme.Dark);
      document.body.classList.remove(Theme.Orange);
      document.body.classList.add(nextTheme);
    });
  }

  enableLightTheme() {
    this.theme$.next(Theme.Light);
    localStorage.setItem('theme', 'light-theme');
  }

  enableDarkTheme() {
    this.theme$.next(Theme.Dark);
    localStorage.setItem('theme', 'dark-theme');
  }

  enableOrangeTheme() {
    this.theme$.next(Theme.Orange);
    localStorage.setItem('theme', 'orange-theme');
  }

  private getInitialTheme(): Theme {
    const storedLocally = localStorage.getItem('theme');
    let stored: Theme = storedLocally as Theme;

    return stored || Theme.Light;
  }
}
