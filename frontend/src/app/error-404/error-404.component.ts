import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-error404',
    templateUrl: './error-404.component.html',
    standalone: true
})
export class Error404Component implements OnInit {
    constructor(private router: Router){}
    ngOnInit(): void {
        
    }
    onGoBackToHome() :void {
        this.router.navigate(['public'])
    }
}