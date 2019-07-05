import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  welcomeMessageFromService: string;
  name = '';

  constructor(
    private router: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handlerSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handlerSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handlerSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }

}
