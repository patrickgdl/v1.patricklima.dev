import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticlesModule } from './../../shared/components/articles/articles.module';
import { SocialLinksModule } from './../../shared/components/social-links/social-links.module';
import { AboutArticlesComponent } from './about-articles/about-articles.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent, AboutHeroComponent, AboutArticlesComponent],
  imports: [CommonModule, AboutRoutingModule, SocialLinksModule, ArticlesModule],
})
export class AboutModule {}
