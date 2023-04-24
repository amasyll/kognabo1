import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { StateService } from "src/app/services/state.service";

@Component({
    selector: 'public-header',
    templateUrl: './_header.component.html',
    styleUrls: ['./_header.component.scss']
})
export class PublicHeaderComponent implements OnInit, OnDestroy {
    public mode! :string;
    public part! :number;
    public partString! :string;
    public isAuth! :boolean;
    public isProfilCollapse = true;

    private modeSub! :Subscription;
    private partSub! :Subscription;
    private isAuthSub! :Subscription;
    constructor(private state: StateService,
        private router: Router,
        private auth: AuthService) {}
    ngOnInit(): void {
        this.modeSub = this.state.mode$.subscribe(
            (mode) => {
                this.mode = mode
            }
        );
        this.partSub = this.state.part$.subscribe(
            (part) => {
                this.part = part
                switch (part) {
                    case 2:
                        
                        break;
                
                    default:
                        break;
                }
            }
        );
        this.isAuthSub = this.auth.isAuth$.subscribe(
            (auth) => {
                this.isAuth = auth
            }
        );
    }
    onLogout() {
        this.auth.logOut()
        this.router.navigate(['/' + this.partString + '/auth/login'])
    }
    onCartClicked() :void {
        this.router.navigate(['/public/receipt'])
    }
    onBackToPart() :void {
        this.router.navigate(['public'])
    }
    ngOnDestroy(): void {
        this.partSub.unsubscribe();
        this.modeSub.unsubscribe();
        this.isAuthSub.unsubscribe()
    }
}