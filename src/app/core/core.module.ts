import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import {IconsModule, ModalModule} from "angular-bootstrap-md";
import {InputUtilitiesModule} from "ng-uikit-pro-standard";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    InputUtilitiesModule,
    ModalModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
