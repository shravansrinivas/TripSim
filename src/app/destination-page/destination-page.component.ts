import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { DestinationServiceService } from '../services/destination-service.service';
import { FlightServiceService } from '../services/flight-service.service';

import { HotelServiceService } from '../services/hotel-service.service';
@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css'],
})
export class DestinationPageComponent implements OnInit {
  loading: boolean = true;
  cityname: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightServiceService,
    private hotelService: HotelServiceService,
    private destinationService: DestinationServiceService
  ) {}
  hotelPagelength = 100;
  hotelPageSize = 10;
  hotelPageSizeOptions: number[] = [5, 10];

  hotelsInCity: any;
  hotels: any[] = [];

  srcCityCode: string = '';
  deptDate: string = '';
  adultCount: Number;

  destCityCode: string = '';

  cityBuffer: any;
  flightBuffer: any;

  flightPagelength = 100;
  flightPageSize = 10;
  flightPageSizeOptions: number[] = [5, 10];

  flightsToCity: any[] = [];
  flights: any[] = [];
  // MatPaginator Output
  pageEvent: PageEvent;

  setHotelPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.hotelPageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
  setFlightPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.flightPageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.srcCityCode = this.destinationService.defaultParams.homeCity;
      this.adultCount = this.destinationService.defaultParams.adultCount;
      this.parseDate(this.destinationService.defaultParams.deptDate);

      this.cityname = this.route.snapshot.paramMap.get('cityname');
      this.destinationService
        .getDestinationCityCode(this.cityname)
        .subscribe((data) => {
          this.cityBuffer = data;
          console.log(this.cityBuffer);
          this.setCity();
          
          this.flightService.getFlights(this.destCityCode).subscribe((data) => {
        this.flightBuffer=data;
        this.processFlights();
      });
      this.hotelService.getHotelsInCity(this.destCityCode).subscribe((data) => {
        this.hotelsInCity = data;
        this.processHotels();
        this.loading = false;
      });
        });

     
    }, 5000);
  }
  processFlights() {
    this.flightsToCity = this.flightBuffer.data;
    for(let i of this.flightsToCity){
      console.log(i);
      if(i.id%5==0)this.flights.push(i);
      if(this.flights.length==5)break;
    }
    this.flightPagelength=this.flights.length;
  }
  processHotels() {
    this.hotelsInCity.data.forEach((element) => {
      this.hotels.push({ hotel: element.hotel, offers: element.offers });
    });
    this.hotelPagelength = this.hotels.length;
    console.log(this.hotels);
  }
  setCity() {
    this.destCityCode = this.cityBuffer.data[0].iataCode;
    console.log(this.destCityCode);
  }
  parseDate(d: Date) {
    let date = new Date(d);
    this.deptDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
}
