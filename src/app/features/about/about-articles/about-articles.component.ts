import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AvailablePosts } from './../../../available-posts';
import { Post } from './../../../models/post.interface';

@Component({
  selector: 'dev-about-articles',
  template: `
    <section class="section author-section">
      <div class="author-alc">
        <div class="section">
          <dev-articles-list [pairPosts]="pairPosts$ | async" [isList]="true"></dev-articles-list>
        </div>
      </div>
    </section>
  `,
})
export class AboutArticlesComponent implements OnInit {
  pairPosts$: Observable<Post[][]>;

  constructor(private availablePosts: AvailablePosts) {}

  ngOnInit() {
    this.pairPosts$ = this.availablePosts.posts$.pipe(
      map((posts) => {
        // TODO: order by date and show only published
        const pair = posts.reduce((result, value, index, array) => {
          if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
          }
          return result;
        }, []);
        return pair;
      })
    );
  }
}
