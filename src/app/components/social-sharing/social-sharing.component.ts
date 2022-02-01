import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-social-sharing',
    templateUrl: './social-sharing.component.html',
})
export class SocialSharingComponent  {

// https://stackblitz.com/edit/social-sharing?file=src%2Fapp%2Fshare-button%2Fshare-button.component.html

    type: string;
    shareUrl: string;
    navUrl: string;


    constructor() {
    }


    private createNavigationUrl(value: string) {
        let searchParams = new URLSearchParams();
        switch (value) {
            case 'facebook':
                searchParams.set('u', this.shareUrl);
                this.navUrl = 'https://www.facebook.com/sharer/sharer.php?' + searchParams;
                break;
            case 'twitter':
                searchParams.set('url', this.shareUrl);
                this.navUrl = 'https://twitter.com/share?' + searchParams;
                break;
        }
    }

    public share(event: any) {
        let value = event.currentTarget.getAttribute('value');
        console.log(value)
        ////// ogni tanto ritorna null se su event faccio event.target,
        // ma si risolve con event.currentTarget
        this.shareUrl = "https://www.google.it/"
        this.createNavigationUrl(value);
        console.log(event.target.attributes.type)
        return window.open(this.navUrl, "_blank");
    }
}
