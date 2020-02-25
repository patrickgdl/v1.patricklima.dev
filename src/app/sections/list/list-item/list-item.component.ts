import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-list-item',
  template: `
    <ng-container *ngIf="post">
      <a [routerLink]="[post.route]" class="article-link">
        <div class="article-data-outer">
          <div class="image-container">
            <img [src]="post.hero" class="article-image" />
          </div>

          <div class="article-data">
            <h2 class="article-title">
              {{ post.title }}
            </h2>
            <p class="article-excerpt">
              {{ post.description }}
            </p>
            <div class="article-metadata">{{ post.date | date: 'dd/MM/yyyy' }} • {{ post.timeToRead }} min de leitura</div>
          </div>
        </div>
      </a>
    </ng-container>
  `
})
export class ListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() narrow: boolean;

  constructor() {}

  ngOnInit() {}
}
