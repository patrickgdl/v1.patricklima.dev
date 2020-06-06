import { TwitterComponent } from './twitter.component';
import { LinkedinComponent } from './linkedin.component';
import { StackoverflowComponent } from './stackoverflow.component';
import { InstagramComponent } from './instagram.component';
import { NgModule } from '@angular/core';

import { SocialLinksComponent } from './social-links.component';
import { GithubComponent } from './github.component';

@NgModule({
  declarations: [SocialLinksComponent, GithubComponent, InstagramComponent, StackoverflowComponent, LinkedinComponent, TwitterComponent],
  exports: [SocialLinksComponent],
})
export class SocialLinksModule {}
