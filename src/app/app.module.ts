import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessesListComponent } from './messes-list/messes-list.component';
import { AboutComponent } from './about/about.component';
import { MessAddComponent } from './mess-add/mess-add.component';
import { MessDetailComponent } from './mess-detail/mess-detail.component';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';
import { MeetupListComponent } from './meetup-list/meetup-list.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MessService } from './mess.service';
import { GeolocationService } from './geolocation.service';
import { UserService } from './user.service';
import { WeatherService } from './weather.service';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home',component: HomeComponent },
  { path: 'messes-list',component: MessesListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'messes/:id', component: MessDetailComponent },
  { path: 'mess-add', component: MessAddComponent },
  { path: 'messes/:id/meetup-form', component: MeetupFormComponent },
  { path: 'meetups', component: MeetupListComponent },
  { path: 'meetups/:id', component: MeetupDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessesListComponent,
    AboutComponent,
    MessAddComponent,
    MessDetailComponent,
    MeetupFormComponent,
    MeetupListComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    MeetupDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWlu9d_33gpEvNB6FdA3G08ZjrQYi4ets'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    MessService,
    GeolocationService,
    UserService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
