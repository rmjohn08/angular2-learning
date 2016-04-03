import {Injectable, EventEmitter, Output} from 'angular2/core';
//import {EventEmitter} from 'angular2/event';

export class RegisteredUser {
  email: string
  name: string
  constructor (usr:any)
  {
    this.email = usr.email;
    this.name = usr.name;
  }
}

@Injectable()
export class UserService {
    registeredUser: RegisteredUser;
    @Output() registrationEmitter: EventEmitter<any> = new EventEmitter();

    getEmptyRegisteredUser(): RegisteredUser {
        var usr =[];
        usr['name'] = null;
        usr['email'] = null;
        return new RegisteredUser(usr);
    }

    getRegisteredUser(): RegisteredUser {
      return this.registeredUser;
    }

    registerUser (usr:any) {
      this.registeredUser = usr;
      this.registrationEmitter.next(usr);
    }

    signoutUser() {
      this.registerUser = null;
    }

}
