import {Component, OnInit, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  x: any;
  options: any;



   map: google.maps.Map;

   initMap(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }


  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor(/*private geolocation: Geolocation*/) {
    this.options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  }

  ngOnInit() {

  }

  async getLocation() {

    this.x = document.getElementById("demo");
    if (navigator.geolocation) {
      let watch = navigator.geolocation.watchPosition(position => {
        this.x.textContent = "lat: " + position.coords.latitude + "long: " + position.coords.longitude;
      }, null, this.options);

    } else {
      this.x.textContent = "Geolocation is not supported by this browser.";
    }
  }


  data: any;

  getLocationIonic() {
    /*
        this.geolocation.getCurrentPosition().then((resp) => {
          // resp.coords.latitude
          // resp.coords.longitude
        }).catch((error) => {
          console.log('Error getting location', error);
        });

        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
          this.data = data;
          console.log("----->Watch latitude" + this.data.coords.latitude);
          console.log("-----> Watch logitude" + this.data.coords.longitude)
          console.log("-----> Watch accuracy" + this.data.coords.accuracy)
        });
    */
  }
}
