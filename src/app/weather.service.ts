import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(date) {
    var response = this.http.get('http://api.wunderground.com/api/Your_Key/planner_MMDDMMDD/q/CA/San_Francisco.json')
  }

}
