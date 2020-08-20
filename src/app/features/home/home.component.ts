import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './../../models/post.interface';
import { Posts } from '../../posts';

@Component({
  selector: 'dev-home',
  template: `
    <dev-hero (clickedGrid)="makeGrid()" (clickedRows)="makeRows()"></dev-hero>

    <dev-articles [pairPosts]="pairPosts$ | async" [isList]="isList"></dev-articles>

    <dev-technologies></dev-technologies>
  `,
})
export class HomeComponent implements OnInit {
  pairPosts$: Observable<Post[][]>;
  isList = false;

  constructor(private _posts: Posts) {}

  ngOnInit() {
    /**
     * Taking the flat array of articles [{}, {}, {}...]
     * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
     * This makes it simpler to create the grid
     */
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

  makeGrid() {
    this.isList = false;
  }

  makeRows() {
    this.isList = true;
  }
}
