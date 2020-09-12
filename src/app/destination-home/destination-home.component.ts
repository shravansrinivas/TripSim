import { Component, OnInit } from '@angular/core';
import { DestinationServiceService } from '../services/destination-service.service';
import { FormControl, Validators } from '@angular/forms';
import { IATACode } from '../models/iatacode';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as codes from '../../iata.json';
import * as iataLookUp from '../../iataLookUp.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-home',
  templateUrl: './destination-home.component.html',
  styleUrls: ['./destination-home.component.css'],
})
export class DestinationHomeComponent implements OnInit {
  loading: boolean = true;
  topDests: any[] = [];
  destBuffer: any;
  myControl = new FormControl();
  options: string[] = Object.keys(iataLookUp.default);
  filteredOptions: Observable<string[]>;
  cityToSearch = '';
  constructor(
    private DestinationService: DestinationServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.DestinationService.getTopDestinations(6).subscribe((data) => {
        console.log(data);
        this.destBuffer = data;
        this.getTopDests();
      });
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );
      this.loading = false;
    }, 5000);
  }

  getTopDests() {
    this.topDests = this.destBuffer.data;
    console.log(this.topDests);
  }
  gotoDest() {
    if (this.cityToSearch !== '') {
      this.router.navigate(['/destinations/' + this.cityToSearch]);
    } else {
      alert(
        'Please fill valid destination city from the autocomplete list! :('
      );
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
