import { Component, Input } from '@angular/core';

import { Post } from './../../../../models/post.interface';

@Component({
  selector: 'dev-list',
  templateUrl: './list.component.html',
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
