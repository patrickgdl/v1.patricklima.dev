import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BioComponent } from '../components/bio/bio.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LinkComponent } from '../components/icons/ui/link/link.component';
import { LogoComponent } from '../components/icons/ui/logo/logo.component';
import { RowsComponent } from '../components/icons/ui/rows/rows.component';
import { TilesComponent } from '../components/icons/ui/tiles/tiles.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { SocialLinksComponent } from '../components/social-links/social-links.component';
import { ArticlesComponent } from '../sections/articles/articles/articles.component';
import { HeroComponent } from '../sections/articles/hero/hero.component';
import { ListComponent } from '../sections/articles/list/list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    LinkComponent,
    FooterComponent,
    SocialLinksComponent,
    HeroComponent,
    ArticlesComponent,
    BioComponent,
    TilesComponent,
    RowsComponent,
    ListComponent,
    PaginatorComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    LinkComponent,
    FooterComponent,
    SocialLinksComponent,
    HeroComponent,
    ArticlesComponent,
    BioComponent,
    TilesComponent,
    RowsComponent,
    ListComponent,
    PaginatorComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
