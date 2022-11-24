import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CedulaComponent } from './cedula/cedula.component';
import { NombreComponent } from './nombre/nombre.component';
import { ApellidoComponent } from './apellido/apellido.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { RolComponent } from './rol/rol.component';
import { CorreoComponent } from './correo/correo.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { CrearApellidoComponent } from './apellido/crear-apellido/crear-apellido.component';
import { BuscarApellidoComponent } from './apellido/buscar-apellido/buscar-apellido.component';
import { EditarApellidoComponent } from './apellido/editar-apellido/editar-apellido.component';
import { EliminarApellidoComponent } from './apellido/eliminar-apellido/eliminar-apellido.component';
import { CrearCedulaComponent } from './cedula/crear-cedula/crear-cedula.component';
import { BuscarCedulaComponent } from './cedula/buscar-cedula/buscar-cedula.component';
import { EditarCedulaComponent } from './cedula/editar-cedula/editar-cedula.component';
import { EliminarCedulaComponent } from './cedula/eliminar-cedula/eliminar-cedula.component';
import { CrearContrasenaComponent } from './contrasena/crear-contrasena/crear-contrasena.component';
import { BuscarContrasenaComponent } from './contrasena/buscar-contrasena/buscar-contrasena.component';
import { EditarContrasenaComponent } from './contrasena/editar-contrasena/editar-contrasena.component';
import { EliminarContrasenaComponent } from './contrasena/eliminar-contrasena/eliminar-contrasena.component';
import { CrearCorreoComponent } from './correo/crear-correo/crear-correo.component';
import { BuscarCorreoComponent } from './correo/buscar-correo/buscar-correo.component';
import { EditarCorreoComponent } from './correo/editar-correo/editar-correo.component';
import { EliminarCorreoComponent } from './correo/eliminar-correo/eliminar-correo.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';
import { CrearRolComponent } from './rol/crear-rol/crear-rol.component';
import { BuscarRolComponent } from './rol/buscar-rol/buscar-rol.component';
import { EditarRolComponent } from './rol/editar-rol/editar-rol.component';
import { EliminarRolComponent } from './rol/eliminar-rol/eliminar-rol.component';
import { CrearTelefonoComponent } from './telefono/crear-telefono/crear-telefono.component';
import { BuscarTelefonoComponent } from './telefono/buscar-telefono/buscar-telefono.component';
import { EditarTelefonoComponent } from './telefono/editar-telefono/editar-telefono.component';
import { EliminarTelefonoComponent } from './telefono/eliminar-telefono/eliminar-telefono.component';


@NgModule({
  declarations: [
    CedulaComponent,
    NombreComponent,
    ApellidoComponent,
    TelefonoComponent,
    RolComponent,
    CorreoComponent,
    ContrasenaComponent,
    CrearApellidoComponent,
    BuscarApellidoComponent,
    EditarApellidoComponent,
    EliminarApellidoComponent,
    CrearCedulaComponent,
    BuscarCedulaComponent,
    EditarCedulaComponent,
    EliminarCedulaComponent,
    CrearContrasenaComponent,
    BuscarContrasenaComponent,
    EditarContrasenaComponent,
    EliminarContrasenaComponent,
    CrearCorreoComponent,
    BuscarCorreoComponent,
    EditarCorreoComponent,
    EliminarCorreoComponent,
    CrearNombreComponent,
    BuscarNombreComponent,
    EditarNombreComponent,
    EliminarNombreComponent,
    CrearRolComponent,
    BuscarRolComponent,
    EditarRolComponent,
    EliminarRolComponent,
    CrearTelefonoComponent,
    BuscarTelefonoComponent,
    EditarTelefonoComponent,
    EliminarTelefonoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
