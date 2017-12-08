import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShortenerComponent } from './shortener/shortener.component';
import { TopComponent } from './hits/top/top.component';
import { TotalComponent } from './hits/total/total.component';
import { ApiPathsService } from './services/api-paths.service';
import { ApiRequestService } from './services/api-request.service';
import { HitsChangeService } from './services/hits-change.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ShortenerComponent,
    TopComponent,
    TotalComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiPathsService,
    ApiRequestService,
    HitsChangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
