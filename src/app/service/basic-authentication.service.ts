import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticateUser';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  getAuthenticateUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticateToken(){
    if (this.getAuthenticateUser()){
      return sessionStorage.getItem(TOKEN);
    }    
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  executeAuthenticationService(username, password){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader(username, password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers: headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    // console.log("execute Hello World Bean Service");
  }

  createBasicAuthenticationHttpHeader(username, password){    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}

export class AuthenticationBean{
  constructor(public message: string){ };
}
