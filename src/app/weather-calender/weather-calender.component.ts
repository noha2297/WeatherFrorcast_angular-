import { Component, OnInit } from '@angular/core';


// ***************** Full Calender ********************
import { CalendarOptions } from '@fullcalendar/angular'; 

@Component({
  selector: 'app-weather-calender',
  templateUrl: './weather-calender.component.html',
  styleUrls: ['./weather-calender.component.css']
})
export class WeatherCalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
}
