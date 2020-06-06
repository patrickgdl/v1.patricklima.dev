import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-about-hero',
  template: `
    <section class="section">
      <div class="author-hero">
        <div class="author-hero-image">
          <img src="assets/img/avatar.jpg" />
        </div>
        <h1 class="author-heading">Patrick Lima</h1>
        <p class="author-subheading">
          Sou desenvolvedor de software e atualmente trabalho como analista na
          <a href="https://www.corbion.com/" target="_blank" rel="noopener">Corbion</a>. Eu principalmente desenvolvo front-end e sou um fã de Angular e CSS.
          Tento compartilhar tudo que aprendo aqui. Também sou aspirante a cientista de dados e interessado na área.
        </p>
        <div class="author-social">
          <div class="social-icon-outer authors-sio">
            <div class="social-icon-container">
              <dev-social-links></dev-social-links>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutHeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
