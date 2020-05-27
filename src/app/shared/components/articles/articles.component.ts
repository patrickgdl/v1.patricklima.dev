import { Component, Input, OnInit } from '@angular/core';

import { Post } from './../../../models/post.interface';

@Component({
  selector: 'dev-articles',
  templateUrl: './articles.component.html',
  styles: []
})
export class ArticlesComponent implements OnInit {
  @Input() pairPosts: Post[][];
  @Input() isList = false;

  constructor() {}

  ngOnInit() {}
}
