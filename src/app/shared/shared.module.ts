import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BioComponent } from '../components/bio/bio.component';
import { RowsComponent } from '../components/icons/rows/rows.component';
import { TilesComponent } from '../components/icons/tiles/tiles.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { ArticlesComponent } from '../sections/articles/articles.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { ListComponent } from '../sections/list/list.component';
import { Posts } from './posts';

@NgModule({
  declarations: [
    HeroComponent,
    ArticlesComponent,
    BioComponent,
    TilesComponent,
    RowsComponent,
    ListComponent,
    PaginatorComponent
  ],
  exports: [
    HeroComponent,
    ArticlesComponent,
    BioComponent,
    TilesComponent,
    RowsComponent,
    ListComponent,
    PaginatorComponent
  ],
  imports: [CommonModule],
  providers: [
    {
      provide: Posts,
      useClass: Posts
    }
  ]
})
export class SharedModule {}
