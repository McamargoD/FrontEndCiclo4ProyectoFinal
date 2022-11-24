import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarCiudadComponent } from './ciudad/buscar-ciudad/buscar-ciudad.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { BuscarDepartamentoComponent } from './departamento/buscar-departamento/buscar-departamento.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { BuscarDireccionComponent } from './direccion/buscar-direccion/buscar-direccion.component';
import { CrearDireccionComponent } from './direccion/crear-direccion/crear-direccion.component';
import { EditarDireccionComponent } from './direccion/editar-direccion/editar-direccion.component';
import { EliminarDireccionComponent } from './direccion/eliminar-direccion/eliminar-direccion.component';
import { BuscarTelefonoComponent } from './telefono/buscar-telefono/buscar-telefono.component';
import { CrearTelefonoComponent } from './telefono/crear-telefono/crear-telefono.component';
import { EditarTelefonoComponent } from './telefono/editar-telefono/editar-telefono.component';
import { EliminarTelefonoComponent } from './telefono/eliminar-telefono/eliminar-telefono.component';

const routes: Routes = [
  {
    path:"crear-ciudad",
    component:CrearCiudadComponent
  },
  {
    path:"buscar-ciudad",
    component:BuscarCiudadComponent
  },
  {
    path:"editar-ciudad",
    component:EditarCiudadComponent
  },
  {
    path:"eliminar-ciudad",
    component:EliminarCiudadComponent
  },
  {
    path:"crear-departamento",
    component:CrearDepartamentoComponent
  },
  {
    path:"buscar-departamento",
    component:BuscarDepartamentoComponent
  },
  {
    path:"editar-departamento",
    component:EditarDepartamentoComponent
  },
  {
    path:"eliminar-departamento",
    component:EliminarDepartamentoComponent
  },
  {
    path:"crear-direccion",
    component:CrearDireccionComponent
  },
  {
    path:"buscar-direccion",
    component:BuscarDireccionComponent
  },
  {
    path:"editar-direccion",
    component:EditarDireccionComponent
  },
  {
    path:"eliminar-direccion",
    component:EliminarDireccionComponent
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }
