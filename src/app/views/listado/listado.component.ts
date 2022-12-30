import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEntrada } from '../../shared/interfaces/ientrada';
import { EntradasService } from '../../shared/services/entrada/entradas.service';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    public listadoEntradas: IEntrada[] = [];// any;

    constructor(private entradasService: EntradasService, private router: Router) {
        /*
        this.listadoEntradas = [
            {
                titulo: "Curso de Angular",
                resumen: "Ahora estoy creando un Array<IEntrada>."
            },
            {
                titulo: "Creación de una Interface",
                resumen: "Confusión entre Inteface y Class."
            },
            {
                titulo: "Componentes en Angular",
                resumen: "Componetes el corazón de Angular."
            }
        ]
        */
    }

    ngOnInit(): void {
        this.ObtenerEntradas();
    }



    public mostrarTitulo(titulo: string, id: number) {
        alert(`Título seleccionado: ${titulo}.`)
        this.router.navigate([`/front/entradaDetalles/${id}`]);
    }

    private ObtenerEntradas(): void {
        this.entradasService.RecuperarEntradas().subscribe({  // lo nuevo, junto con next: error: complete: }
            // ahora 3 posibles callback
            next: (dato) => this.listadoEntradas = dato, // correcto
            error: (error) => { }, // error
            complete: () => { } // fin
        });
    }
}
