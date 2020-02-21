import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AboutArticlesComponent } from './about-articles/about-articles.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent, AboutHeroComponent, AboutArticlesComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule]
})
export class AboutModule {}
