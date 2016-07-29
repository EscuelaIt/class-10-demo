import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import { LoginPage } from './pages/login/login';
import { TabsPage } from './pages/tabs/tabs';
import { AuthService } from './providers/auth/auth';
import {FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any;

  constructor(
    private platform: Platform,
    private authService: AuthService
  ) {
    this.checkSession();
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  checkSession(){
    this.authService.session.subscribe(session =>{
      this.rootPage = this.getPageInit(session);
    })
  }

  getPageInit(session):any{
    if (session) return TabsPage;
    return LoginPage;
  }
}

ionicBootstrap(MyApp, [
  AuthService,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyCAJYjqPbfeBijP8skiDRz0mNn-Q3LYcuw",
    authDomain: "instagram-8fe0a.firebaseapp.com",
    databaseURL: "https://instagram-8fe0a.firebaseio.com",
    storageBucket: "instagram-8fe0a.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  })
], {
  mode: 'ios'
});
