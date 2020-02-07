import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LinkComponent } from '../components/icons/ui/link/link.component';
import { LogoComponent } from '../components/icons/ui/logo/logo.component';
import { SocialLinksComponent } from '../components/social-links/social-links.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    LinkComponent,
    FooterComponent,
    SocialLinksComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    LinkComponent,
    FooterComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
