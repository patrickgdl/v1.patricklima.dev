import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginatorModule } from './../../shared/components/paginator/paginator.module';
import { ArticlesListItemComponent } from './articles/articles-list/articles-list-item/articles-list-item.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { BioComponent } from './hero/bio/bio.component';
import { HeroComponent } from './hero/hero.component';
import { RowsComponent } from './hero/rows.component';
import { TilesComponent } from './hero/tiles.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, PaginatorModule],
  declarations: [
    HomeComponent,
    HeroComponent,
    RowsComponent,
    TilesComponent,
    BioComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticlesListItemComponent,
  ]
})
export class HomeModule {}
