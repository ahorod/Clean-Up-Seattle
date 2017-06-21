import { Component, OnInit } from '@angular/core';
import { Meetup } from '../meetup.model';
import { MessService } from '../mess.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.css']
})
export class MeetupFormComponent implements OnInit {
  messId: string;
  mess;
  meetups: FirebaseListObservable<any[]>;
  messLocation:any;

  constructor(private database: AngularFireDatabase, private router: Router, private route: ActivatedRoute, private messService: MessService) { }

  ngOnInit() {
    this.messId = this.route.snapshot.params['id'];
    this.messService.getMessesbyId(this.messId).subscribe(messFB =>{
      this.mess = messFB;
      this.messLocation = messFB.location;

    });
  }

  submitForm(location: string, time: string, date: string){

    var newMeetup: Meetup = new Meetup(location, time, date, this.messId, this.messLocation);
    var savedMeetup = this.messService.addMeetup(newMeetup);
    this.meetups = this.database.list('/messes/' + this.messId + '/meetups');
     this.meetups.push(savedMeetup);
     console.log(this.mess.meetups);
     this.router.navigate(['mess-list-page']);
     console.log(newMeetup);
  }

}
