import { Component, OnInit } from '@angular/core';
import { MessService } from '../mess.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Meetup } from '../meetup.model';
import { WeatherService } from '../weather.service';

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

  constructor(
    private route: ActivatedRoute,
    private messService: MessService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.meetupId = this.route.snapshot.params['id'];
    this.messService.getMeetupById(this.meetupId).subscribe(meetupFB => {
      this.meetup = meetupFB;
      console.log(meetupFB)
      this.month = meetupFB.date.slice(5, 7);
      this.year = meetupFB.date.slice(8, 10);
      console.log(this.month)
      console.log(this.year)
      this.date = this.month + this.year

      console.log(this.date)
      this.weatherService.getWeather(this.date).subscribe(data => {
        this.tempHigh = data.trip.temp_high.avg.F;
        this.tempLow = data.trip.temp_low.avg.F;
        this.chanceRain = data.trip.chance_of.chanceofrainday.percentage;
        this.cloudCover = data.trip.cloud_cover.cond;
      })
    })
  }

}
