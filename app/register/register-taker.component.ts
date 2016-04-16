import {Component, Output, EventEmitter, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService, RegisteredUser} from '../services/user.service';

@Component({
  selector:'register-taker',
  templateUrl: 'app/register/register-taker.html'
})
export class RegisterTakerComponent implements OnInit {


      subscription: any;
      regUser: RegisteredUser;
      registrationComplete: boolean = false;
      @Output() onRegistered = new EventEmitter<string>();
      @Output() onSignedOut = new EventEmitter<string>();

      constructor(private _userService: UserService,
        private _routerService: Router) {

      }

      ngOnInit() {
        this.regUser = this._userService.getEmptyRegisteredUser();
      }

      registerUser() {
        this._userService.registerUser(this.regUser);
        this.registrationComplete=true;
        this.onRegistered.emit(this.regUser.name);

      }

      signOut() {
        let userSignedout : string = this.regUser.name;
        this.regUser = this._userService.getEmptyRegisteredUser();
        this.registrationComplete=false;
        this._routerService.navigate(['Home']);
        this.onSignedOut.emit(userSignedout);
        return false;

      }

}
