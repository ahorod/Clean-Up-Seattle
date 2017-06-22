import { Component, OnInit } from '@angular/core';
import { Mess } from '../mess.model';
import { Meetup } from '../meetup.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessService } from '../mess.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css']
})
export class MeetupListComponent implements OnInit {

  messes: FirebaseListObservable<any[]>;
  meetups;
  selectedMeetup = null;

  constructor(private route:ActivatedRoute, private router: Router,  private messService: MessService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.messService.getMeetups().subscribe(dataLastEmittedFromObserver => {
     this.meetups = dataLastEmittedFromObserver;
  });
  }

  beginUpdatingMeetup(meetupToUpdate){
    console.log(meetupToUpdate);
    this.messService.updateMeetup(meetupToUpdate);
    this.selectedMeetup = null;
  }
  beginDeletingMeetup(meetupToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.messService.deleteMeetup(meetupToDelete);
    }
  }

  editMeetup(meetup){
    this.selectedMeetup = meetup;
    console.log(this.selectedMeetup)
  }

  testWeather() {
    this.weatherService.getWeather().subscribe(data => {
      console.log('temp high in component', data.trip.temp_high.avg.F)
      console.log('temp low in component', data.trip.temp_low.avg.F)
      console.log('chance of rain in component', data.trip.chance_of.chanceofrainday.percentage)
      console.log('cloudy in component', data.trip.cloud_cover.cond)
    })
  }
}
