import { Component, Input, OnInit } from '@angular/core';

import { Post } from './../../../models/post.interface';

@Component({
  selector: 'dev-articles',
  template: `
    <section class="section">
      <dev-list [pairPosts]="pairPosts" [isList]="isList"></dev-list>

      <div class="articles-paginator"></div>
    </section>

    <div class="articles-gradient"></div>
  `,
  styles: [],
})
export class ArticlesComponent implements OnInit {
  @Input() pairPosts: Post[][];
  @Input() isList = false;

  constructor() {}

  ngOnInit() {}
}
