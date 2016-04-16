import {Component, OnInit, Output,EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService, RegisteredUser} from '../services/user.service';
import {RegisterTakerComponent} from './register-taker.component';

@Component({
  selector:'registration',
  templateUrl: 'app/register/register.html',
  providers: [],
  directives: [RegisterTakerComponent]

}) export class RegistrationComponent implements OnInit {

    whoRegistered : string = '';

    onRegistered(registered : string) {
        this.whoRegistered = 'You just registered ' + registered;
    }

    onSignedOut(registered: string) {
      this.whoRegistered = 'You signed out ' + registered;
    }

    ngOnInit() {

    }

}
