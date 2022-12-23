import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../../classes/usuario/usuario';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public miUsuario: Usuario = new Usuario();

    constructor() {
        this.miUsuario.nombre = "paco";
        this.miUsuario.contrasegna = "123456";
     }

    public login(usuario: Usuario): Observable<number> {
        if (usuario.EsIgual(this.miUsuario)) {
            return of(1 + Math.floor(Math.random() * 1000));
        }

        return of(0);
    }
}
