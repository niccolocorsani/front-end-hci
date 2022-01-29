import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";



//https://www.npmjs.com/package/angularx-social-login
//https://www.positronx.io/angular-google-social-login-tutorial-with-example/
//https://remotestack.io/create-login-with-facebook-in-angular-application/

@Component({
  selector: 'app-social-log-in',
  templateUrl: './social-log-in.component.html',
  styleUrls: ['./social-log-in.component.scss'],
})
export class SocialLogInComponent implements OnInit {


  user;
  loggedIn;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user)
      this.loggedIn = (user != null);
      console.log(this.loggedIn)
    });
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
