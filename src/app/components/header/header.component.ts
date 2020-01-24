import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  moonIcon: HTMLElement;
  sunIcon: HTMLElement;
  moonOrSunIcon: HTMLElement;
  bodyElement: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.bodyElement = document.getElementsByTagName('BODY')[0] as HTMLElement;
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
      this.makeDark();

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
      this.makeLight();

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

  onCopyToClipboard() {
    const currentUrl = window.location;
    const toolTip = document.getElementById('toolTip');
    const copyTextContainer = document.getElementById('copyText') as HTMLInputElement;

    copyTextContainer.value = currentUrl.href;
    copyTextContainer.focus();
    copyTextContainer.select();
    document.execCommand('copy');

    toolTip.style.animationName = 'pan-toolbar';

    setTimeout(() => {
      toolTip.style.removeProperty('animation-name');
    }, 2000);
  }

  private makeDark() {
    this.bodyElement.style.setProperty('--primary', '#fff');
    this.bodyElement.style.setProperty('--secondary', '#fff');
    this.bodyElement.style.setProperty('--grey', '#73737D');
    this.bodyElement.style.setProperty('--background-color', '#111216');
    this.bodyElement.style.setProperty('--accent', '#E9DAAC');
    this.bodyElement.style.setProperty('--hover', 'rgba(255, 255, 255, 0.07)');
    this.bodyElement.style.setProperty('--gradient', 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)');
    this.bodyElement.style.setProperty('--articleText', '#fff');
    this.bodyElement.style.setProperty('--track', 'rgba(255, 255, 255, 0.3)');
    this.bodyElement.style.setProperty('--progress', '#fff');
    this.bodyElement.style.setProperty('--card', '#1D2128');
    this.bodyElement.style.setProperty('--error', '#EE565B');
    this.bodyElement.style.setProperty('--success', '#46B17B');
    this.bodyElement.style.setProperty('--errorBackground', 'rgba(238, 86, 91, 0.1)');
    this.bodyElement.style.setProperty('--horizontalRule', 'rgba(255, 255, 255, 0.15)');
    this.bodyElement.style.setProperty('--inputBackground', 'rgba(255, 255, 255, 0.07)');
    this.bodyElement.style.setProperty('--tooltip', '#000');
  }

  private makeLight() {
    this.bodyElement.style.setProperty('--primary', '');
    this.bodyElement.style.setProperty('--secondary', '');
    this.bodyElement.style.setProperty('--grey', '');
    this.bodyElement.style.setProperty('--background-color', '');
    this.bodyElement.style.setProperty('--accent', '');
    this.bodyElement.style.setProperty('--hover', '');
    this.bodyElement.style.setProperty('--gradient', '');
    this.bodyElement.style.setProperty('--articleText', '');
    this.bodyElement.style.setProperty('--track', '');
    this.bodyElement.style.setProperty('--progress', '');
    this.bodyElement.style.setProperty('--card', '');
    this.bodyElement.style.setProperty('--error', '');
    this.bodyElement.style.setProperty('--success', '');
    this.bodyElement.style.setProperty('--errorBackground', '');
    this.bodyElement.style.setProperty('--horizontalRule', '');
    this.bodyElement.style.setProperty('--inputBackground', '');
    this.bodyElement.style.setProperty('--tooltip', 'lightgrey');
  }
}
