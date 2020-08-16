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
        <p class="bio-text">
          De Araucária, Paraná - Brasil. Angular e CSS. Aprendendo Python para Data Science e Machine Learning.
        </p>
      </a>
    </div>
  `,
  styles: [],
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
