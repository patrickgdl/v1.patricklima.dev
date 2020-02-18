import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-hero',
  templateUrl: './post-hero.component.html'
})
export class PostHeroComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
