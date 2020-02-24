import { Component, OnInit } from '@angular/core';
import { IdleMonitorService } from '@scullyio/ng-lib';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bodyElement: HTMLElement;

  constructor(private idle: IdleMonitorService, private _themeService: ThemeService) {}

  ngOnInit() {
    this.bodyElement = document.getElementsByTagName('BODY')[0] as HTMLElement;
    if (localStorage.getItem('isLight') === null) {
      localStorage.setItem('isLight', 'true');
    }

    if (localStorage.getItem('isLight') === 'false') {
      this._themeService.makeDark();
    } else {
      this._themeService.makeLight();
    }
  }
}
