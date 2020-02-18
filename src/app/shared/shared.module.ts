import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RowsComponent } from '../components/icons/rows/rows.component';
import { TilesComponent } from '../components/icons/tiles/tiles.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { BioModule } from './../components/bio/bio.module';
import { Posts } from './posts';

@NgModule({
  declarations: [TilesComponent, RowsComponent, PaginatorComponent],
  exports: [TilesComponent, RowsComponent, PaginatorComponent, BioModule],
  imports: [CommonModule],
  providers: [
    {
      provide: Posts,
      useClass: Posts
    }
  ]
})
export class SharedModule {}
