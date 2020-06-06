import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './../../models/post.interface';
import { Posts } from './../../shared/posts';

@Component({
  selector: 'dev-home',
  template: `
    <dev-hero (clickedGrid)="makeGrid()" (clickedRows)="makeRows()"></dev-hero>

    <dev-articles [pairPosts]="pairPosts$ | async" [isList]="isList"></dev-articles>
  `,
})
export class HomeComponent implements OnInit {
  pairPosts$: Observable<Post[][]>;
  isList = false;
  listRemoveWidth: MediaQueryList;
  listAddWidth: MediaQueryList;

  constructor(private _posts: Posts) {}

  ngOnInit() {
    /**
     * Taking the flat array of articles [{}, {}, {}...]
     * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
     * This makes it simpler to create the grid
     */
    this.pairPosts$ = this._posts.posts$.pipe(
      map((posts) => {
        return posts.reduce((result, value, index, array) => {
          if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
          }
          return result;
        }, []);
      })
    );

    this.listRemoveWidth = window.matchMedia('(max-width: 735px)');
    this.listAddWidth = window.matchMedia('(min-width: 735px)');
  }

  @HostListener('window:resize', ['$event'])
  resize(event: any) {
    this.adjustListAtMobile();
  }

  adjustListAtMobile() {
    if (this.listRemoveWidth.matches) {
      document.getElementById('articlesList').classList.remove('articles-list-container-alt');
    } else if (this.listAddWidth.matches && this.isList) {
      document.getElementById('articlesList').classList.add('articles-list-container-alt');
    }
  }

  makeGrid() {
    document.getElementById('articlesList').classList.remove('articles-list-container-alt');
    this.isList = false;
  }

  makeRows() {
    document.getElementById('articlesList').classList.add('articles-list-container-alt');
    this.isList = true;
  }
}
