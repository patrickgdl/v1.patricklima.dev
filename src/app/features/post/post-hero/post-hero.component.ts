import { Component, Input, OnInit } from '@angular/core';

import { Post } from './../../../models/post.interface';

@Component({
  selector: 'dev-post-hero',
  template: `
    <section class="section">
      <div class="article-hero">
        <header class="article-header">
          <h1 class="article-hero-heading">{{ post.title }}</h1>
          <div class="article-hero-subtitle">
            <div class="article-meta">
              <dev-author></dev-author>

              2 de Janeiro de 2020 • {{ post.timeToRead }} min leitura
            </div>
          </div>
        </header>

        <div class="article-hero-image">
          <img [src]="post.hero" />
        </div>
      </div>
    </section>
  `,
})
export class PostHeroComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}
}
