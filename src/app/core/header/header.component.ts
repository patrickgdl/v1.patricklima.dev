import { Component, OnInit } from '@angular/core';

import { ThemeService } from './../../services/theme.service';

@Component({
  selector: 'dev-header',
  template: `
    <section class="section">
      <div class="nav-container">
        <a class="logo-link" [routerLink]="['./']">
          <dev-logo></dev-logo>

          <span class="header-hidden">Navegue para a homepage</span>
        </a>
        <div class="nav-controls">
          <button class="icon-wrapper" (click)="toggleColors()">
            <div id="sunRays" class="sun-rays"></div>
            <div id="moonOrSun" class="moon-or-sun"></div>
            <div id="moonMask" class="moon-mask"></div>
          </button>
        </div>
      </div>
    </section>
  `,
})
export class HeaderComponent implements OnInit {
  moonIcon: HTMLElement;
  sunIcon: HTMLElement;
  moonOrSunIcon: HTMLElement;

  constructor(private _themeService: ThemeService) {}

  ngOnInit() {
    this.moonOrSunIcon = document.getElementById('moonOrSun');
    this.sunIcon = document.getElementById('sunRays');
    this.moonIcon = document.getElementById('moonMask');

    this.initAnimation();
  }

  initAnimation() {
    if (localStorage.getItem('isLight') === 'true') {
      this.moonIcon.style.top = '-8px';
      this.moonIcon.style.right = '-5px';
      this.moonOrSunIcon.style.transform = 'scale(1)';
      this.sunIcon.style.transform = 'scale(0.1)';
    } else {
      this.moonIcon.style.top = '-25px';
      this.moonIcon.style.right = '-15px';
      this.moonOrSunIcon.style.transform = 'scale(0.5)';
      this.sunIcon.style.transform = 'scale(0.6)';
    }
  }

  toggleColors() {
    if (localStorage.getItem('isLight') === 'true') {
      this._themeService.makeDark();

      this.moonIcon.classList.add('mask-to-sun-animation');
      this.moonOrSunIcon.classList.add('to-sun-animation');
      this.sunIcon.classList.add('expand-rays');

      setTimeout(() => {
        this.sunIcon.classList.remove('expand-rays');
      }, 500);

      setTimeout(() => {
        this.moonIcon.classList.remove('mask-to-sun-animation');
        this.moonOrSunIcon.classList.remove('to-sun-animation');
        this.initAnimation();
      }, 400);

      localStorage.setItem('isLight', 'false');
    } else {
      this._themeService.makeLight();

      this.moonIcon.classList.add('mask-to-moon-animation');
      this.moonOrSunIcon.classList.add('to-moon-animation');
      this.sunIcon.classList.add('contract-rays');

      setTimeout(() => {
        this.sunIcon.classList.remove('contract-rays');
      }, 500);

      setTimeout(() => {
        this.moonIcon.classList.remove('mask-to-moon-animation');
        this.moonOrSunIcon.classList.remove('to-moon-animation');
        this.sunIcon.classList.remove('contract-rays');
        this.initAnimation();
      }, 400);

      localStorage.setItem('isLight', 'true');
    }
  }
}
