import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaginatorModule } from '../paginator/paginator.module';
import { ArticlesListItemComponent } from './articles-list/articles-list-item/articles-list-item.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [CommonModule, PaginatorModule, RouterModule],
  exports: [ArticlesComponent],
  declarations: [ArticlesComponent, ArticlesListComponent, ArticlesListItemComponent],
  providers: [],
})
export class ArticlesModule {}
