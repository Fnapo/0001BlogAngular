import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuplaLoginService } from '../shared/services/tuplaLogin/tupla-login.service';
import { TuplaLogin } from '../shared/classes/tuplaLogin/tupla-login';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent extends TuplaLogin implements OnInit {

    constructor(private router: Router, private tuplaServicio: TuplaLoginService) {
        super();
    }

    ngOnInit(): void {
        this.tuplaServicio.tuplaLoginObs.subscribe((tupla: TuplaLogin) => {
            this.token = tupla.token;
            this.nombreUsuario = tupla.nombreUsuario;
        });
    }

    public Logout(): void {
        this.token = 0;
        this.nombreUsuario = "";
        this.tuplaServicio.SetTuplaLogin(this.token, this.nombreUsuario);
        this.router.navigate(['/front/sobreNosotros']);
    }
}
