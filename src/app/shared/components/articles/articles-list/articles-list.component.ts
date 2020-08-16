import { Component, Input } from '@angular/core';

import { Post } from './../../../../models/post.interface';

@Component({
  selector: 'dev-articles-list',
  template: `
    <div [style.transition]="'opacity .25s'">
      <ng-container *ngIf="pairPosts?.length">
        <div
          [class]="isList ? 'post-row' : 'post-grid'"
          [ngStyle]="pairPosts.length === 1 ? { 'grid-template-rows': '1fr' } : { 'grid-template-columns': isList ? '' : odd ? wide : narrow }"
          *ngFor="let rowPosts of pairPosts; let idx = index; let odd = odd"
        >
          <dev-articles-list-item [post]="rowPosts[0]" [numberOfPosts]="pairPosts?.length"></dev-articles-list-item>
          <dev-articles-list-item [post]="rowPosts[1]"></dev-articles-list-item>
        </div>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class ArticlesListComponent {
  @Input() pairPosts: Post[][] = [];
  @Input() isList = false;

  narrow = '1fr 457px';
  wide = '457px 1fr';

  // // If only 1 article, dont create 2 rows.
  //   display: grid;
  //   grid-template-rows: hasOnlyOneArticle ? '1fr' : '1fr 1fr';

  constructor() {
    const iashdu = this.pairPosts.length === 1 ? 'grid-template-rows' : 'grid-template-columns';
  }
}
