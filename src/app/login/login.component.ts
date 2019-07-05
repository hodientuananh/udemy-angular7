import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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

  constructor(private router: Router,
    private hardcodeAuthenticationService: HardcodeAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if (this.hardcodeAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        response => {
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )    
  }

  handleJwtAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        response => {
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )    
  }

}
