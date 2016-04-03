import {Injectable, Output, EventEmitter} from 'angular2/core';

@Injectable()
export class CheckoutNotificatorService {
  @Output() checkoutEmitter: EventEmitter<any> = new EventEmitter();

  itemHasCheckedout() {

      this.checkoutEmitter.next(true);
  }

  getCheckoutEmitter(): EventEmitter<any> {
      return this.checkoutEmitter;
  }

}
