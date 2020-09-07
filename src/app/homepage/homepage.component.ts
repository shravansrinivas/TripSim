import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
greeting = 'Bonjour';
greetings = ['Hello there', 'Hallo','Ciao','Hola','Bonjour'];
  constructor() { }

  ngOnInit(): void {
  setInterval(()=>{
    let index=this.greetings.indexOf(this.greeting);
    if(index<this.greetings.length-1){
      this.greeting=this.greetings[index+1];
    }
    else
    this.greeting=this.greetings[0];
  },2000);
  }

}
