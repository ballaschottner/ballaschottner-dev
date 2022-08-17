import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
