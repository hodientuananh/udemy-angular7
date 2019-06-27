import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username === "benkinmat" && password === "password"){
      return true;
    }
    else {
      return false;
    }
  }
}
