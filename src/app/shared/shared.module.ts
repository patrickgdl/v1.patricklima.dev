import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BioComponent } from '../components/bio/bio.component';
import { RowsComponent } from '../components/icons/ui/rows/rows.component';
import { TilesComponent } from '../components/icons/ui/tiles/tiles.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { ArticlesComponent } from '../sections/articles/articles/articles.component';
import { HeroComponent } from '../sections/articles/hero/hero.component';
import { ListComponent } from '../sections/articles/list/list.component';

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
  imports: [CommonModule]
})
export class SharedModule {}
