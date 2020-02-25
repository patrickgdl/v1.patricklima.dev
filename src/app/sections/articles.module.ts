import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from '../sections/articles/articles.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { ListComponent } from '../sections/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [HeroComponent, ArticlesComponent, ListComponent, ListItemComponent],
  exports: [HeroComponent, ArticlesComponent, ListComponent]
})
export class ArticlesModule {}
