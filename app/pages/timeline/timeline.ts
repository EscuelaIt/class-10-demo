import { Component } from '@angular/core';
import { NavController, ActionSheet } from 'ionic-angular';
import { TimelineService } from '../../providers/timeline/timeline';
import { FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the TimelinePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/timeline/timeline.html',
  providers: [ TimelineService ]
})
export class TimelinePage {

  timeline: FirebaseListObservable<any>;
  /*
  timeline:any[] = [
    {
      img: 'img/img1.jpg',
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'img/nicobytes.jpg',
        location: 'Mi casa'
      }
    },
    {
      img: 'img/img2.jpg',
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'img/nicobytes.jpg',
        location: 'Chile'
      }
    }
  ];
  */

  constructor(
    private navCtrl: NavController,
    private timelineService: TimelineService
  ) {
    this.timeline = this.timelineService.fullTimeline;
  }

  showOptions(){
    let action = ActionSheet.create({
      title: 'Options post',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    this.navCtrl.present( action );
  }

  createPost(){
    let post = {
      img: 'img/img2.jpg',
      text: 'Hola, esta',
      user: {
        name: 'Nicolas',
        avatar: 'img/nicobytes.jpg',
        location: 'Chile'
      }
    };
    this.timelineService.createPost( post );
  }

}
