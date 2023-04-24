import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { StateService } from "src/app/services/state.service";

@Component({
    selector: 'public-footer',
    templateUrl: './_footer.component.html',
    styleUrls: ['./_footer.component.scss']
})
export class PublicFooterComponent implements OnInit, OnDestroy{
    public mode! :string;
    public part! :number;
    public partString! :string;
    public isAuth! :boolean;

    private footerModeSub! :Subscription;
    private partSub! :Subscription;
    private isAuthSub! :Subscription;
    constructor(private state: StateService,
        private router: Router,
        private auth: AuthService) {}
    ngOnInit(): void {
        this.footerModeSub = this.state.mode$.subscribe(
            (mode) => {
                this.mode = mode
            }
        );
        this.isAuthSub = this.auth.isAuth$.subscribe(
            (auth) => {
                this.isAuth = auth
            }
        );
    }
    ngOnDestroy(): void {
        this.footerModeSub.unsubscribe();
        this.isAuthSub.unsubscribe()
    }
}