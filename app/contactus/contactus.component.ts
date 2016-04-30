import {Component, OnInit} from 'angular2/core';
import {ControlGroup,Control, FORM_DIRECTIVES, Validators, FormBuilder} from 'angular2/common';

@Component({
  selector : 'contactus',
  templateUrl : 'app/contactus/contactus.html',
  directives : [FORM_DIRECTIVES]
})
export class ContactUsComponent implements OnInit{

  formModel : ControlGroup;
  _formBuilder;

  constructor(_formBuilder : FormBuilder) {
      this._formBuilder = _formBuilder;
      this.configureContactForm();
  }

  ngOnInit() {

  }

  configureContactForm() {
    // this is one way of doing the model-driven formModel
    // without having to use the formBuilder

    this.formModel = new ControlGroup({
      'personName' : new Control('', Validators.required),
      'personPhone' : new Control(''),
      'personEmail' : new Control(''),
      'personAddressGroup' : new ControlGroup({
          'address' : new Control(''),
          'city' : new Control(''),
          'zipCode' : new Control('')
      })
    })
    

    // it seems FormBuilder has been dumped
    //you can also use the FormBuilder way
    /* let personName = new Control('', Validators.compose([Validators.required, Validators.maxLength(10)]));
    let personPhone = new Control('');
    let personEmail = new Control('');
    let personAddressGroup = new ControlGroup({
        'address' : new Control(''),
        'city' : new Control(''),
        'zipCode' : new Control('')
    });

    this.formModel = this._formBuilder.group({
      personName : personName,
      personPhone : personPhone,
      personEmail : personEmail,
      personAddressGroup : personAddressGroup
    })
    */

  }


 onSubmit() {
   if (this.formModel.valid) {
     console.log('form submitted');
   } else {
     console.log('form is invalid');
   }

 }




}
