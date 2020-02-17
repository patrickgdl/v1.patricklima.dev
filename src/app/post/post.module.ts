import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AuthorComponent } from './hero/author/author.component';
import { HeroComponent } from './hero/hero.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [PostComponent, AuthorComponent, HeroComponent, ProgressComponent],
  imports: [CommonModule, PostRoutingModule, ScullyLibModule]
})
export class PostModule {}
