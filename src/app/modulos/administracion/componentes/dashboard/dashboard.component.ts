import { Component, OnInit } from '@angular/core';
import { IEntrada } from '../../../../shared/interfaces/ientrada';
import { EntradasService } from '../../../../shared/services/entrada/entradas.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public listadoEntradas: IEntrada[] = [];

    constructor(private entradasService: EntradasService) { }

    ngOnInit(): void {
        this.entradasService.RecuperarEntradas().subscribe({
            next: dato => this.listadoEntradas = dato,
            error: () => { },
            complete: () => {}
        })
    }
}
