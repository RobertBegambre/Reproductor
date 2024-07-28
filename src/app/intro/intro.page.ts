import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title:"Free Music",
      icon: "accessibility-outline",
      avatar:"https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
      image:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-logo%2C-guitar-logo%2C-music-3d-gold-logo-design-template-2251cca626acda3bea3ce36dbd68b3d2_screen.jpg?ts=1678649321",
      description: "Texto de descripcion"
    },
    {
      title:"Intro Free Music",
      icon: "accessibility-outline",
      avatar:"https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W7wWlkvcqL8UJwElSLniXBEZQaf2yNtY5Q&s",
      description: "Texto de descripcion"
    },
    {
      title:"Descargas Free Music",
      icon: "accessibility-outline",
      avatar:"https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
      image:"https://img.freepik.com/foto-gratis/concepto-musica-al-estilo-dibujos-animados_23-2151056767.jpg",
      description: "Texto de descripcion"
    },
    {
      title:"Contactanos",
      icon: "accessibility-outline",
      avatar:"https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
      image:"https://upload.wikimedia.org/wikipedia/commons/0/06/M%C3%BAsica.jpg",
      description: "Texto de descripcion"
    }
  ]

  constructor(private router: Router) {  }

  ngOnInit() {
  }
  
  close(){
    //console.log("estoy cerrando la intro")
    this.router.navigateByUrl("/home")
  }

}
