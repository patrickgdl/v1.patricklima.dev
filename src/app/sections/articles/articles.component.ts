import { Post } from './../../models/post.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-articles',
  templateUrl: './articles.component.html',
  styles: []
})
export class ArticlesComponent implements OnInit {
  @Input() pairPosts: Post[][];

  constructor() {}

  ngOnInit() {}
}
