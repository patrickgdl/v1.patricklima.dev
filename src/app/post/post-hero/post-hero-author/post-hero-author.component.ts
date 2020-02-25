import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
    <a [routerLink]="['./about']" class="article-author-link">
      <div class="article-author-avatar">
        <img src="assets/img/avatar.jpg" />
      </div>

      <strong>Patrick Lima</strong>

      <span class="hide-on-mobile">,&nbsp;</span>
    </a>
  `
})
export class PostHeroAuthorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
