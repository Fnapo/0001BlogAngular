import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../shared/classes/usuario/usuario';
import { LoginService } from '../../shared/services/login/login.service';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';
import { TuplaLoginService } from '../../shared/services/tuplaLogin/tupla-login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements AfterViewInit {
    public usuario: Usuario = new Usuario();
    @ViewChild("inputNombre")
    inputNombre!: ElementRef;

    constructor(private loginService: LoginService, private router: Router,
    private tuplaServicio: TuplaLoginService) { }

    ngAfterViewInit(): void {
        const elemento = this.inputNombre.nativeElement;

        elemento.focus();
    }

    public Submit(): void {
        let paso = 0;
        this.loginService.login(this.usuario).subscribe({
            next: (dato: number) => { paso = dato; },
            error: (error) => { paso = 0; },
            complete: () => { }
        });
        if (paso > 0) {
            //MenuComponent.unToken = paso;
            //MenuComponent.unNombre = this.usuario.nombre;
            this.tuplaServicio.SetTuplaLogin(paso, this.usuario.nombre);
            this.router.navigate(["/administracion"]);
        }
        else {
            alert("Error en el nombre o la contraseña ...")
        }
    }
}
