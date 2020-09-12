import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHomeComponent } from './flight-home.component';

describe('FlightHomeComponent', () => {
  let component: FlightHomeComponent;
  let fixture: ComponentFixture<FlightHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
