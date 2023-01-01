import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TuplaLoginService } from '../tuplaLogin/tupla-login.service';
import { TuplaLogin } from '../../classes/tuplaLogin/tupla-login';

@Injectable({
    providedIn: 'root'
})
export class IdentificarGuard implements CanActivate {

    private tuplaLogin: TuplaLogin = new TuplaLogin();

    constructor(private servicioTupla: TuplaLoginService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.servicioTupla.tuplaLoginObs.subscribe((dato: TuplaLogin) => { this.tuplaLogin = dato; });

        if (this.tuplaLogin.token <= 0) {
            this.router.navigate(["/login"]);

            return false;
        }

        return true;
    }

}
