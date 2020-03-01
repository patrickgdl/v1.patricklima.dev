import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BioComponent } from './components/bio/bio.component';
import { RowsComponent } from './components/icons/rows/rows.component';
import { TilesComponent } from './components/icons/tiles/tiles.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ArticlesComponent } from './components/sections/articles/articles.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ListItemComponent } from './components/sections/list/list-item/list-item.component';
import { ListComponent } from './components/sections/list/list.component';
import { SocialLinksModule } from './components/social-links/social-links.module';
import { Posts } from './posts';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TilesComponent, RowsComponent, PaginatorComponent, BioComponent, ListItemComponent, HeroComponent, ArticlesComponent, ListComponent],
  exports: [
    /* Vendor */
    CommonModule,
    RouterModule,
    /* Components */
    TilesComponent,
    RowsComponent,
    SocialLinksModule,
    PaginatorComponent,
    BioComponent,
    /* Sections */
    HeroComponent,
    ArticlesComponent,
    ListComponent
  ],
  providers: [
    {
      provide: Posts,
      useClass: Posts
    }
  ]
})
export class SharedModule {}
