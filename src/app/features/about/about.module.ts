import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { AboutArticlesComponent } from './about-articles/about-articles.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent, AboutHeroComponent, AboutArticlesComponent],
  imports: [SharedModule, AboutRoutingModule]
})
export class AboutModule {}
