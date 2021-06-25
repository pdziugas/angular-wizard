import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeSwitcherService } from 'src/app/core/theme-switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public themeService: ThemeSwitcherService,
    private router: Router
  ) {}

  goHome() {
    this.router.navigate(['/form']);
  }
}
