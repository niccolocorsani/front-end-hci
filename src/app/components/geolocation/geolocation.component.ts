import {Component, OnInit} from '@angular/core';
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";
import {ConsultantResponse} from "../../services/response/consultant-response";


@Component({
    selector: 'app-geolocation',
    templateUrl: './geolocation.component.html',
    styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

    ///documentation for google maps at: https://angular-maps.com/
    /// is important to set the version of the dependency at "@types/googlemaps": "^3.36.4", because the leatest version doesn't work with @agm


    title = 'My first AGM project';
    lat = 43.77925;
    lng = 11.24626;  // Florence coordinates
    options: any;
    map: google.maps.Map;
    consultants: ConsultantResponse[];
    checkConsultantOnMap = false;
    address: any;
    hideGetPositionOptionForClient = true;



    constructor(/*private geolocation: Geolocation*/ private consultantService: RequestConsultantServiceService) {
        this.options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        };
    }


    ngOnInit() {
        if (document.getElementById("header").textContent.includes("Client"))
            this.hideGetPositionOptionForClient = false;
        this.consultants = this.consultantService.getSynchronousConsultants();
        document.getElementById("consultantLatLng").style.display = "none";
        document.getElementById("consultant_city_street_cap").style.display = "none";

        console.log("oooo")
        this.getLocation();



    }

     initMap() {
        this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            zoom: 8,
        });
    }


    async getLocation() {
        if (navigator.geolocation) {
            //      let watch = navigator.geolocation.watchPosition(position => {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                console.log(this.lat +' '+ this.lng )
            }, null, this.options);
            this.getAddress();
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    city: any;
    cap: any;
    street: any;

    getAddress() {
        console.log('Finding Address');
        if (navigator.geolocation) {
            let geocoder = new google.maps.Geocoder();
            let latlng = new google.maps.LatLng(this.lat, this.lng);
            let request = {'location': latlng};
            geocoder.geocode(request, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    let result = results[0];
                    let rsltAdrComponent = result.address_components;
                    if (result != null) {

                        this.address = rsltAdrComponent;

                        this.city = this.address[2].long_name;
                        this.street =  this.address[1].long_name;
                        this.cap = this.address[7].long_name;

                        console.log(this.address)

                    } else {
                        alert('No address available!');
                    }
                }
            });
        }
    }



    checkAllConsultant() {
        this.checkConsultantOnMap = true;
    }


}
