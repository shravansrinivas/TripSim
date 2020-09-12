import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import * as xyz from "../jim.json";
@Injectable({
  providedIn: 'root'
})
export class DestinationServiceService {
  defaultParams={
    homeCity:'NYC',
    adultCount:1,
    deptDate: new Date()
  }
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders().set("Authorization","Bearer "+xyz.default.zxrr);

  getDestinationCityCode(cityName){
    return this.http.get('https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword='+cityName,{
      headers:this.headers
    });
  }
  getTopDestinations(reqCount){
   return this.http.get('https://test.api.amadeus.com/v1/travel/analytics/air-traffic/traveled?max='+reqCount+'&originCityCode='+this.defaultParams.homeCity+'&page%5Blimit%5D=10&page%5Boffset%5D=0&period=2017-09',
    {
      headers:this.headers
    })
  }
  parseDate(d:Date){
    let date=new Date(d);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  }
}
