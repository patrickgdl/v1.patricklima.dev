import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@scullyio/ng-lib';

import { SharedModule } from '../shared/shared.module';
import { PostHeroAuthorComponent } from './post-hero/post-hero-author/post-hero-author.component';
import { PostHeroComponent } from './post-hero/post-hero.component';
import { PostNextComponent } from './post-next/post-next.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [PostComponent, PostHeroAuthorComponent, PostHeroComponent, PostNextComponent, ProgressComponent],
  imports: [CommonModule, PostRoutingModule, SharedModule, ComponentsModule]
})
export class PostModule {}
