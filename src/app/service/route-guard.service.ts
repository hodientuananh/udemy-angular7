import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private hardcodeAuthenticationService: HardcodeAuthenticationService,
    private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    if (this.hardcodeAuthenticationService.isUserLoggedIn()) {      
      return true;
    }

    this.router.navigate(["login"]);
    return false;
  }
}
