import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuplaLoginService } from '../shared/services/tuplaLogin/tupla-login.service';
import { TuplaLogin } from '../shared/classes/tuplaLogin/tupla-login';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    private _token: number = 0;
    private _nombreUsuario: string = "";

    constructor(private router: Router, private tuplaServicio: TuplaLoginService) {
    }

    ngOnInit(): void {
        this.tuplaServicio.tuplaLoginObs.subscribe((tupla: TuplaLogin) => {
            this._token = tupla.token;
            this._nombreUsuario = tupla.nombreUsuario;
        });
    }

    public get nombreUsuario(): string {
        return this._nombreUsuario;
    }

    public get token(): number {
        return this._token;
    }

    public logout() {
        this._token = 0;
        this.router.navigate(['/sobreNosotros']);
    }
}
