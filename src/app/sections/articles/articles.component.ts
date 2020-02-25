import { Post } from './../../models/post.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styles: []
})
export class ArticlesComponent implements OnInit {
  @Input() pairPosts: Post[][];

  constructor() {}

  ngOnInit() {}
}
