import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UsuarioModule { }
