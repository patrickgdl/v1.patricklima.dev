import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/models/post.interface';
import { Posts } from 'src/app/posts';

@Component({
  selector: 'dev-about-articles',
  template: `
    <section class="section author-alc-section">
      <div class="author-alc">
        <!-- <div class="post-row-alt">
        </div> -->

        <dev-articles [pairPosts]="pairPosts$ | async" [isList]="true"></dev-articles>
      </div>
    </section>
  `,
})
export class AboutArticlesComponent implements OnInit {
  pairPosts$: Observable<Post[][]>;

  constructor(private _posts: Posts) {}

  ngOnInit() {
    this.pairPosts$ = this._posts.posts$.pipe(
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
