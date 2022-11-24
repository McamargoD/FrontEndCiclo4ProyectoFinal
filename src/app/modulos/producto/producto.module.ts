import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TipoComponent } from './tipo/tipo.component';
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
import { CrearTipoComponent } from './tipo/crear-tipo/crear-tipo.component';
import { BuscarTipoComponent } from './tipo/buscar-tipo/buscar-tipo.component';
import { EditarTipoComponent } from './tipo/editar-tipo/editar-tipo.component';
import { EliminarTipoComponent } from './tipo/eliminar-tipo/eliminar-tipo.component';


@NgModule({
  declarations: [
    TipoComponent,
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
    EditarPrecioComponent,
    EliminarPrecioComponent,
    CrearTipoComponent,
    BuscarTipoComponent,
    EditarTipoComponent,
    EliminarTipoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
