import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticlesModule } from './../../shared/components/articles/articles.module';
import { BioComponent } from './hero/bio/bio.component';
import { HeroComponent } from './hero/hero.component';
import { RowsComponent } from './hero/rows.component';
import { TilesComponent } from './hero/tiles.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ArticlesModule],
  declarations: [HomeComponent, HeroComponent, RowsComponent, TilesComponent, BioComponent, TechnologiesComponent],
})
export class HomeModule {}
