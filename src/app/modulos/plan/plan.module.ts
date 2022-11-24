import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { NombreComponent } from './nombre/nombre.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { PrecioComponent } from './precio/precio.component';
import { CrearDescripcionComponent } from './descripcion/crear-descripcion/crear-descripcion.component';
import { BuscarDescripcionComponent } from './descripcion/buscar-descripcion/buscar-descripcion.component';
import { EditarDescripcionComponent } from './descripcion/editar-descripcion/editar-descripcion.component';
import { EliminarDescripcionComponent } from './descripcion/eliminar-descripcion/eliminar-descripcion.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';
import { CrearPrecioComponent } from './precio/crear-precio/crear-precio.component';
import { BuscarPrecioComponent } from './precio/buscar-precio/buscar-precio.component';
import { EditarPrecioComponent } from './precio/editar-precio/editar-precio.component';
import { EliminarPrecioComponent } from './precio/eliminar-precio/eliminar-precio.component';


@NgModule({
  declarations: [
    NombreComponent,
    DescripcionComponent,
    PrecioComponent,
    CrearDescripcionComponent,
    BuscarDescripcionComponent,
    EditarDescripcionComponent,
    EliminarDescripcionComponent,
    CrearNombreComponent,
    BuscarNombreComponent,
    EditarNombreComponent,
    EliminarNombreComponent,
    CrearPrecioComponent,
    BuscarPrecioComponent,
    EditarPrecioComponent,
    EliminarPrecioComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
