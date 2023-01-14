import { Component, OnInit } from '@angular/core';
import { IEntrada } from '../../../../shared/interfaces/ientrada';
import { EntradasService } from '../../../../shared/services/entrada/entradas.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public listadoEntradas: IEntrada[] = [];

    constructor(private entradasService: EntradasService, private router: Router) { }

    ngOnInit(): void {
        this.entradasService.RecuperarEntradas().subscribe({
            next: dato => this.listadoEntradas = dato,
            error: () => { },
            complete: () => { }
        })
    }

    public EditarEntrada(id: number): void {
        this.router.navigate([`/administracion/editarEntrada/${id}`]);
    }
}
