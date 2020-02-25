import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Posts } from '../shared/posts';
import { Post } from './../models/post.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pairPosts$: Observable<Post[][]>;

  constructor(private _posts: Posts) {}

  ngOnInit() {
    /**
     * Taking the flat array of articles [{}, {}, {}...]
     * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
     * This makes it simpler to create the grid
     */
    this.pairPosts$ = this._posts.posts$.pipe(
      map(posts => {
        return posts.reduce((result, value, index, array) => {
          if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
          }
          return result;
        }, []);
      })
    );
  }
}
