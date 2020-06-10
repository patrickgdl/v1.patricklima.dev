import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticlesModule } from './../../shared/components/articles/articles.module';
import { BioModule } from './../../shared/components/bio/bio.module';
import { HeroComponent } from './hero/hero.component';
import { RowsComponent } from './hero/rows.component';
import { TilesComponent } from './hero/tiles.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, RowsComponent, TilesComponent],
  imports: [CommonModule, HomeRoutingModule, ArticlesModule, BioModule],
})
export class HomeModule {}
