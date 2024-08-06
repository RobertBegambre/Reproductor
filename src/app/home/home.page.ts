import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  artistsJson: any;
  constructor(private musicService: MusicService) {}

  ngOnInit(){
    this.artistsJson = this.musicService.getArtistsJson().artists;
    console.log("Json",this.artistsJson)
    this.musicService.getArtists().subscribe((data:any)) => {
      this.artists = Data
      console.log(this.artists)
    }
  }

}
