import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {IATACode} from '../models/iatacode';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as codes from "../../iata.json";
import * as iataLookUp from "../../iataLookUp.json";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private router:Router){

  }
greeting = 'Bonjour';
greetings = ['Hello there', 'Hallo','Ciao','Hola','Bonjour'];
  email: '';

  myControl = new FormControl();
  options: string[] = Object.keys(iataLookUp.default);;
  filteredOptions: Observable<string[]>;  cityToSearch ='';
  
  loading : boolean = true;
  
  ngOnInit(): void {
  setTimeout(()=>{
   
 
 
  this.filteredOptions = this.myControl.valueChanges
  .pipe(
    startWith(''),
    map(value => this._filter(value))
  );
  
  
  
    this.loading=false;
},3000);

  setInterval(()=>{
    let index=this.greetings.indexOf(this.greeting);
    if(index<this.greetings.length-1){
      this.greeting=this.greetings[index+1];
    }
    else
    this.greeting=this.greetings[0];
  },3000);
  }

  citySearch(){
    if(this.cityToSearch!==''){
      this.router.navigate(['/destinations/'+this.cityToSearch]);
    }
    else{
      alert('Please fill valid destination city from the autocomplete list! :(');
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  unamePattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"; 
  submitEmail(){
    //if(this.email!='' && this.email.match(this.unamePattern)){
      alert("Thanks for subscribing! You'll now receive periodic updates!!");
    
    
  }
}
