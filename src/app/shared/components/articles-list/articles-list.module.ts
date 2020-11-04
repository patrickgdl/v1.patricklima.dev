import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaginatorModule } from '../paginator/paginator.module';
import { ArticlesListItemComponent } from './articles-list-item/articles-list-item.component';
import { ArticlesListComponent } from './articles-list.component';

@NgModule({
  imports: [CommonModule, PaginatorModule, RouterModule],
  exports: [ArticlesListComponent],
  declarations: [ArticlesListComponent, ArticlesListItemComponent],
  providers: [],
})
export class ArticlesListModule {}
