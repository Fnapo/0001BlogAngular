import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntradasService } from 'src/app/shared/services/entrada/entradas.service';
import { IEntrada } from '../../shared/interfaces/ientrada';

@Component({
    selector: 'app-entrada-detalles',
    templateUrl: './entrada-detalles.component.html',
    styleUrls: ['./entrada-detalles.component.css']
})
export class EntradaDetallesComponent implements OnInit {
    private id: number = 0;
    public entrada: IEntrada;

    constructor(private rutaActiva: ActivatedRoute, private entradasServicio: EntradasService) {
        this.rutaActiva.params.subscribe((params) => { this.id = +params['id']; });
        this.entrada = {
            id: this.id,
            body: "",
            autor: "",
            fecha: "",
            userId: 0,
            title: "Es una fake entrada ..."
        }
    }

    ngOnInit() {
        this.entradasServicio.RecuperarEntrada(this.id).subscribe({
            next: (dato) => this.entrada = dato,
            error: () => { },
            complete: () => { }
        });
    }
}
