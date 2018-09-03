import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  location = {
    cityName: 'London',
    cityCode: 'uk'
  };

  weather:any;
  value:any;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.value = localStorage.getItem('location');
    if(this.value != null) {
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
        cityName: 'London',
        cityCode: 'uk'
      };
    }

    this.weatherService.getWeather(this.location.cityName, this.location.cityCode).subscribe((response) => this.weather = response); 
  }
}
