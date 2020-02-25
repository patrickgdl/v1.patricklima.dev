import { Component, Input, OnInit } from '@angular/core';

import { Post } from './../../models/post.interface';

@Component({
  selector: 'app-post-hero',
  templateUrl: './post-hero.component.html'
})
export class PostHeroComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}
}
