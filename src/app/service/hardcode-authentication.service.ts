import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username === "benkinmat" && password === "password"){      
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
}
