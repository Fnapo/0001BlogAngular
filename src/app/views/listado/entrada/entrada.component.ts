import { Component, Input } from '@angular/core';
import { IEntrada } from '../../../shared/interfaces/ientrada';

@Component({
    selector: 'app-entrada',
    templateUrl: './entrada.component.html',
    styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
  @Input()
  public entrada: any; // IEntrada = { titulo: "", resumen: "" }

    constructor() { }
}
