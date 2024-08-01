import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages ={
    email: [
      {type:"required", message:"El Email es obligatorio"},
      {type:"pattern", message:"El Email es invalido" }
    ],
    contraseña: [
      {type:"required", message:"El campo es obligatorio"},
      {type:"pattern", message:"la contraseña es invalida" }
    ]
  
  }
  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navctrl: NavController) {
    this.loginForm=this.formBuilder.group({
      
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')
        ])
      ),
      contraseña: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5,7}')

        ])
      )
    })
   }

  ngOnInit() {
  }

  loginUser(dataLogin: any){
    console.log(dataLogin)
    this.authService.loginUser(dataLogin).then(res=>{
      this.navctrl.navigateForward("/home")
    })
  }

}
