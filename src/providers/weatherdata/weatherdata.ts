import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable()
export class WeatherdataProvider {

  city: string;
  units: string;
  
  constructor(public http: HttpClient, public storage: Storage) {
  }

  getWeather(city, units): Observable<any>{
    console.log("get weather function calling")
    this.city = city;
    this.units = units;
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=' + this.units + '&APPID=39222a6ecc978e1fc574ba1d034df4d9');
    
  }
}