import { Injectable } from '@angular/core';
import {Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../authentication/service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private authenticationService: AuthService,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkCanActive(next, state);
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkCanActive(next, state);
    }

    private checkCanActive(next: ActivatedRouteSnapshot,
                           state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const user = this.authenticationService.currentUserValue;

        console.log(user);

        if (user) {
            // logged in so return true
            return true;
        }

        this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}


