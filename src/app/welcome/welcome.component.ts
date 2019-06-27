import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  name = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.router.snapshot.params['name']);
    this.name = this.router.snapshot.params['name'];
  }

}
