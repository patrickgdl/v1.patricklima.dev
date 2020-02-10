import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@scullyio/ng-lib';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostRoutingModule, ComponentsModule]
})
export class PostModule {}
