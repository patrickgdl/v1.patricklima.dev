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
          Atualmente trabalho como analista na
          <a href="https://www.corbion.com/" target="_blank" rel="noopener">Corbion</a>. Eu desenvolvo principalmente front-end com Angular e CSS. Aprendendo
          Python para Data Science e Machine Learning.
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
