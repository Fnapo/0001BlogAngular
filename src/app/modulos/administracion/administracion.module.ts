import { NgModule, Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CapPalabrasPipe } from './pipes/capPalabras/cap-palabras.pipe';
import { BotonLogoutComponent } from './componentes/boton-logout/boton-logout.component';
import { EditarEntradaComponent } from './componentes/editar-entrada/editar-entrada.component';
import { ReactiveFormsModule } from '@angular/forms';

const rutasAdministracion: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'editarEntrada/:id', component: EditarEntradaComponent },
    { path: '', redirectTo: '/administracion/dashboard', pathMatch: "full" } // única ruta por eso "", pero podría tener nombre 'dashboard'
]

@NgModule({
    declarations: [
        DashboardComponent,
        CapPalabrasPipe,
        BotonLogoutComponent,
        EditarEntradaComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(rutasAdministracion),
        DatePipe,
        ReactiveFormsModule // Obligatorio para crear un reactive form
    ],
    exports: [
        CapPalabrasPipe,
    ]
})
export class AdministracionModule { }
