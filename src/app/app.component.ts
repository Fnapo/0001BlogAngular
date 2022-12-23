import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public static unToken: number = 0;
    public static unNombre: string = "";
    title = 'P001Test';

    constructor(private router: Router) { }

    public LeerToken(): number{
        return AppComponent.unToken;
    }

    public LeerNombre(): string{
        return AppComponent.unNombre;
    }

    public Ruta404(): boolean {
        let salida: boolean = (this.router.url == AppRoutingModule.Pagina404);

        return salida;
    }
}
