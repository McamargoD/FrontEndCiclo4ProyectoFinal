import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalRoutingModule } from './sucursal-routing.module';
import { DepartamentoComponent } from './departamento/departamento.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { DireccionComponent } from './direccion/direccion.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { BuscarCiudadComponent } from './ciudad/buscar-ciudad/buscar-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { BuscarDepartamentoComponent } from './departamento/buscar-departamento/buscar-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { CrearDireccionComponent } from './direccion/crear-direccion/crear-direccion.component';
import { BuscarDireccionComponent } from './direccion/buscar-direccion/buscar-direccion.component';
import { EditarDireccionComponent } from './direccion/editar-direccion/editar-direccion.component';
import { EliminarDireccionComponent } from './direccion/eliminar-direccion/eliminar-direccion.component';
import { CrearTelefonoComponent } from './telefono/crear-telefono/crear-telefono.component';
import { BuscarTelefonoComponent } from './telefono/buscar-telefono/buscar-telefono.component';
import { EditarTelefonoComponent } from './telefono/editar-telefono/editar-telefono.component';
import { EliminarTelefonoComponent } from './telefono/eliminar-telefono/eliminar-telefono.component';


@NgModule({
  declarations: [
    DepartamentoComponent,
    CiudadComponent,
    DireccionComponent,
    TelefonoComponent,
    CrearCiudadComponent,
    BuscarCiudadComponent,
    EditarCiudadComponent,
    EliminarCiudadComponent,
    CrearDepartamentoComponent,
    BuscarDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
    CrearDireccionComponent,
    BuscarDireccionComponent,
    EditarDireccionComponent,
    EliminarDireccionComponent,
    CrearTelefonoComponent,
    BuscarTelefonoComponent,
    EditarTelefonoComponent,
    EliminarTelefonoComponent
  ],
  imports: [
    CommonModule,
    SucursalRoutingModule
  ]
})
export class SucursalModule { }
