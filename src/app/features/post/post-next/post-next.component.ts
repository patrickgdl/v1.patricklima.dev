import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-post-next',
  template: `
    <!-- Prints the next 2 articles in the same section or, if less or 2 found, the first (and potentially second) of the section. -->

    <!--/* declaring next empty slice */-->

    <!--/* Checking if current article has a PrevInSection (Prev as we are ordering dsc here.) */-->

    <!--/* Checking for that "next" article own "next" to fill the "second next" */-->

    <!--/* If the number of found "next article" is less than two we need to find the first and potentially second article
of the whole section and append them to our $next slice. */-->

    <!--/* We use that diff number (if > 0) to grab the first x number of articles */-->

    <section id="articleNext" class="section">
      <h3 class="footer-next-heading">Mais artigos de Patrick Lima</h3>
      <div class="footer-spacer"></div>
      <div class="next-articles-grid" numberOfArticles="{numberOfArticles}">
        <div class="post-row">
          <a href="" class="article-link" id="article-link-bigger">
            <div>
              <div class="image-container">
                <img src="" class="article-image" />
              </div>
              <div>
                <h2 class="article-title">
                  Titulo do Artigo
                </h2>
                <p class="article-excerpt">
                  Descrição do Artigo
                </p>
                <div class="article-metadata">
                  1 de Janeiro de 2006" · 5 min leitura
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class PostNextComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
