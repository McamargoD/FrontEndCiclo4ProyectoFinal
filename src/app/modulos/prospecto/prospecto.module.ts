import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectoRoutingModule } from './prospecto-routing.module';
import { NombreComponent } from './nombre/nombre.component';
import { ApellidoComponent } from './apellido/apellido.component';
import { CorreoComponent } from './correo/correo.component';
import { CelularComponent } from './celular/celular.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { CrearApellidoComponent } from './apellido/crear-apellido/crear-apellido.component';
import { BuscarApellidoComponent } from './apellido/buscar-apellido/buscar-apellido.component';
import { EditarApellidoComponent } from './apellido/editar-apellido/editar-apellido.component';
import { EliminarApellidoComponent } from './apellido/eliminar-apellido/eliminar-apellido.component';
import { CrearCelularComponent } from './celular/crear-celular/crear-celular.component';
import { BuscarCelularComponent } from './celular/buscar-celular/buscar-celular.component';
import { EditarCelularComponent } from './celular/editar-celular/editar-celular.component';
import { EliminarCelularComponent } from './celular/eliminar-celular/eliminar-celular.component';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { BuscarComentarioComponent } from './comentario/buscar-comentario/buscar-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { EliminarComentarioComponent } from './comentario/eliminar-comentario/eliminar-comentario.component';
import { CrearCorreoComponent } from './correo/crear-correo/crear-correo.component';
import { BuscarCorreoComponent } from './correo/buscar-correo/buscar-correo.component';
import { EditarCorreoComponent } from './correo/editar-correo/editar-correo.component';
import { EliminarCorreoComponent } from './correo/eliminar-correo/eliminar-correo.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';


@NgModule({
  declarations: [
    NombreComponent,
    ApellidoComponent,
    CorreoComponent,
    CelularComponent,
    ComentarioComponent,
    CrearApellidoComponent,
    BuscarApellidoComponent,
    EditarApellidoComponent,
    EliminarApellidoComponent,
    CrearCelularComponent,
    BuscarCelularComponent,
    EditarCelularComponent,
    EliminarCelularComponent,
    CrearComentarioComponent,
    BuscarComentarioComponent,
    EditarComentarioComponent,
    EliminarComentarioComponent,
    CrearCorreoComponent,
    BuscarCorreoComponent,
    EditarCorreoComponent,
    EliminarCorreoComponent,
    CrearNombreComponent,
    BuscarNombreComponent,
    EditarNombreComponent,
    EliminarNombreComponent
  ],
  imports: [
    CommonModule,
    ProspectoRoutingModule
  ]
})
export class ProspectoModule { }
