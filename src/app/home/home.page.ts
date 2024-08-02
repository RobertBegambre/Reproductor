import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  artists: any;
  constructor(private musicService: MusicService) {}

  ngOnInit(){
    this.artists = this.musicService.getArtistsJson().artists;
    console.log(this.artists)
  }

}
