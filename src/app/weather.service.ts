import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  weatherData: any;
  tempHigh: any;
  tempLow: any;
  chanceRain: any;
  cloudCover: any;

  constructor(private http: Http) { }

  getWeather(mmdd) {
    var result = this.http.get('http://api.wunderground.com/api/91d19c4aae9b5ff5/planner_' + mmdd + mmdd + '/q/WA/Seattle.json').map(res => res.json())
    return result;
  }
}
