import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { DestinationHomeComponent } from './destination-home/destination-home.component';
import { FlightHomeComponent } from './flight-home/flight-home.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {
    path:"destinations", component:DestinationHomeComponent
  },
  {
    path:"destinations/:cityname",component:DestinationPageComponent
  },
  {
    path:"flights", component: FlightHomeComponent
  },
  {
    path:'hotels', component: HotelHomeComponent
  },
  {
    path:'hotels/:id', component: HotelPageComponent
  },
  {
    path:'insights', component: DestinationHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
