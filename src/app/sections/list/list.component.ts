import { Component, Input, OnInit } from '@angular/core';

import { Post } from './../../models/post.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  @Input() posts: Post[];

  constructor() {}

  ngOnInit() {
  }
}
