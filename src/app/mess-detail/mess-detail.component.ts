import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mess } from '../mess.model';
import { MessService } from '../mess.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { GeolocationService } from '../geolocation.service';
import { Meetup } from '../meetup.model';

@Component({
  selector: 'app-mess-detail',
  templateUrl: './mess-detail.component.html',
  styleUrls: ['./mess-detail.component.css']
})

export class MessDetailComponent implements OnInit {
  messId: string;
  mess: any;
  zoom: number = 15;
  location: any;
  messLat: any;
  messLng: any;
  marker: marker;
  meetups;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messService: MessService,
    private geolocationService: GeolocationService
  ) { }

  ngOnInit() {
    this.messId = this.route.snapshot.params['id'];
    this.messService.getMessesbyId(this.messId).subscribe(messFB => {
      this.mess = messFB;
      this.location = messFB.location;

      this.geolocationService.insertLocation(this.location).subscribe(response => {
        this.messLat = response.results[0].geometry.location.lat;
        this.messLng = response.results[0].geometry.location.lng;

        var newMarker = {
          name: this.mess.name,
          lat: this.messLat,
          lng: this.messLng,
          draggable: false
        }
        this.marker = newMarker;
      });
    });
  }

  // toMeetupForm(selectedMess){
  //
  //   this.router.navigate(['messes/:id/meetup-form',selectedMess.$key]);
  // };

  submitForm(location: string, time: string, date: string){

    var newMeetup: Meetup = new Meetup(location, time, date, this.messId, this.location);
    var savedMeetup = this.messService.addMeetup(newMeetup);
    this.router.navigate(['/messes' + this.messId]);
    console.log(newMeetup);
  }
  startUpdatingMess(messToUpdate){
    // console.log(messToUpdate);
    this.messService.updateMess(messToUpdate);
  }
  startDeletingMess(messToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.messService.deleteMess(messToDelete);
    }
  }


}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
