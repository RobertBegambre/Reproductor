import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import{Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  constructor(private router: Router) {
  
  }

  close(){
    console.log("estoy cerrando la intro")
    this.router.navigateByUrl("/intro")
  }
}
