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
          <a href="https://www.corbion.com/" target="_blank" rel="noopener">Corbion</a>. Eu desenvolvo principalmente no front-end e sou fã de Angular e CSS.
          Aspirante a cientista de dados e interessado em Python.
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
