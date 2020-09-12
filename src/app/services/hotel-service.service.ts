import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import * as xyz from "../jim.json";


@Injectable({
  providedIn: 'root'
})

export class HotelServiceService {
  headers = new HttpHeaders().set("Authorization","Bearer "+xyz.default.zxrr);

 API_URL='https://test.api.amadeus.com/v2/shopping/';
  constructor(private http:HttpClient) { }

  
  getHotelInfoById(hotelid){
    return this.http.get(this.API_URL+'hotel-offers/by-hotel?hotelId='+hotelid,{
     headers: this.headers
     
    });
  }

  getHotelsInCity(cityCode){
    return this.http.get(this.API_URL+'hotel-offers?cityCode='+cityCode,
  {headers: this.headers});
  }
}
