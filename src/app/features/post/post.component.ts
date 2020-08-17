import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Posts } from '../../posts';
import { Post } from './../../models/post.interface';

@Component({
  selector: 'dev-posts',
  template: `
    <div class="wrapper">
      <ng-container *ngIf="currentPost$ | async as currentPost">
        <dev-post-hero [post]="currentPost"></dev-post-hero>
      </ng-container>
    </div>

    <dev-progress></dev-progress>

    <article class="post-content">
      <scully-content></scully-content>
    </article>

    <dev-post-next></dev-post-next>
  `,
  styles: [
    `
      header {
        border-bottom: 1px solid var(--divider);
        position: relative;
      }

      .wrapper {
        position: relative;
        z-index: 5;
        min-height: 600px;
        height: calc(100vh - 100px);
        display: flex;
        overflow: hidden;
        background: rgb(250, 250, 250);
      }

      @media (max-width: 768px) {
        .wrapper {
          background: linear-gradient(rgb(25, 28, 34), rgb(8, 8, 11) 3%);
        }
      }
    `,
  ],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostComponent implements OnInit {
  currentPost$: Observable<Post>;

  constructor(private _router: Router, private _posts: Posts) {}

  ngOnInit() {
    this.currentPost$ = this._posts.posts$.pipe(map((posts) => posts.filter((e) => e.route === this._router.routerState.snapshot.url).pop()));
  }
}
