import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  getAuthenticateUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticateToken(){
    if (this.getAuthenticateUser()){
      return sessionStorage.getItem('token');
    }    
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
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
            sessionStorage.setItem('authenticateUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
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
