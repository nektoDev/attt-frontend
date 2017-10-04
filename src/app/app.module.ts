import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TorrentsComponent } from './torrents/torrents.component';

@NgModule({
  declarations: [
    AppComponent,
    TorrentsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
