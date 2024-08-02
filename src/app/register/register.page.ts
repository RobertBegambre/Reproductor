import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages ={
    email: [
      {type:"required", message:"El Email es obligatorio"},
      {type:"pattern", message:"El Email es invalido" }
    ],
    contraseña: [
      {type:"required", message:"El campo es obligatorio"},
      {type:"pattern", message:"la contraseña es invalida" }
    ],

    name: [
      {type:"required", message:"El campo es obligatorio"},
      {type:"pattern", message:"El nombre no es valido" }
    ],
    Confirmar_Contraseña: [
      {type:"required", message:"El campo es obligatorio"},
      {type:"pattern", message:"la contraseña es invalida" }
    ],
    last_name: [
      {type:"required", message:"El campo es obligatorio"},
      {type:"pattern", message:"El apellido no es valido" }
    ],
  }
  errorMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) { 
    this.registerForm= this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'),

        ])
      ),
      Contraseña: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5,7}')
        ])
      ),
      Confirmar_Contraseña: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5,7}')
        ])
      ),

      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]{1,50}'),

        ])
      ),

      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]{1,50}')
        ])
      )
    
    })
  }

  ngOnInit() {
  }
  goToLogin(){
    this.navCtrl.navigateRoot("/login")
  }

  register(registerData: any){
    console.log(registerData);
    this.storage.set("user", registerData);
    this.authService.registerUser(registerData).then(res=> {
      this.navCtrl.navigateBack("/login")
    });
  }

}
