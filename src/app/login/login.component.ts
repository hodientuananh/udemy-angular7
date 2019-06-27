import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'benkinmat';
  password = 'password';
  errorMessage = 'invalid login';
  invalidLogin = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    if (this.username === "benkinmat" && this.password === "password"){
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }

}
