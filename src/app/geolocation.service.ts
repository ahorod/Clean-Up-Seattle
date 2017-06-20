import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GeolocationService {

  constructor(private http: Http) { }

  insertLocation(messLocation) {
    var result =  this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+messLocation+'&key=AIzaSyCWlu9d_33gpEvNB6FdA3G08ZjrQYi4ets').map(res => res.json());
    return result;
  }

}
