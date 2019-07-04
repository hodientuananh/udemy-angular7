import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardcodeAuthenticationService: HardcodeAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    // this.hardcodeAuthenticationService.logout();
    this.basicAuthenticationService.logout();
  }

}
