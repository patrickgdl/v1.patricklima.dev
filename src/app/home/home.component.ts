import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Posts } from '../shared/posts';
import { Post } from './../models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private _posts: Posts) { }

  ngOnInit() {
    this.posts$ = this._posts.posts$;
  }

}
