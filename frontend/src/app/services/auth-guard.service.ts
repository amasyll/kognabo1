import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { StateService } from "./state.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService,
        private state: StateService,
        private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return Observable.create((observer :any) => {
            this.auth.isAuth$.subscribe((auth) => {
                if(!auth) {
                    this.state.part$.subscribe((part) => {
                        switch (part) {
                            case 1:
                                this.router.navigate(['']);
                                break;
                            case 2:
                                this.router.navigate(['']);
                                break;
                            default:
                                this.router.navigate(['public'])
                                break;
                        }
                    })
                }
                observer.next(true);
            })        
        })   
    }
}