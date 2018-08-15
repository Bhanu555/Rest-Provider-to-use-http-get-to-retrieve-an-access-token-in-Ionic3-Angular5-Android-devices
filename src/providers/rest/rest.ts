import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public token;
  /*apiUrl = 'https://jsonplaceholder.typicode.com';*/

  constructor(private http: HttpClient) {
    //console.log('Hello RestProvider Provider');
  }

  /* getUsers() {
     return new Promise(resolve => {
      , err => {
         console.log(err);
       });
     });
   }*/

  /*addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });*/


  /*   this.http.get("https://fandango-puma-4271.twil.io/video-token?identity=" + "", function(data) {
 
     }).then(function(data) {
         console.log(data);
         console.log("Token = " + data.data.token);
         const token = data.data.token;
         //document.getElementById('room-controls').style.display = 'block';
 
         // Bind click event and add token to data attribute
         document.getElementById('JoinRoom').addEventListener('click', connect);
         document.getElementById('JoinRoom').setAttribute('data-token', data.data.token);
         // Connect
         connect();*/

  getInfo() {
    var identity = "bhanushree";
    this.http.get<{token: object}>("https://fandango-puma-4271.twil.io/video-token?identity="+identity+"")
      .subscribe((response) => {
        console.log(response.token)
        this.token = response.token;
        var RoomName;
        var Token;
        var RemoteParticipantName;       
       cordova.videoconversation.open(RoomName="Anu", Token= this.token , RemoteParticipantName="bhanu");
       return this.token;
      })
  }

  getToken() {
  
    return this.token
  
  } 
 
}
declare const cordova: any;