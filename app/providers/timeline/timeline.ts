import { Injectable } from '@angular/core';
import { FirebaseDatabase, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class TimelineService {

  timeline: FirebaseListObservable<any>;

  constructor(
    private database: FirebaseDatabase
  ){
    this.timeline = database.list('/timeline');
  }

  get fullTimeline(){
   return this.timeline; 
  }

  createPost(post:any){
    this.timeline.push( post );
  }




  
}

