import {Component, EventEmitter, Output, ElementRef} from 'angular2/core';
import {CheckoutNotificatorService} from '../services/checkout-notificator.service';

declare var jQuery:any;

@Component({
  selector: 'modal-component',
  templateUrl:'app/util/modal-component.html',
  providers: [],
  directives: [],
  pipes: []
})
export class ModalComponent {
  elementRef: ElementRef;
  modalContent: string = "<h4>Checking out item</h4>";
  checkoutConfirmed: boolean = false;

  message1: string = "";
  message2: string = "";
  constructor(private _checkoutNotificator: CheckoutNotificatorService,
        elementRef: ElementRef) {
          this.elementRef = elementRef;
  }

  setModalContent(contentString: string) {
    this.modalContent = contentString;
  }

  openModal(item: any, user: any) {
    this.message1 = "Item: " + item.name + "";
    this.message2 = "Account: " + user.email + "";
    this.modalContent = this.message1 + this.message2;

    //jQuery(this.elementRef.nativeElement).find("#mymodal").modal
    this.doModalAction('show');
  }

  doModalAction(action: string) {
      jQuery(this.elementRef.nativeElement).find("#mymodal").modal(action);
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
    this.doModalAction('hide');
    //this._checkoutNotificator.itemHasCheckedout(this.checkoutConfirmed);
  }


}
