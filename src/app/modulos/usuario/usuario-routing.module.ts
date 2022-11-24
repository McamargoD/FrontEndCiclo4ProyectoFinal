import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarApellidoComponent } from './apellido/buscar-apellido/buscar-apellido.component';
import { CrearApellidoComponent } from './apellido/crear-apellido/crear-apellido.component';
import { EditarApellidoComponent } from './apellido/editar-apellido/editar-apellido.component';
import { EliminarApellidoComponent } from './apellido/eliminar-apellido/eliminar-apellido.component';
import { BuscarCedulaComponent } from './cedula/buscar-cedula/buscar-cedula.component';
import { CrearCedulaComponent } from './cedula/crear-cedula/crear-cedula.component';
import { EditarCedulaComponent } from './cedula/editar-cedula/editar-cedula.component';
import { EliminarCedulaComponent } from './cedula/eliminar-cedula/eliminar-cedula.component';
import { BuscarContrasenaComponent } from './contrasena/buscar-contrasena/buscar-contrasena.component';
import { CrearContrasenaComponent } from './contrasena/crear-contrasena/crear-contrasena.component';
import { EditarContrasenaComponent } from './contrasena/editar-contrasena/editar-contrasena.component';
import { EliminarContrasenaComponent } from './contrasena/eliminar-contrasena/eliminar-contrasena.component';
import { BuscarCorreoComponent } from './correo/buscar-correo/buscar-correo.component';
import { CrearCorreoComponent } from './correo/crear-correo/crear-correo.component';
import { EditarCorreoComponent } from './correo/editar-correo/editar-correo.component';
import { EliminarCorreoComponent } from './correo/eliminar-correo/eliminar-correo.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';
import { BuscarRolComponent } from './rol/buscar-rol/buscar-rol.component';
import { CrearRolComponent } from './rol/crear-rol/crear-rol.component';
import { EditarRolComponent } from './rol/editar-rol/editar-rol.component';
import { EliminarRolComponent } from './rol/eliminar-rol/eliminar-rol.component';
import { BuscarTelefonoComponent } from './telefono/buscar-telefono/buscar-telefono.component';
import { CrearTelefonoComponent } from './telefono/crear-telefono/crear-telefono.component';
import { EditarTelefonoComponent } from './telefono/editar-telefono/editar-telefono.component';
import { EliminarTelefonoComponent } from './telefono/eliminar-telefono/eliminar-telefono.component';


const routes: Routes = [
  {
    path:"crear-telefono",
    component:CrearTelefonoComponent
  },
  {
    path:"buscar-telefono",
    component:BuscarTelefonoComponent
  },
  
  {
    path:"editar-telefono",
    component:EditarTelefonoComponent
  },
  {
    path:"eliminar-telefono",
    component:EliminarTelefonoComponent
  },
  {
    path:"crear-rol",
    component:CrearRolComponent
  },
  {
    path:"buscar-rol",
    component:BuscarRolComponent
  },
  {
    path:"editar-rol",
    component:EditarRolComponent
  },
  {
    path:"eliminar-rol",
    component:EliminarRolComponent
  },
  {
    path:"listar-nombres",
    component: BuscarNombreComponent
  },
  {
    path:"crear-nombre",
    component:CrearNombreComponent
  },
  {
    path:"buscar-nombre",
    component:BuscarNombreComponent
  },
  {
    path:"editar-nombre/:id",
    component:EditarNombreComponent
  },
  {
    path:"eliminar-nombre",
    component:EliminarNombreComponent
  },
  {
    path:"crear-correo",
    component:CrearCorreoComponent
  },
  {
    path:"buscar-correo",
    component:BuscarCorreoComponent
  },
  {
    path:"editar-correo",
    component:EditarCorreoComponent
  },
  {
    path:"eliminar-correo",
    component:EliminarCorreoComponent
  },
  {
    path:"crear-contrasena",
    component:CrearContrasenaComponent
  },
  {
    path:"buscar-contrasena",
    component:BuscarContrasenaComponent
  },
  {
    path:"editar-contrasena",
    component:EditarContrasenaComponent
  },
  {
    path:"eliminar-contrasena",
    component:EliminarContrasenaComponent
  },
  {
    path:"crear-cedula",
    component:CrearCedulaComponent
  },
  {
    path:"buscar-cedula",
    component:BuscarCedulaComponent
  },
  {
    path:"editar-cedula",
    component:EditarCedulaComponent
  },
  {
    path:"eliminar-cedula",
    component:EliminarCedulaComponent
  },
  {
    path:"crear-apellido",
    component:CrearApellidoComponent
  },
  {
    path:"buscar-apellido",
    component:BuscarApellidoComponent
  },
  {
    path:"editar-apellido",
    component:EditarApellidoComponent
  },
  {
    path:"eliminar-apellido",
    component:EliminarApellidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
