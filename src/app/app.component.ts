import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from './animations';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerAnimation
  ]
})
export class AppComponent {
  title = 'ng-animate-slide-in-out';

  constructor( private navigationService: NavigationService ) {}


  getRouteAnimation(outlet: RouterOutlet) {
    return this.navigationService.animationValue;
  }
}
