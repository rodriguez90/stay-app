import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService1} from "./auth.service";

/**
 * Created by yopt on 15/07/2019.
 */

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService1, private router: Router) {
    }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuth()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }


}