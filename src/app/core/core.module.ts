import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, LinkComponent, FooterComponent],
  exports: [HeaderComponent, LogoComponent, LinkComponent, FooterComponent],
  imports: [BrowserModule, SharedModule, RouterModule]
})
export class CoreModule {}
