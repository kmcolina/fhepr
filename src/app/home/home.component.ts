import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { CheckboxModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fB: FormBuilder,
    // private formBuilder: FormBuilder,
  ) {
    this.registerForm = fB.group({
      user: [''],
      password: [''],
      name: [''],
      lastName: [''],
      email: [''],
      cid: [''],
      juridica: [false],
    })
  }

  ngOnInit(): void {
  }

}
