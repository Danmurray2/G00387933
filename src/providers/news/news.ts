import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsProvider {
  country: string
  constructor(public http: HttpClient) {
  }


  getNews(country: string): Observable<any> {
    this.country = country;
    return this.http.get('http://newsapi.org/v2/top-headlines?country=' + country + '&pageSize=5&apiKey=a46d7c74f1ab47adb09f0d631c97038c');
  }
}
