import { Component, OnInit } from '@angular/core';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _themeService: ThemeService) {}

  ngOnInit() {
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
