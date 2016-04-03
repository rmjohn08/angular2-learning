
import {Component, OnInit, Input, OnDestroy} from 'angular2/core';
import {RegistrationComponent} from '../register/register.component';
import {UserService} from '../services/user.service';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'home',
  template:`
  <h4>You can start the checkout process after registering.</h4>
  `,
  providers: [],
  directives: [RegistrationComponent, ROUTER_DIRECTIVES],
  pipes: []
})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() registeredUser: any;
  subscription: any;

  constructor( private _routerService: Router,
    _userService: UserService) {
    this.subscription = _userService.registrationEmitter.subscribe((data) => {
      this.registeredUser = data;
      console.log('User registration detected in HomeComponent...');
      this.navigateTo('Checkout');

    })


  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateTo(pathName: string) {
      this._routerService.navigate([pathName]);
  }
}
