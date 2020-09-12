import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationHomeComponent } from './destination-home.component';

describe('DestinationHomeComponent', () => {
  let component: DestinationHomeComponent;
  let fixture: ComponentFixture<DestinationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
