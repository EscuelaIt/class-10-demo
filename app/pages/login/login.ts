import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AuthService } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  user: any = {};

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  doLogin(){
    let load = Loading.create();
    this.navCtrl.present( load );
    this.authService.loginUser( this.user.email, this.user.password)
    .then(user =>{
      load.dismiss();
      this.navCtrl.setRoot( TabsPage );
    })
    .catch(error =>{
      console.log( error );
      load.dismiss();
    })
  }

  goToRegisterPage(){
    this.navCtrl.push( RegisterPage );
  }

}
