import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{  
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
   
   // this.getUsers();
  } 

  ngOnInit() {
//  token = this.restProvider.getInfo
//   // onclick(){
//   //   //let token = this.restProvider.getInfo();
 this.restProvider.getInfo();  
//   // }
 
// var RoomName;
//   var Token;
//   var RemoteParticipantName;
//   cordova.videoconversation.open(RoomName = "Anu", Token= this.restProvider.getInfo(), RemoteParticipantName="bhanu" );
  }
}
declare const cordova: any;