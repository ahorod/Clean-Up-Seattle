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
import { MessAddComponent } from './mess-add/mess-add.component';
import { MessDetailComponent } from './mess-detail/mess-detail.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { MessService } from './mess.service';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'mess-list-page',
    component: MessListPageComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'messes/:id',
    component: MessDetailComponent
  },{
    path: 'mess-add',
    component: MessAddComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessListPageComponent,
    MessesListComponent,
    AboutComponent,
    MessAddComponent,
    MessDetailComponent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [MessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
