import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  option: string;
  cityName: string;
  cityNameSave: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  }
 
  saveChoice(){
      this.cityNameSave = this.cityName;
      this.cityName = ""; 
      
      if(this.cityNameSave == null){
        this.cityNameSave = "Galway";
        this.storage.set("data", {"city": this.cityNameSave, "units": this.option});
      } else{
        this.storage.set("data", {"city": this.cityNameSave, "units": this.option});
      } 

    if(this.option == null) { 
      alert("Please select units!"); //ensures units are selected 
    } else if(this.option !== null && this.cityNameSave == "Galway" ){
      setTimeout(function(){ alert("Galway chosen as default"); }, 1000); //if no city chosen, default city will alert on HomePage
      this.navCtrl.pop();
    } else{
      this.navCtrl.pop();
    }
    
    }
}


   
  

