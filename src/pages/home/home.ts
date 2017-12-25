import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
 import { PlaylistPage } from '../playlist/playlist';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  channelId:string='UC22nIfOTM7KLIQuFGMKzQbg'
  ;maxRes:string='50';
  googleToken:string='AIzaSyCPgbtZ_2iIoavN2VZJd52ro7C6IhN8y8Y';
 search:String='';
  post:any=[];
    constructor(public navCtrl: NavController,private http:Http) {
  
    }

    ionViewDidLoad(){
      let url=" https://www.googleapis.com/youtube/v3/playlists?part=id,snippet&channelId="+this.channelId+"&q="+this.search+"&type=video&order=date&maxResults="+this.maxRes+"&key="+this.googleToken;
      this.http.get(url).map(res=>res.json()).subscribe(data=>{
        this.post=this.post.concat(data.items)
        console.log(this.post);
      })
    }

     pl(id){
   this.navCtrl.push(PlaylistPage,{'item':id})
      }
    
}
