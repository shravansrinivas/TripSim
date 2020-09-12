import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestinationServiceService } from './destination-service.service';
import * as xyz from "../jim.json";

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http: HttpClient, private destService: DestinationServiceService) { }

  
  headers = new HttpHeaders().set("Authorization","Bearer "+xyz.default.zxrr);
  
  getFlights(destCode){
    console.log(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-02-01&adults=1&nonStop=false&max=250`)

      console.log('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode='+this.destService.defaultParams.homeCity+'&destinationLocationCode='+destCode+'&departureDate='+this.destService.parseDate(this.destService.defaultParams.deptDate)+'&adults='+'1'+'&nonStop=false&max=250')

    return this.http.get(
      'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode='+this.destService.defaultParams.homeCity+'&destinationLocationCode='+destCode+'&departureDate='+'2020-10-12'+'&adults='+'1'+'&nonStop=false'
//      console.log('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode='+this.destService.defaultParams.homeCity+'&destinationLocationCode='+destCode+'&departureDate='+this.destService.parseDate(this.destService.defaultParams.deptDate)+'&adults='+'2021-02-01'+'&nonStop=false&max=250')
    ,{
      headers:this.headers
    })
    

  }
}
