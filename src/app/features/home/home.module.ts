import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticlesListModule } from '../../shared/components/articles-list/articles-list.module';
import { BioComponent } from './bio/bio.component';
import { HeroComponent } from './hero/hero.component';
import { RowsComponent } from './hero/rows.component';
import { TilesComponent } from './hero/tiles.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LastArticlesComponent } from './last-articles/last-articles.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ArticlesListModule],
  declarations: [HomeComponent, HeroComponent, RowsComponent, TilesComponent, BioComponent, TechnologiesComponent, LastArticlesComponent],
})
export class HomeModule {}
