import { NgModule } from '@angular/core';

import { PaginatorModule } from './../../shared/components/paginator/paginator.module';
import { SocialLinksModule } from './../../shared/components/social-links/social-links.module';
import { AboutArticlesComponent } from './about-articles/about-articles.component';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent, AboutHeroComponent, AboutArticlesComponent],
  imports: [AboutRoutingModule, SocialLinksModule, PaginatorModule],
})
export class AboutModule {}
