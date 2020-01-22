import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  template: `
    <div class="social-icon-outer">
      <div class="social-icon-container"></div>
    </div>
  `,
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
