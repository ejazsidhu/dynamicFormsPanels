import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.css']
})
export class FormWizardComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  panelOpenState = true;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  //   window.addEventListener("beforeunload", function (e) {
  //     var confirmationMessage = "\o/";
  //     console.log("cond");
  //     e.returnValue = confirmationMessage;
  //     this.alert(confirmationMessage)     // Gecko, Trident, Chrome 34+
  //     // return confirmationMessage;              // Gecko, WebKit, Chrome <34
  // });
  }

}
