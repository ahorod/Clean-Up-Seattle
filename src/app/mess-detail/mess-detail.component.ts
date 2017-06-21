import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mess } from '../mess.model';
import { MessService } from '../mess.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { GeolocationService } from '../geolocation.service';

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
    this.meetups = this.mess.meetups;
  }

  // toMeetupForm(selectedMess){
  //
  //   this.router.navigate(['messes/:id/meetup-form',selectedMess.$key]);
  // };
}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
