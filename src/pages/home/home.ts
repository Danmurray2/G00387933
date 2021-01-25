import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { WeatherdataProvider } from '../../providers/weatherdata/weatherdata';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

disableNews: boolean;
cityFound: boolean;
units: string;
cityName: string; 
//Weather API Variables
 weatherForecast: string[];
 city: string; 
 weatherConditions: string;
 weatherDescription: string;
 temp: number;
 feelsLike: number;
 country: string;
 icon: string;
 //News Story Variables
 newsStories: any [];
 totalStories: number;
 articleTitle: string;
 newsDescription: string;
 urlImage: string;
 newsURL: string;

  constructor(public navCtrl: NavController, private http: HttpClient, private wdp: WeatherdataProvider, public storage:Storage, public news: NewsProvider) { 
  }
 
  click(){ // Pushes Setting Page
    this.navCtrl.push(SettingsPage);
  }

  ionViewWillEnter(){ //Without initial data, news button will not be clickable
    if(this.city == null){
      this.disableNews = true;
      this.cityFound = false;
    }
    this.storage.get("data") //retrieving stored data
    .then((data) => { 
      if (data == null ) {
        console.log("no data received");
      } 
      else { 
          this.disableNews = false;  
          this.cityFound = true;   
          this.cityName = data.city;    
          this.units = data.units; //setting variables to stored variable name
          this.wdp.getWeather(this.cityName, this.units).subscribe(data1 => { //calling provider to retrieve url.             
                this.weatherForecast = data1;               
                this.city = data1.name;                       
                this.weatherConditions = data1.weather[0].main;              
                this.temp = data1.main.temp;            
                this.feelsLike = data1.main.feels_like;          
                this.weatherDescription = data1.weather[0].description;
                console.log(this.weatherForecast);  
                this.country = data1.sys.country;
                this.icon = data1.weather[0].icon;
                 
        })
      }   
    })
    .catch((error) => alert("Error"));{}  
  }

  newsSearch(){ //calling News Provider to to retrieve url
    this.news.getNews(this.country).subscribe((data) => { 
      this.newsStories = data.articles;
      this.totalStories = data.totalResults;
      this.newsURL = data.url;
     
    })
  
   }
}

 
 

// 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=a46d7c74f1ab47adb09f0d631c97038c';

// https://ionicframework.com/docs/native/in-app-browser in app browser