import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LinkComponent } from '../components/icons/link/link.component';
import { LogoComponent } from '../components/icons/logo/logo.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    LinkComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    LinkComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
