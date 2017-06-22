import { Component, OnInit } from '@angular/core';
import { MessService } from '../mess.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Meetup } from '../meetup.model';
import { WeatherService } from '../weather.service';
import { UserService } from '../user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-meetup-detail',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailComponent implements OnInit {
  meetupId: any;
  meetup: any;
  month: any;
  year: any;
  date: any;
  tempHigh: any;
  tempLow: any;
  chanceRain: any;
  cloudCover: any;
  activeUser: any;
  meetupForCounter: any;
  counter: number;
  updatedCounter: number;

  constructor(
    private route: ActivatedRoute,
    private messService: MessService,
    private weatherService: WeatherService,
    private userService: UserService,
    public afAuth: AngularFireAuth
  ) {
    this.activeUser = afAuth.authState;
  }

  ngOnInit() {
    this.meetupId = this.route.snapshot.params['id'];
    this.messService.getMeetupById(this.meetupId).subscribe(meetupFB => {
      this.meetup = meetupFB;
      this.month = meetupFB.date.slice(5, 7);
      this.year = meetupFB.date.slice(8, 10);
      this.date = this.month + this.year;
      this.counter = meetupFB.signUps;

      this.weatherService.getWeather(this.date).subscribe(data => {
        this.tempHigh = data.trip.temp_high.avg.F;
        this.tempLow = data.trip.temp_low.avg.F;
        this.chanceRain = data.trip.chance_of.chanceofrainday.percentage;
        this.cloudCover = data.trip.cloud_cover.cond;
      })
    })

    this.activeUser.subscribe(response => {
      console.log(response)
    })
  }

  signUp() {
    // this.meetupForCounter = this.messService.getMeetupById(this.meetupId).subscribe(meetupFB => {
    //   this.meetupForCounter = meetupFB;
    //   this.updatedCounter = this.meetupForCounter + 1;
    //   this.messService.updateCounter(meetupFB, this.updatedCounter);
    // });
  }

}
