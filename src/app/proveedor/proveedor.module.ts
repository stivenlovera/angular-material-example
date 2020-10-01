import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor/proveedor.component';


@NgModule({
  declarations: [ProveedorComponent],
  imports: [
    CommonModule,
    ProveedorRoutingModule
  ]
})
export class ProveedorModule { }
