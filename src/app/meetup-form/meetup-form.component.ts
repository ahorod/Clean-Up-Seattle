import { Component, OnInit } from '@angular/core';
import { Meetup } from '../meetup.model';
import { MessService } from '../mess.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.css']
})
export class MeetupFormComponent implements OnInit {

  constructor(private router: Router, private messService: MessService) { }

  ngOnInit() {
  }
  submitButton(location: string, time: string, date: string, messId: string){
    var newMeetup: Meetup = new Meetup(location, time, date, messId);
     this.messService.addMeetup(newMeetup);
     this.router.navigate(['mess-list-page']);
     console.log(newMeetup);
  }

}
