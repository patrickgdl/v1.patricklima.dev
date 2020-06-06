import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-social-links',
  template: `
    <div class="social-icon-outer">
      <div class="social-icon-container">
        <a [href]="icon.link" target="_blank" rel="noopener noreferrer" *ngFor="let icon of iconsList">
          <dev-icons [name]="icon.name"></dev-icons>
        </a>
        <span class="hidden"></span>
      </div>
    </div>
  `,
})
export class SocialLinksComponent implements OnInit {
  iconsList = [
    { name: 'twitter', link: 'http://twitter.com/opatrickgdl' },
    { name: 'stackoverflow', link: 'https://pt.stackoverflow.com/users/57007/patrick-lima' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/patrickgdl' },
    { name: 'instagram', link: 'https://www.instagram.com/patrick.gl' },
    { name: 'github', link: 'https://github.com/patrickgdl' },
  ];

  constructor() {}

  ngOnInit() {}
}
