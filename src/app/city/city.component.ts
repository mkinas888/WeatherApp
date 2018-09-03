import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cityName:string;
  cityCode:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  save() {
    let location = {
      cityName:this.cityName,
      cityCode:this.cityCode
    }
    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['forecast']);
  }

}
