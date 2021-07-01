import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { KaranApiService } from '../core/services/karan-api.service'
import {AlertsService} from "../core/services/alerts.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  dataRegister: FormGroup;

  constructor(
    private fB: FormBuilder,
    private karanApiService: KaranApiService,
    private alerts: AlertsService,
  ) {
    this.registerForm = fB.group({
      user: [''],
      password: [''],
      name: [''],
      lastName: [''],
      email: [''],
      dni: [''],
      juridica: [false],
    });
    this.dataRegister = this.fB.group({
        email: [''],
        username: [''],
        dni: [''],
        first_name: [''],
        last_name: [''],
        password: [''],
        password_confirmation: ['']
      }
    )
  }



  ngOnInit(): void {
  }

  registrarUsuario () {
    this.dataRegister = this.fB.group({
        email: [this.registerForm.value.email],
        username: [this.registerForm.value.user],
        dni: [this.registerForm.value.dni],
        first_name: [this.registerForm.value.name],
        last_name: [this.registerForm.value.lastName],
        password: [this.registerForm.value.password],
        password_confirmation: [this.registerForm.value.password]
      }
    )
    if(this.registerForm.value.juridica){
      const aux = this.karanApiService.registerJuridico(this.dataRegister.value);
      aux.subscribe((data:any)=>{
        //Dependiendo de la respuesta mostrar la alerta.
        // this.alerts.showAlerts('Registro Con Exito!', 'success', 'Ahora puede acceder a su cuenta.');
        console.log(data);
      })
    }else{
      const aux = this.karanApiService.registerNatural(this.dataRegister.value);
      console.log('aux', aux);
      aux.subscribe((data:any)=>{
        console.log(data);
      })
    }

  }
}
