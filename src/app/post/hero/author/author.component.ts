import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
    <a href="" class="article-author-link">
      <div class="article-author-avatar">
        <img src="" />
      </div>

      <strong>Patrick Lima</strong>

      <span class="hide-on-mobile">,&nbsp;</span>
    </a>
  `
})
export class AuthorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
