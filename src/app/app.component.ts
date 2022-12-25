import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'P001Test';

    constructor(private router: Router) { }

    public Ruta404(): boolean {
        let salida: boolean = (this.router.url == AppRoutingModule.Pagina404);

        return salida;
    }
}
