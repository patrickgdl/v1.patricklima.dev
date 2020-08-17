import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ThemeService } from './../../shared/services/theme.service';

@Component({
  selector: 'dev-header',
  template: `
    <header class="section">
      <div class="nav-container">
        <a class="logo-link" [routerLink]="['./']">
          <dev-logo></dev-logo>

          <span class="header-hidden">Navegue para a homepage</span>
        </a>
        <div class="nav-controls">
          <button class="icon-wrapper button-copy" (click)="copyToClipboard()">
            COPIAR E-MAIL
            <div #tooltip class="tool-tip">
              copiado
            </div>
            <input #copyText style="opacity: 0;" type="text" class="tool-tip" />
          </button>

          <button class="icon-wrapper" (click)="toggleColors()">
            <div class="sun-rays" #sunRays></div>
            <div class="moon-or-sun" #moonOrSun></div>
            <div class="moon-mask" #moonMask></div>
          </button>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  @ViewChild('sunRays', { static: true }) sunRays: ElementRef;
  @ViewChild('moonOrSun', { static: true }) moonOrSun: ElementRef;
  @ViewChild('moonMask', { static: true }) moonMask: ElementRef;
  @ViewChild('copyText', { static: true }) copyText: ElementRef;
  @ViewChild('tooltip', { static: true }) tooltip: ElementRef;

  moonIcon: HTMLElement;
  sunIcon: HTMLElement;
  moonOrSunIcon: HTMLElement;
  copyTextEl: HTMLInputElement;
  tooltipEl: HTMLElement;

  constructor(private _themeService: ThemeService) {}

  ngOnInit() {
    this.moonOrSunIcon = this.moonOrSun.nativeElement;
    this.sunIcon = this.sunRays.nativeElement;
    this.moonIcon = this.moonMask.nativeElement;
    this.copyTextEl = this.copyText.nativeElement;
    this.tooltipEl = this.tooltip.nativeElement;

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

  copyToClipboard() {
    // const currentUrl = window.location;
    this.copyTextEl.value = 'patrickgdlima@gmail.com';
    this.copyTextEl.focus();
    this.copyTextEl.select();
    document.execCommand('copy');

    this.tooltipEl.style.animationName = 'pan-toolbar';

    setTimeout(() => {
      this.tooltipEl.style.removeProperty('animation-name');
    }, 2000);
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
