import { Component, OnInit } from '@angular/core';
import { IEntrada } from '../../shared/interfaces/ientrada';
import { EntradasService } from '../../shared/services/entradas.service';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    public listadoEntradas: any; // IEntrada[];

    constructor(private entradasService: EntradasService) {
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



    public mostrarTitulo(titulo: string) {
        alert(`Título seleccionado: ${titulo}.`)
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
