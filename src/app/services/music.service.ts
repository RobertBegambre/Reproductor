import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})

export class MusicService {
  urlServer="https://music.fly.dev/artists"
  httpHeaders={header: new HttpHeaders ({"Content-Type: application/json"})};

  constructor(
    //private http: HttpClient
    ) { }

  getArtists(){
    return dataArtists.artists;

  }
  }