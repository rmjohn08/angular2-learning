import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService, RegisteredUser} from '../services/user.service';

@Component({
  selector:'registration',
  templateUrl: 'app/register/register.html',
  providers: [],
  directives: []

}) export class RegistrationComponent implements OnInit {

    subscription: any;
    regUser: RegisteredUser;
    registrationComplete: boolean = false;

    constructor(private _userService: UserService,
      private _routerService: Router) {

    }

    ngOnInit() {
      this.regUser = this._userService.getEmptyRegisteredUser();
    }

    registerUser() {
      this._userService.registerUser(this.regUser);
      this.registrationComplete=true;

    }

    signOut() {
      this.regUser = this._userService.getEmptyRegisteredUser();
      this.registrationComplete=false;
      this._routerService.navigate(['Home']);
      return false;
    }

}
