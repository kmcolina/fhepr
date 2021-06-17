import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(public modalRef: MDBModalRef,
              private formBuilder: FormBuilder,
              ) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    // this.validatingForm = new FormGroup({
    //   loginFormModalEmail: new FormControl('', Validators.email),
    //   loginFormModalPassword: new FormControl('', Validators.required)
    // });
  }

  // get loginFormModalEmail() {
  //   return this.validatingForm.get('email');
  // }
  //
  // get loginFormModalPassword() {
  //   return this.validatingForm.get('loginFormModalPassword');
  // }

}
