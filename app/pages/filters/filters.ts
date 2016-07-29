import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimelineService } from '../../providers/timeline/timeline';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the FiltersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/filters/filters.html',
  providers: [ TimelineService ]
})
export class FiltersPage {

  photo: any = {};
  filterSelected: any = {};
  filters: any[] = [
    {
      name: 'Normal',
      class: 'none'
    },
    {
      name: 'Sepia',
      class: 'sepia'
    },
    {
      name: 'Sature',
      class: 'sature'
    },
    {
      name: 'Hue-rotate',
      class: 'hue-rotate'
    },
    {
      name: 'Grayscale',
      class: 'grayscale'
    }
  ];

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private timelineService: TimelineService
  ) {
    this.photo = this.params.get('photo');
  }

  changeFilter( filter ){
    this.filterSelected = filter;
  }

  savePhoto(){
    let post = {
      img: this.photo.img,
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'img/nicobytes.jpg',
        location: 'Chile'
      }
    };
    this.timelineService.createPost( post );
    this.navCtrl.setRoot( TabsPage );
  }

}
