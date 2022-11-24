import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComentarioComponent } from './comentario/buscar-comentario/buscar-comentario.component';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { EliminarComentarioComponent } from './comentario/eliminar-comentario/eliminar-comentario.component';
import { BuscarEspecieComponent } from './especie/buscar-especie/buscar-especie.component';
import { CrearEspecieComponent } from './especie/crear-especie/crear-especie.component';
import { EditarEspecieComponent } from './especie/editar-especie/editar-especie.component';
import { EliminarEspecieComponent } from './especie/eliminar-especie/eliminar-especie.component';
import { BuscarEstadoComponent } from './estado/buscar-estado/buscar-estado.component';
import { CrearEstadoComponent } from './estado/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { EliminarEstadoComponent } from './estado/eliminar-estado/eliminar-estado.component';
import { BuscarFotoComponent } from './foto/buscar-foto/buscar-foto.component';
import { CrearFotoComponent } from './foto/crear-foto/crear-foto.component';
import { EditarFotoComponent } from './foto/editar-foto/editar-foto.component';
import { EliminarFotoComponent } from './foto/eliminar-foto/eliminar-foto.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';

const routes: Routes = [
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
    path: "crear-foto",
    component: CrearFotoComponent
  },
  {
    path: "buscar-foto",
    component: BuscarFotoComponent
  },
  {
    path: "editar-foto",
    component: EditarFotoComponent
  },
  {
    path: "eliminar-foto",
    component: EliminarFotoComponent
  },
  {
    path: "crear-estado",
    component: CrearEstadoComponent
  },
  {
    path: "buscar-estado",
    component: BuscarEstadoComponent
  },
  {
    path: "editar-estado",
    component: EditarEstadoComponent
  },
  {
    path: "eliminar-estado",
    component: EliminarEstadoComponent
  },
  {
    path: "crear-especie",
    component: CrearEspecieComponent
  },
  {
    path: "buscar-especie",
    component: BuscarEspecieComponent
  },
  {
    path: "editar-especie",
    component: EditarEspecieComponent
  },
  {
    path: "eliminar-especie",
    component: EliminarEspecieComponent
  },
  {
    path: "crear-comentario",
    component: CrearComentarioComponent
  },
  {
    path: "buscar-comentario",
    component: BuscarComentarioComponent
  },
  {
    path: "editar-comentario",
    component: EditarComentarioComponent
  },
  {
    path: "eliminar-comentario",
    component: EliminarComentarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }
