import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Posts } from '../../posts';
import { Post } from './../../models/post.interface';

@Component({
  selector: 'dev-posts',
  template: `
    <!--<pre>{{currentPost$ | async | json}}</pre>-->
    <section class="section">
      <ng-container *ngIf="currentPost$ | async as currentPost">
        <dev-post-hero [post]="currentPost"></dev-post-hero>
      </ng-container>

      <dev-progress></dev-progress>

      <article class="post-content">
        <scully-content></scully-content>
      </article>

      <dev-post-next></dev-post-next>
    </section>
  `,
  styles: ['::slotted(h1) {color:rgb(51, 6, 37); background-color: rgb(248, 211, 236); padding: 5px; border-radius: 5px; width: fit-content;}'],
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
