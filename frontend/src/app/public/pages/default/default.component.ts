import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StateService } from "src/app/services/state.service";
import * as jQuery from "jquery";
@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy{
    constructor(private router: Router, 
        private state: StateService) {}
    ngOnInit(): void {
        this.state.mode$.next('public-default');

        (function($) {
            'use strict';
            $(function() {
                $('a .card').on('mouseover', function() {
                    $('a .card').toggleClass('border-2-secondary')
                })
            })
        })(jQuery)
    }
    onShopping() :void {
        this.router.navigate(["public/shopping"])
    }
    onRestau() :void {
        this.router.navigate(["public/restau"])
    }
    onBook() :void {
        this.router.navigate(["public/digidocs"])
    }
    ngOnDestroy(): void {
        this.state.mode$.next('')
    }
}