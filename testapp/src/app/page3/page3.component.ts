import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.sass'],
})
export class Page3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openCamera = (): void => {
    console.log('Not implemented');
  };
  openGallery = (): void => {
    console.log('Not implemented');
  };
  openGps = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };
  openCalendar = (): void => {
    console.log('Not implemented');
  };
  openContacts = (): void => {
    console.log('Not implemented');
  };
}
