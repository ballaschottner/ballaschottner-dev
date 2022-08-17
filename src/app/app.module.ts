import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
