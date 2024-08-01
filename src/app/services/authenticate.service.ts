import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credentiales:  any){
    return new Promise((acept, reject)=>{
      if (
        credentiales.email == "robertjmeza12@gmail.com"
        
      ){
        acept("login correcto")
    }
    else{
      reject("login Incorrecto")
    }
    })
  }
}
