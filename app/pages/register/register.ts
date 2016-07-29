import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the RegisterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/register/register.html',
})
export class RegisterPage {

  newUser: any = {};

  constructor(
    private navCtrl: NavController,
    private userAuth: AuthService
  ) {

  }

  doRegister(){
    let load = Loading.create();
    this.navCtrl.present( load );
    this.userAuth.registerUser(this.newUser.email, this.newUser.password)
    .then(user =>{
      load.dismiss();
      this.navCtrl.setRoot( TabsPage );
    })
    .catch(error=>{
      console.log(error);
      load.dismiss();
    });
  }

}
