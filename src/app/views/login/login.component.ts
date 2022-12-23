import { Component } from '@angular/core';
import { Usuario } from '../../shared/classes/usuario/usuario';
import { LoginService } from '../../shared/services/login/login.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public usuario: Usuario = new Usuario();
    //public static readonly MITOKEN: string = "miToken";

    constructor(private loginService: LoginService, private router: Router) {

    }

    public Submit(): void {
        let paso = 0;
        this.loginService.login(this.usuario).subscribe({
            next: (dato: number) => { paso = dato; },
            error: (error) => { paso = 0; },
            complete: () => { }
        });
        if (paso > 0) {
            //localStorage.setItem("nombreUsuario", this.usuario.nombre);
            //localStorage.removeItem(LoginComponent.MITOKEN);
            //localStorage.setItem(LoginComponent.MITOKEN, `${paso}`);
            AppComponent.unToken = paso;
            AppComponent.unNombre = this.usuario.nombre;
            this.router.navigate(["/listado"]);
        }
        else {
            alert("Error en el nombre o la contraseña ...")
        }
    }
}
