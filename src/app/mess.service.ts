import { Injectable } from '@angular/core';
import { Mess } from './mess.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Meetup } from './meetup.model';


@Injectable()
export class MessService {
  messes: FirebaseListObservable<any[]>;
  meetups: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.messes = database.list('messes');
    this.meetups = database.list('meetups');
  }

  getMesses() {
    return this.messes;
  }

  getMeetups(){
    return this.meetups;
  }

  addMess(newMess: Mess) {
    this.messes.push(newMess);
  }

  addMeetup(newMeetup: Meetup) {
    var meetId = this.meetups.push(newMeetup).key;
    return meetId;
  }

  getMessesbyId(id){
    return this.database.object('/messes/' + id);
  }

  getMeetupById(meetupId: string){
    return this.database.object('/meetups/' + meetupId);
  }

  updateMeetup(localUpdatedMeetup){
      var meetupEntryInFirebase =
       this.getMeetupById(localUpdatedMeetup.$key);
      meetupEntryInFirebase.update({location: localUpdatedMeetup.location,
                                  time: localUpdatedMeetup.time,
                                  date: localUpdatedMeetup.date});
    }

  }
