import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticlesComponent } from '../sections/articles/articles.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { ListComponent } from '../sections/list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HeroComponent, ArticlesComponent, ListComponent],
  exports: [HeroComponent, ArticlesComponent, ListComponent]
})
export class ArticlesModule {}
