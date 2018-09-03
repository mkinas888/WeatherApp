import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CityComponent } from './city/city.component';
import { WeatherService } from './weather.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

const appRoutes = [
  {
    path:'',component:ForecastComponent
  },
  {
    path:'city',component:CityComponent
  },
  {
    path:'forecast',component:ForecastComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
