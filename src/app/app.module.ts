import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { WeatherdataProvider } from '../providers/weatherdata/weatherdata';
import { HttpClientModule } from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage' ;
import { NewsProvider } from '../providers/news/news';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherdataProvider,
    NewsProvider,
   
   
  ]
})
export class AppModule {}
