import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from "angular-maps";
import { MapComponent } from './map/map.component';
//import {AgmCoreModule} from "@agm/core";

/**********************Maps *********************************** */
//import { GoogleMapsModule } from '@angular/google-maps';
//import { CommonModule } from '@angular/common';
//import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
/**************************************************************** */

/************************ Full Calender ************************/
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid';
import { WeatherCalenderComponent } from './weather-calender/weather-calender.component'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);
 /**************************************************************/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    WeatherCalenderComponent
  ],
  imports: [
    BrowserModule ,
    FullCalendarModule ,
    /*CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule*/
    
    // AgmCoreModule.forRoot({
    //   apiKey :'AIzaSyCtdPrTdRpsOi-YhrXAIj42RIoQm-rVszU'
    // })
   // MapModule.forRoot()
  ],
  providers: [
    /*{
      provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="..."; // your bing map key
  bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
*/
