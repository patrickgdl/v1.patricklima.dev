import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ArticlesModule } from './../sections/articles.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, ArticlesModule]
})
export class HomeModule {}
