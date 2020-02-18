import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AuthorArticlesComponent } from './author-articles/author-articles.component';
import { AuthorHeroComponent } from './author-hero/author-hero.component';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [AuthorComponent, AuthorHeroComponent, AuthorArticlesComponent],
  imports: [CommonModule, AuthorRoutingModule, SharedModule]
})
export class AuthorModule {}
