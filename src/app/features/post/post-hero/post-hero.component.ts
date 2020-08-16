import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Post } from './../../../models/post.interface';

@Component({
  selector: 'dev-post-hero',
  template: `
    <div class="post-hero">
      <section class="post-hero-section">
        <header class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-author">por Patrick Lima</div>
        </header>
      </section>
    </div>

    <section class="post-time">
      <div class="post-progress-icon">
        <div mode="dark" class="post-progress-position"></div>
        <div mode="dark" offset="300" class="post-progress-position2"></div>
      </div>
      <div class="post-time-to-read">{{ post.timeToRead }} min leitura</div>
    </section>

    <!-- <div class="article-hero-image">
      <img [src]="post.hero" />
    </div> -->
  `,
  styleUrls: ['./post-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostHeroComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}
}
