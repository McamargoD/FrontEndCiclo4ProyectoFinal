import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarApellidoComponent } from './apellido/buscar-apellido/buscar-apellido.component';
import { CrearApellidoComponent } from './apellido/crear-apellido/crear-apellido.component';
import { EditarApellidoComponent } from './apellido/editar-apellido/editar-apellido.component';
import { EliminarApellidoComponent } from './apellido/eliminar-apellido/eliminar-apellido.component';
import { BuscarCelularComponent } from './celular/buscar-celular/buscar-celular.component';
import { CrearCelularComponent } from './celular/crear-celular/crear-celular.component';
import { EditarCelularComponent } from './celular/editar-celular/editar-celular.component';
import { EliminarCelularComponent } from './celular/eliminar-celular/eliminar-celular.component';
import { BuscarComentarioComponent } from './comentario/buscar-comentario/buscar-comentario.component';
import { CrearComentarioComponent } from './comentario/crear-comentario/crear-comentario.component';
import { EditarComentarioComponent } from './comentario/editar-comentario/editar-comentario.component';
import { EliminarComentarioComponent } from './comentario/eliminar-comentario/eliminar-comentario.component';
import { BuscarCorreoComponent } from './correo/buscar-correo/buscar-correo.component';
import { CrearCorreoComponent } from './correo/crear-correo/crear-correo.component';
import { EditarCorreoComponent } from './correo/editar-correo/editar-correo.component';
import { EliminarCorreoComponent } from './correo/eliminar-correo/eliminar-correo.component';
import { BuscarNombreComponent } from './nombre/buscar-nombre/buscar-nombre.component';
import { CrearNombreComponent } from './nombre/crear-nombre/crear-nombre.component';
import { EditarNombreComponent } from './nombre/editar-nombre/editar-nombre.component';
import { EliminarNombreComponent } from './nombre/eliminar-nombre/eliminar-nombre.component';

const routes: Routes = [
  {
    path:"crea-nombre",
    component:CrearNombreComponent
  },
  {
    path:"buscar-nombre",
    component:BuscarNombreComponent
  },
  {
    path:"editar-nombre",
    component:EditarNombreComponent
  },
  {  
    path:"eliminar-nombre",
    component: EliminarNombreComponent
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
    path:"crear-comentario",
    component:CrearComentarioComponent
  },
  { 
    path:"buscar-comentario",
    component:BuscarComentarioComponent
  },
  { 
    path:"editar-comentario",
    component:EditarComentarioComponent
  },
  { 
    path:"eliminar-comentario",
    component:EliminarComentarioComponent
  },
  { 
    path:"crear-celular",
    component:CrearCelularComponent
  },
  { 
    path:"buscar-celular",
    component:BuscarCelularComponent
  },
  { 
    path:"editar-celular",
    component:EditarCelularComponent
  },
  { 
    path:"eliminar-celular",
    component:EliminarCelularComponent
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
export class ProspectoRoutingModule { }
