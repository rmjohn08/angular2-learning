import {Component, OnInit} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {CheckoutItemComponent} from './checkout/checkout.component';
import {RegistrationComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {UserService, RegisteredUser} from './services/user.service';
import {ContactUsComponent} from './contactus/contactus.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    directives: [ROUTER_DIRECTIVES,CheckoutItemComponent, RegistrationComponent],
    providers:[],
    pipes:[]

})@RouteConfig([
  {path: '/', component: HomeComponent, name:'Home', useAsDefault: true},
  {path: '/contactus', component: ContactUsComponent, name:'Contactus'},
  {path: '/checkout/...', component:CheckoutItemComponent, name:'Checkout'}
])
export class AppComponent implements OnInit {
    user: RegisteredUser;
    constructor(private _router: Router, private _userService : UserService) {
    }

    ngOnInit() {
      this.user = this._userService.getRegisteredUser();
      if (this.user===null || this.user==null || this.user.email == null) {
        this._router.navigate(['Home']);
      }

    }

}
