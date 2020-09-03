import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Posts } from '../../posts';
import { Post } from './../../models/post.interface';

@Component({
  selector: 'dev-posts',
  template: `
    <ng-container *ngIf="currentPost$ | async as currentPost">
      <dev-post-hero [post]="currentPost"></dev-post-hero>
    </ng-container>

    <dev-progress></dev-progress>

    <section class="section">
      <article class="post-content">
        <scully-content></scully-content>
      </article>
    </section>

    <dev-post-next></dev-post-next>
  `,
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
