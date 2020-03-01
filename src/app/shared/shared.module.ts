import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BioComponent } from './components/bio/bio.component';
import { RowsComponent } from './components/icons/rows/rows.component';
import { TilesComponent } from './components/icons/tiles/tiles.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SocialLinksModule } from './components/social-links/social-links.module';
import { Posts } from './posts';

@NgModule({
  declarations: [TilesComponent, RowsComponent, PaginatorComponent, BioComponent],
  exports: [CommonModule, RouterModule, TilesComponent, RowsComponent, PaginatorComponent, BioComponent, SocialLinksModule],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: Posts,
      useClass: Posts
    }
  ]
})
export class SharedModule {}
