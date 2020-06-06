import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from './components/articles/articles.component';
import { ListItemComponent } from './components/articles/list/list-item/list-item.component';
import { ListComponent } from './components/articles/list/list.component';
import { BioComponent } from './components/bio/bio.component';
import { HeroComponent } from './components/hero/hero.component';
import { RowsComponent } from './components/hero/icons/rows.component';
import { TilesComponent } from './components/hero/icons/tiles.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SocialLinksModule } from './components/social-links/social-links.module';
import { Posts } from './posts';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginatorComponent, BioComponent, ListItemComponent, HeroComponent, ArticlesComponent, ListComponent, TilesComponent, RowsComponent],
  exports: [
    /* Vendor */
    CommonModule,
    RouterModule,
    /* Components */
    SocialLinksModule,
    PaginatorComponent,
    BioComponent,
    HeroComponent,
    ArticlesComponent,
    ListComponent,
  ],
  providers: [
    {
      provide: Posts,
      useClass: Posts,
    },
  ],
})
export class SharedModule {}
