import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Posts } from './posts';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, HttpClientModule],
  providers: [
    {
      provide: Posts,
      useClass: Posts,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
