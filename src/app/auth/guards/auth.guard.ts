import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const url = state.url;

        if( this.authService.isLoggedIn ) {
            return true;
        }

        // Store the current url for redirecting after login
        this.authService.redirectUrl = url;

        // Redirect to the login page
        return this.router.parseUrl('/auth/login');
    }

}
