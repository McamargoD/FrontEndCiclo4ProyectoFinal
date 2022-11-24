import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotaRoutingModule } from './mascota-routing.module';
import { NombreComponent } from './nombre/nombre.component';
import { EstadoComponent } from './estado/estado.component';
import { EspecieComponent } from './especie/especie.component';
import { FotoComponent } from './foto/foto.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { BuscarComentarioComponent } from './comentario/buscar-comentario/buscar-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { EliminarComentarioComponent } from './comentario/eliminar-comentario/eliminar-comentario.component';
import { CrearEspecieComponent } from './especie/crear-especie/crear-especie.component';
import { BuscarEspecieComponent } from './especie/buscar-especie/buscar-especie.component';
import { EditarEspecieComponent } from './especie/editar-especie/editar-especie.component';
import { EliminarEspecieComponent } from './especie/eliminar-especie/eliminar-especie.component';
import { CrearEstadoComponent } from './estado/crear-estado/crear-estado.component';
import { BuscarEstadoComponent } from './estado/buscar-estado/buscar-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { EliminarEstadoComponent } from './estado/eliminar-estado/eliminar-estado.component';
import { CrearFotoComponent } from './foto/crear-foto/crear-foto.component';
import { BuscarFotoComponent } from './foto/buscar-foto/buscar-foto.component';
import { EditarFotoComponent } from './foto/editar-foto/editar-foto.component';
import { EliminarFotoComponent } from './foto/eliminar-foto/eliminar-foto.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';


@NgModule({
  declarations: [
    NombreComponent,
    EstadoComponent,
    EspecieComponent,
    FotoComponent,
    ComentarioComponent,
    CrearComentarioComponent,
    BuscarComentarioComponent,
    EditarComentarioComponent,
    EliminarComentarioComponent,
    CrearEspecieComponent,
    BuscarEspecieComponent,
    EditarEspecieComponent,
    EliminarEspecieComponent,
    CrearEstadoComponent,
    BuscarEstadoComponent,
    EditarEstadoComponent,
    EliminarEstadoComponent,
    CrearFotoComponent,
    BuscarFotoComponent,
    EditarFotoComponent,
    EliminarFotoComponent,
    CrearNombreComponent,
    BuscarNombreComponent,
    EditarNombreComponent,
    EliminarNombreComponent
  ],
  imports: [
    CommonModule,
    MascotaRoutingModule
  ]
})
export class MascotaModule { }
