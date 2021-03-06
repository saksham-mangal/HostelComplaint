import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router: Router
    ){ }

    canActivate(){
        if(this.authService.loggedIn()){
            return true
        }
        else{
            this.router.navigate(['login'])
            return false
        }
    }
}