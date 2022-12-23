import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../views/login/login.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input()
    public miToken: number = 0;
    @Input()
    public nombreUsuario: string = "";

    constructor(private router: Router) {
    }
    /*
        ngOnInit(): void {
            this.LeerUsuario();
        }*/
    /*
    private LeerUsuario(): void {

        if (this.miToken > 0) {
            let paso = localStorage.getItem("nombreUsuario");
            if (paso) {
                this.nombreUsuario = paso;
            }
            else {
                this.miToken = 0;
            }
        }
    }
    */

    public logout() {
        this.miToken = 0;
        AppComponent.unToken = 0;
        /*
        if (localStorage.getItem(LoginComponent.MITOKEN)) {
            localStorage.removeItem(LoginComponent.MITOKEN)
        }*/
        this.router.navigate(['/listado']);
    }
}
