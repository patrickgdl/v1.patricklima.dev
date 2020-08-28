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
      <div class="post-time-to-read">{{ post.timeToRead }} min de leitura</div>
    </section>
    <div class="article-hero-image">
      <div class="nkuvch-0 vLBY gatsby-image-wrapper" style="position:relative;overflow:hidden">
        <div style="width:100%;padding-bottom:68.75%"></div>
        <picture>
          <source
            type="image/webp"
            srcset="
              {{post.coverImage}}?w=800&amp;h=550&amp;q=100&amp;fm=webp     800w,
              {{post.coverImage}}??w=1600&amp;h=1100&amp;q=100&amp;fm=webp 1600w,
              {{post.coverImage}}?w=3200&amp;h=2200&amp;q=100&amp;fm=webp  3200w
            "
            sizes="(max-width: 3200px) 100vw, 3200px"
          />
          <source
            srcset="{{post.coverImage}}?w=800&h=550&q=100 800w, {{post.coverImage}}?w=1600&h=1100&q=100 1600w, {{post.coverImage}}?w=3200&h=2200&q=100 3200w"
            sizes="(max-width: 3200px) 100vw, 3200px"
          />
          <img
            sizes="(max-width: 3200px) 100vw, 3200px"
            srcset="{{post.coverImage}}?w=800&h=550&q=100 800w, {{post.coverImage}}?w=1600&h=1100&q=100 1600w, {{post.coverImage}}?w=3200&h=2200&q=100 3200w"
            src="{{ post.coverImage }}?w=3200&h=2200&q=100"
            alt=""
            loading="lazy"
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;"
          />
        </picture>
      </div>
    </div>
  `,
  styleUrls: ['./post-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostHeroComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}
}
