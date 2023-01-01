import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CapPalabrasPipe } from './pipes/capPalabras/cap-palabras.pipe';
import { BotonLogoutComponent } from './componentes/boton-logout/boton-logout.component';

const rutasAdministracion: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/administracion/dashboard', pathMatch: "full" } // única ruta por eso "", pero podría tener nombre 'dashboard'
]

@NgModule({
    declarations: [
        DashboardComponent,
        CapPalabrasPipe,
        BotonLogoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(rutasAdministracion),
    ],
    exports: [
        CapPalabrasPipe,
    ]
})
export class AdministracionModule { }
