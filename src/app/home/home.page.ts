import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  artistsJson: any;
  artists: any;
  song = {
    name:"",
    playing:"false",
    preview_url:""
  }
  newTime: any;
  currentSong:any={};
  constructor(private musicService: MusicService, private modalController: ModalController) {}

  ngOnInit(){
    this.artistsJson = this.musicService.getArtistsJson().artists;
    console.log("Json",this.artistsJson)
    /*this.musicService.getArtists().subscribe((data:any)) => {
      this.artists = Data;
      console.log(this.artists)
    }*/


    this.musicService.getArtints().then(data =>{
      this.artists = data;
      console.log(data)
    })
  }

  async showSongs(artstis: any){
    console.log(artstis)
    const songs = await this.musicService.getArtistTracks(artstis.id);
    const modal = await this.modalController.create (
      {
        component: SongModalPage,
        componentProps: {
          name: artstis.name,
          id: artstis.id,
          songs: songs
        }
      }
    );
    modal.onDidDismiss().then(dataReturned => {
      this.song = dataReturned.data;
    })
    modal.present();
  }

  play (){
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventlistener("timeupdate", ()=> {
      this.newTime= (1 / this.currentSong.duration)* this.currentSong.currentTime;
    })
    this.song.playing = true;
  }

  pause(){
    this.currentSong.pause();
    this.song.playing= false;
  }

  parseTime = (time ="0.00"){
    if (time){
      const parseTime = parseInt(time.toString().split(".")[0],10);
      let minutes = Math.floor(partTime/60).toString();
      minutes = "0" +  minutes;

    }
    let seconds = (partTime % 60).toString();
    if (seconds.length == 1){
      seconds = "0" + seconds;
    }
    return null
  }

}
