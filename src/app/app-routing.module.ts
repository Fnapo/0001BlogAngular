
/*
    Original:

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { ListadoComponent } from './views/listado/listado.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';

let Pagina404: string = "pagina404";

const routes: Routes = [
    { path: "listado", component: ListadoComponent },
    { path: "sobreNosotros", component: AcercaDeNosotrosComponent },
    { path: "", redirectTo: "/listado", pathMatch: "full" }, // Por defecto o primera ruta de acceso
    { path: Pagina404, component: PaginaNoEncontradaComponent },
    { path: "**", redirectTo: Pagina404 } // Error 404, página no encontrada
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static readonly Pagina404: string = `/${Pagina404}`;
}
