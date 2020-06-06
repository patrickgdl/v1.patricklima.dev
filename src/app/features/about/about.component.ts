import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-about',
  template: `
    <section class="section">
      <section>
        <dev-about-hero></dev-about-hero>

        <dev-about-articles></dev-about-articles>
      </section>
      <div class="authors-gradient"></div>
    </section>
  `,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
