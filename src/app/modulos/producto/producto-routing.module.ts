import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarDescripcionComponent } from './descripcion/buscar-descripcion/buscar-descripcion.component';
import { CrearDescripcionComponent } from './descripcion/crear-descripcion/crear-descripcion.component';
import { EditarDescripcionComponent } from './descripcion/editar-descripcion/editar-descripcion.component';
import { EliminarDescripcionComponent } from './descripcion/eliminar-descripcion/eliminar-descripcion.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';
import { BuscarPrecioComponent } from './precio/buscar-precio/buscar-precio.component';
import { CrearPrecioComponent } from './precio/crear-precio/crear-precio.component';
import { EditarPrecioComponent } from './precio/editar-precio/editar-precio.component';
import { EliminarPrecioComponent } from './precio/eliminar-precio/eliminar-precio.component';
import { BuscarTipoComponent } from './tipo/buscar-tipo/buscar-tipo.component';
import { CrearTipoComponent } from './tipo/crear-tipo/crear-tipo.component';
import { EditarTipoComponent } from './tipo/editar-tipo/editar-tipo.component';
import { EliminarTipoComponent } from './tipo/eliminar-tipo/eliminar-tipo.component';

const routes: Routes = [
  {
    path: "crear-tipo",
    component: CrearTipoComponent
  },
  {
    path: "buscar-tipo",
    component: BuscarTipoComponent
  },
  {
    path: "editar-tipo",
    component: EditarTipoComponent
  },
  {
    path: "eliminar-tipo",
    component: EliminarTipoComponent
  },
  {
    path: "crear-precio",
    component: CrearPrecioComponent
  },
  {
    path: "buscar-precio",
    component: BuscarPrecioComponent
  },
  {
    path: "editar-precio",
    component: EditarPrecioComponent
  },
  {
    path: "eliminar-precio",
    component: EliminarPrecioComponent
  },
  {
    path: "crear-nombre",
    component: CrearNombreComponent
  },
  {
    path: "buscar-nombre",
    component: BuscarNombreComponent
  },
  {
    path: "editar-nombre",
    component: EditarNombreComponent
  },
  {
    path: "eliminar-nombre",
    component: EliminarNombreComponent
  },
  {
    path: "crear-descripcion",
    component: CrearDescripcionComponent
  },
  {
    path: "buscar-descripcion",
    component: BuscarDescripcionComponent
  },
  {
    path: "editar-descripcion",
    component: EditarDescripcionComponent
  },
  {
    path: "eliminar-descripcion",
    component: EliminarDescripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
