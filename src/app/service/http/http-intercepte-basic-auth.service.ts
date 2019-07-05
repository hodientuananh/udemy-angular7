import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepteBasicAuthService implements HttpInterceptor{
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {    
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticateToken();
    let username = this.basicAuthenticationService.getAuthenticateUser();

    if (basicAuthHeaderString && username){
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    
    return next.handle(req);
  }

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }
}
