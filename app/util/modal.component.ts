import {Component, EventEmitter, Output} from 'angular2/core';
import {CheckoutNotificatorService} from '../services/checkout-notificator.service';

@Component({
  selector: 'modal-component',
  templateUrl:'app/util/modal-component.html',
  providers: [],
  directives: [],
  pipes: []
})
export class ModalComponent {
  modalContent: string = "<h4>Checking out item</h4>";
  checkoutConfirmed: boolean = false;

  constructor(private _checkoutNotificator: CheckoutNotificatorService) {

  }

  setModalContent(contentString: string) {
    this.modalContent = contentString;
  }

  //launchModal($event, cm) {
  //    cm.modal('show');
  //    //cm.modal({backdrop: 'static', keyboard:false});
  //    //this.modalObj.modal('show');
  //}

  cancelCheckout() {
      this.checkoutConfirmed = false;
  }

  confirmed() {
    this.checkoutConfirmed = true;
    this._checkoutNotificator.itemHasCheckedout();
    //this._checkoutNotificator.itemHasCheckedout(this.checkoutConfirmed);
  }


}
