import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/ui/logo/logo.component';
import { LinkComponent } from './components/ui/link/link.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LogoComponent, LinkComponent, FooterComponent, SocialLinksComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
