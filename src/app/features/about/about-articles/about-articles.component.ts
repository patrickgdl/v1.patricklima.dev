import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-about-articles',
  template: `
    <section class="section author-alc-section">
      <div class="author-alc">
        <div class="post-row-alt">
          <a href="" class="article-link" >
            <div class="list-item-row">
              <div class="image-container">
                <img src="" class="article-image" />
              </div>
              <div>
                <h2 class="article-title">
                  Titulo do post
                </h2>
                <p class="article-excerpt">
                  Descrição do post
                </p>
                <div class="article-metadata">
                  2 de Janeiro de 2006 • 6 min leitura
                </div>
              </div>
            </div>
          </a>
          <a href="" style="opacity: 0;" class="article-link"> </a>
        </div>
      </div>
    </section>
  `,
})
export class AboutArticlesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
