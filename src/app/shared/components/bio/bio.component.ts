import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-bio',
  template: `
    <div class="bio-container">
      <a [routerLink]="['/about']" class="bio-link">
        <div class="bio-avatar">
          <div class="bio-avatar-inner">
            <img class="author-avatar" src="assets/img/avatar.jpg" />
          </div>
        </div>
      </a>
    </div>
  `,
  styles: []
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
