import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { FiltersPage } from '../filters/filters';

/*
  Generated class for the CameraPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/camera/camera.html',
})
export class CameraPage {

  photoSelected: any = {};

  photos:any[] = [
    {
      name: '1',
      img: 'img/img1.jpg'
    },
    {
      name: '1',
      img: 'img/img2.jpg'
    },
    {
      name: '1',
      img: 'img/img3.jpg'
    },
    {
      name: '1',
      img: 'img/img4.jpg'
    },
    {
      name: '1',
      img: 'img/img5.jpg'
    },
    {
      name: '1',
      img: 'img/img6.jpg'
    }
  ];

  constructor(
    private navCtrl: NavController,
    private viewCtrl: ViewController
  ) {
    this.photoSelected = this.photos[0];
  }

  close(){
    this.viewCtrl.dismiss();
  }

  changePhoto( photo ){
    this.photoSelected = photo;
  }

  goToFiltersPage(){
    this.navCtrl.push( FiltersPage, {
      photo: this.photoSelected
    });
  }

}
