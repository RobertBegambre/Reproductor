import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
  loginUser(credentiales:  any){
    return new Promise((acept, reject)=>{
      if (
        credentiales.email == "robertjmeza12@gmail.com",
        credentiales.contraseña=="3287097"
        
      ){
        acept("login correcto")
    }
    else{
      reject("login Incorrecto")
    }
    })
  }
  registerUser(registerData: any){
    return this.storage.set("user", registerData);
  }
}
