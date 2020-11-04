import { Component, OnInit } from '@angular/core';

import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    if (localStorage.getItem('isLight') === null) {
      localStorage.setItem('isLight', 'false');
    }

    if (localStorage.getItem('isLight') === 'false') {
      this.themeService.makeDark();
    } else {
      this.themeService.makeLight();
    }
  }
}
