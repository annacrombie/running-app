import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor() {
    this.geo_options = {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    };
  }

  watch_position() {
    this.wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
  }

  geo_success(position) {
    console.log(position);
  }

  geo_error() {
    alert("Sorry, no position available.");
  }
}
