import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//Material Imports
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { DestinationHomeComponent } from './destination-home/destination-home.component';
import { FlightHomeComponent } from './flight-home/flight-home.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DestinationPageComponent,
    DestinationHomeComponent,
    FlightHomeComponent,
    HotelHomeComponent,
    FlightPageComponent,
    HotelPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
