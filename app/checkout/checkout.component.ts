import {Component, OnInit} from 'angular2/core';
import {CheckoutItemService} from '../services/checkout-item.service';
import {UserService} from '../services/user.service';

//import {RegistrationComponent} from '../register/register.component';
//import {HomeComponent} from '../home/home.component';

@Component({
  selector : "checkout",
  templateUrl : 'app/checkout/checkout.html',
  providers: [CheckoutItemService],
  directives: []
})
export class CheckoutItemComponent implements OnInit {
    items = [];
    myUser: any;
    subscription: any;

    constructor(private _checkoutService: CheckoutItemService,
      private _userService: UserService) {

      this.items = _checkoutService.getItems();
      this.myUser = _userService .getRegisteredUser();

      // subcribed for events when the user is signedout
      this.subscription = _userService.registrationEmitter.subscribe((data) => {
        this.myUser = data;
        console.log('User registration detected in checkout...');

      })

    }

    // on Init for this component
    ngOnInit(){

    }

}
