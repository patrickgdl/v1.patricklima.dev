import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-about',
  template: `
    <dev-about-hero></dev-about-hero>

    <!--dev-about-articles></dev-about-articles-->
  `,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
