import { Component, OnInit } from '@angular/core';
import { Mess } from '../mess.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessService } from '../mess.service';
import { GeolocationService } from '../geolocation.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-messes-list',
  templateUrl: './messes-list.component.html',
  styleUrls: ['./messes-list.component.css']
})
export class MessesListComponent implements OnInit {
  messes: FirebaseListObservable<any[]>;
  zoom: number = 12;
  lat: number = 47.6062;
  lng: number = -122.3321;
  result: any;
  inputtedLat: any;
  inputtedLng: any;
  inputtedLocation: any;
  markers: marker[] = [];

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private messService: MessService,
    private geolocationService: GeolocationService
  ) { }

  ngOnInit() {
    this.messes = this.messService.getMesses();

    this.messService.getMesses().subscribe(allMesses => {
      allMesses.forEach(mess => {
        this.inputtedLocation = mess.location;

        this.geolocationService.insertLocation(this.inputtedLocation).subscribe(response => {
          this.inputtedLat = response.results[0].geometry.location.lat;
          this.inputtedLng = response.results[0].geometry.location.lng;

          var newMarker = {
            name: mess.location.toUpperCase(),
            lat: this.inputtedLat,
            lng: this.inputtedLng,
            draggable: false,
            id: mess.$key
          };
          this.markers.push(newMarker);
        });
      });
    });
  }

  renderDetail(clickedMess){
    this.router.navigate(['messes', clickedMess.$key]);
  }

  clickMarker(clickedMarker){
    this.router.navigate(['messes', clickedMarker.id]);
  }

}

// Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
  id: any;
}
