import { Component } from '@angular/core';
import { TuplaLoginService } from '../../../../shared/services/tuplaLogin/tupla-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-logout',
  templateUrl: './boton-logout.component.html',
  styleUrls: ['./boton-logout.component.css']
})
export class BotonLogoutComponent {

    constructor(private tuplaServicio:TuplaLoginService, private router:Router) {}

    public Logout(): void{
        this.tuplaServicio.SetTuplaLogin(0, "");
        this.router.navigate(['/front/sobreNosotros']);
    }
}
