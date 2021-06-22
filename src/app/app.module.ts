import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import {CoreModule} from "./core/core.module";
import {ModalComponent} from "./core/modal/modal.component";
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ModalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        MDBBootstrapModule.forRoot(),
        MDBBootstrapModulesPro.forRoot(),
        ReactiveFormsModule,
    ],
  providers: [MDBSpinningPreloader],
  entryComponents: [ ModalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
