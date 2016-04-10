import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, OnInit} from 'angular2/core';
import {CheckoutItemService} from '../services/checkout-item.service';
import {UserService} from '../services/user.service';
import {CheckoutNotificatorService} from '../services/checkout-notificator.service';
import {ModalComponent} from '../util/modal.component';
import {DimensionsComponent} from './dimensions.component';
import {SerialComponent} from './serial.component';

//import {RegistrationComponent} from '../register/register.component';
//import {HomeComponent} from '../home/home.component';

@Component({
  selector : "checkout",
  templateUrl : 'app/checkout/checkout.html',
  providers: [CheckoutItemService],
  directives: [ModalComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/serial', component: SerialComponent, name:'Serial', useAsDefault:true},
  {path: '/dimension', component: DimensionsComponent, name:'Dimensions'}
])
export class CheckoutItemComponent implements OnInit {
    items = [];
    myUser: any;
    subscription: any;
    checkoutSubscription: any;

    constructor(private _checkoutService: CheckoutItemService,
      private _userService: UserService,
       private _checkoutNotificator : CheckoutNotificatorService) {

      this.items = _checkoutService.getItems();
      this.myUser = _userService .getRegisteredUser();

      // subcribed for events when the user is signedout
      this.subscription = _userService.registrationEmitter.subscribe((data) => {
        this.myUser = data;
        console.log('User registration detected in checkout...');

      })
      // subscribe when user checks out an items
      this.checkoutSubscription = _checkoutNotificator.checkoutEmitter.subscribe((data) => {
        console.log('User checked out an item ...');

      });

    }

    // on Init for this component
    ngOnInit(){

    }

}
