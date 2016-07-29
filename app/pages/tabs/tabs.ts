import { Component } from '@angular/core';
import { Modal } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline';
import { SearchPage } from '../search/search';
import { CameraPage } from '../camera/camera';
import { ActivityPage } from '../activity/activity';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root;
  tab2Root;
  tab4Root;
  tab5Root;

  constructor(private navCtrl: NavController) {
    // set the root pages for each tab
    this.tab1Root = TimelinePage;
    this.tab2Root = SearchPage;
    this.tab4Root = ActivityPage;
    this.tab5Root = ProfilePage;
    
  }

  showCamera(){
    let modal = Modal.create( CameraPage );
    this.navCtrl.present( modal );
  }
}
