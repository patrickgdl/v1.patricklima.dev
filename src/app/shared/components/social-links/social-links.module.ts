import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconsModule } from './../icons/icons.module';
import { SocialLinksComponent } from './social-links.component';

@NgModule({
  imports: [CommonModule, IconsModule],
  declarations: [SocialLinksComponent],
  exports: [SocialLinksComponent],
})
export class SocialLinksModule {}
