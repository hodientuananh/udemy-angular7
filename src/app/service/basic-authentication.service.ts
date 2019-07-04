import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

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

  executeJWTAuthenticationService(username, password){
    return this.http.post<any>(`${API_URL}/authenticate`, {
      "username": username,
      "password": password
    })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    // console.log("execute Hello World Bean Service");
  }

  executeAuthenticationService(username, password){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader(username, password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers: headers})
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
