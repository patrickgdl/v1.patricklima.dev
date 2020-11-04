import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AvailablePosts } from './available-posts';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, HttpClientModule],
  providers: [
    {
      provide: AvailablePosts,
      useClass: AvailablePosts,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
