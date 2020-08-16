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
          <button class="icon-wrapper" (click)="copyToClipboard()">
            <svg class="icon-image" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 5C2 3.34328 3.34328 2 5 2H14C15.6567 2 17 3.34328 17 5V9C17 10.6567 15.6567 12 14 12H10C9.44771 12 9 12.4477 9 13C9 13.5523 9.44771 14 10 14H14C16.7613 14 19 11.7613 19 9V5C19 2.23872 16.7613 0 14 0H5C2.23872 0 0 2.23872 0 5V9C0 10.4938 0.656313 11.8361 1.6935 12.7509C2.10768 13.1163 2.73961 13.0767 3.10494 12.6625C3.47028 12.2483 3.43068 11.6164 3.0165 11.2511C2.39169 10.6999 2 9.89621 2 9V5ZM7 11C7 9.34328 8.34328 8 10 8H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H10C7.23872 6 5 8.23872 5 11V15C5 17.7613 7.23872 20 10 20H19C21.7613 20 24 17.7613 24 15V11C24 9.50621 23.3437 8.16393 22.3065 7.24906C21.8923 6.88372 21.2604 6.92332 20.8951 7.3375C20.5297 7.75168 20.5693 8.38361 20.9835 8.74894C21.6083 9.30007 22 10.1038 22 11V15C22 16.6567 20.6567 18 19 18H10C8.34328 18 7 16.6567 7 15V11Z"
                fill="#000"
              />
            </svg>
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
    const currentUrl = window.location;
    this.copyTextEl.value = currentUrl.href;
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
