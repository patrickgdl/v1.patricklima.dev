import { Component, OnInit } from '@angular/core';
import { IdleMonitorService, isScullyGenerated, isScullyRunning } from '@scullyio/ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bodyElement: HTMLElement;
  currentState = isScullyRunning() ? 'rendering inside scully' : isScullyGenerated() ? 'Loaded from static HTML' : 'SPA mode';

  constructor(private idle: IdleMonitorService) {}

  ngOnInit() {
    this.bodyElement = document.getElementsByTagName('BODY')[0] as HTMLElement;
    if (localStorage.getItem('isLight') === null) {
      localStorage.setItem('isLight', 'true');
    }

    if (localStorage.getItem('isLight') === 'false') {
      this.makeDark();
    } else {
      this.makeLight();
    }

    const author = {
      bio: 'Written by You. This is where your author bio lives. Share your work, yourjoys and of course, your Twitter handle.',
      id: 'cebebc26-b80b-5c45-b29b-fb56bd6b7b61',
      name: 'Dennis Brotzky',
      slug: '/authors/Dennis-Brotzky'
    };
  }

  makeDark() {
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

  makeLight() {
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
