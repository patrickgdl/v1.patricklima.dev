import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaginatorModule } from './../paginator/paginator.module';
import { ArticlesComponent } from './articles.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { Posts } from './posts';

@NgModule({
  imports: [CommonModule, RouterModule, PaginatorModule],
  declarations: [ArticlesComponent, ListComponent, ListItemComponent],
  exports: [ArticlesComponent],
  providers: [
    {
      provide: Posts,
      useClass: Posts,
    },
  ],
})
export class ArticlesModule {}
