import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  apiKey = 'd27f9fa1eec747022c8c62ceb03c34e0'
  url;

  constructor(private http:Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
   }

   getWeather(cityName, cityCode) {
     return this.http.get(this.url+cityName+','+cityCode+'&units=metric'+'&APPID='+this.apiKey).map(res => res.json());
   }

}
