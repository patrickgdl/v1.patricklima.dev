import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-footer',
  template: `
    <div class="footer-gradient"></div>
    <div class="section">
      <div class="footer-hr"></div>
      <div class="footer-container">
        <div class="footer-text">{{ currentYear }} • Patrick Lima</div>

        <dev-social-links></dev-social-links>
      </div>
    </div>
  `,
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}
}
