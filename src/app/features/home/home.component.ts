import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AvailablePosts } from '../../available-posts';
import { Post } from './../../models/post.interface';

@Component({
  selector: 'dev-home',
  template: `
    <div class="hero">
      <dev-hero></dev-hero>

      <dev-bio></dev-bio>

      <!--dev-last-articles (clickedGrid)="makeGrid()" (clickedRows)="makeRows()"></dev-last-articles>

      <dev-articles-list [pairPosts]="pairPosts$ | async" [isList]="isList"></dev-articles-list>

      <dev-technologies></dev-technologies-->
    </div>
  `,
})
export class HomeComponent implements OnInit {
  pairPosts$: Observable<Post[][]>;
  isList = false;

  constructor(private availablePosts: AvailablePosts) {}

  ngOnInit() {
    /**
     * Taking the flat array of articles [{}, {}, {}...]
     * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
     * This makes it simpler to create the grid
     */
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

  makeGrid() {
    this.isList = false;
  }

  makeRows() {
    this.isList = true;
  }
}
