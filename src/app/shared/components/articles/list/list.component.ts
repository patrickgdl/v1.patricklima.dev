import { Component, Input } from '@angular/core';

import { Post } from './../../../../models/post.interface';

@Component({
  selector: 'dev-list',
  template: `
    <div id="articlesList" class="articles-list-container">
      <div
        [class]="isList ? 'post-row' : 'post-grid'"
        [ngStyle]="{ 'grid-template-columns': isList ? '' : odd ? wide : narrow }"
        *ngFor="let rowPosts of pairPosts; let idx = index; let odd = odd"
      >
        <dev-list-item [post]="rowPosts[0]"></dev-list-item>
        <dev-list-item [post]="rowPosts[1]"></dev-list-item>
      </div>
    </div>

    <dev-paginator></dev-paginator>
  `,
  styles: [],
})
export class ListComponent {
  @Input() pairPosts: Post[][];
  @Input() isList = false;

  narrow = '1fr 457px';
  wide = '457px 1fr';

  // // If only 1 article, dont create 2 rows.
  //   display: grid;
  //   grid-template-rows: hasOnlyOneArticle ? '1fr' : '1fr 1fr';

  constructor() {}
}
