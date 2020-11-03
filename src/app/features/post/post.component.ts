import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Posts } from '../../posts';
import { Post } from './../../models/post.interface';
import { HighlightService } from './../../shared/services/highlight.service';

@Component({
  selector: 'dev-posts',
  template: `
    <ng-container *ngIf="currentPost$ | async as currentPost">
      <dev-post-hero [post]="currentPost"></dev-post-hero>

      <dev-progress></dev-progress>

      <article class="post-wrapper">
        <scully-content></scully-content>
      </article>

      <dev-post-next></dev-post-next>
    </ng-container>
  `,
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostComponent implements OnInit, AfterViewChecked {
  currentPost$: Observable<Post>;

  constructor(private router: Router, private posts: Posts, private highlightService: HighlightService) {}

  ngOnInit() {
    this.currentPost$ = this.posts.posts$.pipe(map((posts) => posts.filter((e) => e.route === this.router.routerState.snapshot.url).pop()));
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
