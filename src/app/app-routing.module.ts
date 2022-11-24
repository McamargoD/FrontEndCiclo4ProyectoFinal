import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "usuario",
    loadChildren: () => import("./modulos/usuario/usuario.module").then(x => x.UsuarioModule)
  },
  {
    path: "mascota",
    loadChildren: () => import("./modulos/mascota/mascota.module").then(x => x.MascotaModule)
  },
  {
    path: "plan",
    loadChildren: () => import("./modulos/plan/plan.module").then(x => x.PlanModule)
  },
  {
    path: "sucursal",
    loadChildren: () => import("./modulos/sucursal/sucursal.module").then(x => x.SucursalModule)
  },
  {
    path: "producto",
    loadChildren: () => import("./modulos/producto/producto.module").then(x => x.ProductoModule)
  },
  {
    path: "prospecto",
    loadChildren: () => import("./modulos/prospecto/prospecto.module").then(x => x.ProspectoModule)
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
