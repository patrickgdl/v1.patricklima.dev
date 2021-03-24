import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-about-hero',
  template: `
    <div class="author-hero">
      <div class="author-hero-image">
        <img src="assets/img/avatar.jpg" />
      </div>
      <h1 class="author-heading highlighter">Patrick Lima</h1>
      <p class="author-subheading">
        Sou desenvolvedor de software e atualmente trabalho como Analista de Sistemas na
        <a href="https://www.madeiramadeira.com.br/" class="highlighter" target="_blank" rel="noopener">MadeiraMadeira</a>. Eu principalmente desenvolvo front-end com Angular, React e
        CSS. Me aventurando recentemente com Stitches e Next.js. Aprendendo Python para Data Science e Machine Learning como especialização.
      </p>
      <!--div class="author-social">
        <div class="social-icon-outer">
          <div class="social-icon-container">
            <dev-social-links></dev-social-links>
          </div>
        </div>
      </div-->
    </div>
  `,
})
export class AboutHeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
