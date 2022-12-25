import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TuplaLogin } from '../../classes/tuplaLogin/tupla-login';

@Injectable({
    providedIn: 'root'
})
export class TuplaLoginService {
    private tuplaLogin: Subject<TuplaLogin> = new Subject<TuplaLogin>();
    public tuplaLoginObs: Observable<TuplaLogin> = this.tuplaLogin.asObservable();

    constructor() { }

    public SetTuplaLogin(token: number, nombre: string): void {
        let nuevaTupla = new TuplaLogin();

        nuevaTupla.nombreUsuario = nombre;
        nuevaTupla.token = token;
        this.tuplaLogin.next(nuevaTupla);
    }
}
