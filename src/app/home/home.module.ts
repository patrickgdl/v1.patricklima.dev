import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticlesModule } from './../sections/articles.module';
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ArticlesModule
  ]
})
export class HomeModule { }
