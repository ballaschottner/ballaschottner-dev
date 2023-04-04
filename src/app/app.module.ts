import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { WorkComponent } from './modules/work/work.component';
import { ContactComponent } from './modules/contact/contact.component';


@NgModule({
  declarations: [AppComponent, AboutMeComponent, HomeComponent, HeaderComponent, FooterComponent, WorkComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
