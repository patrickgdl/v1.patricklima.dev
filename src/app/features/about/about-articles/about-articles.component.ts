import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AvailablePosts } from './../../../available-posts';
import { Post } from './../../../models/post.interface';

@Component({
  selector: 'dev-about-articles',
  template: `
    <section class="author-section">
      <div [ngClass]="{ 'author-alc': showBackground }">
        <div [ngClass]="{ section: showBackground }">
          <dev-articles-list [pairPosts]="pairPosts$ | async" [isList]="true"></dev-articles-list>
        </div>
      </div>
    </section>
  `,
})
export class AboutArticlesComponent implements OnInit {
  pairPosts$: Observable<Post[][]>;
  showBackground = true;

  constructor(private availablePosts: AvailablePosts, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.HandsetPortrait]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Matches small viewport or handset in portrait mode');
        this.showBackground = false;
      } else {
        this.showBackground = true;
      }
    });

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
