import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capPalabras'
})
export class CapPalabrasPipe implements PipeTransform {

    transform(value: string): string {
        let paso = value.split(" ");
        let indice = 0;

        for (indice = 0; indice < paso.length; ++indice) {
            let ayuda = paso[indice].toLowerCase();

            paso[indice] = ayuda.charAt(0).toUpperCase() + ayuda.slice(1);
        }

        return paso.join(" ");
    }

}
