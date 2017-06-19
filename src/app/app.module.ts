import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessListPageComponent } from './mess-list-page/mess-list-page.component';
import { MessesListComponent } from './messes-list/messes-list.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mess-list-page',
    component: MessListPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessListPageComponent,
    MessesListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
