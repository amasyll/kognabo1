import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CartModel } from "../models/cart.model";
import { ReceiptService } from "../services/receipt.service";
import { StateService } from "../services/state.service";
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    standalone: true
})
export class CartComponent implements OnInit, OnDestroy {
    public receipts :CartModel[] = [];
    public state! :number;
    public loading = false;

    private receipSub! :Subscription;
    private stateSub! :Subscription;
    constructor( private cartService :ReceiptService,
        private stateService :StateService,
        private router :Router) {}
    ngOnInit(): void {
        
    }
    ngOnDestroy(): void {
        
    }
}