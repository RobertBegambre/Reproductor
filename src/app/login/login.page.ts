import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

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
    ]
  }
  constructor(private formBuilder: FormBuilder) {
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

        ])
      )
    })
   }

  ngOnInit() {
  }

  loginUser(dataLogin: any){
    console.log(dataLogin)
  }

}
