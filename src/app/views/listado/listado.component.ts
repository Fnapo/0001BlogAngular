import { Component } from '@angular/core';
import { IEntrada } from '../../shared/interfaces/ientrada';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    public listadoEntradas: IEntrada[];

    constructor() {
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
    }

    public mostrarTitulo(titulo: string) {
        alert(`Título seleccionado: ${titulo}.`)
    }
}
