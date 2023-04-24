import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CartModel } from "../models/cart.model";
import { AuthService } from "../services/auth.service";
import { ReceiptService } from "../services/receipt.service";
import { StateService } from "../services/state.service";

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.scss'],
    standalone: true
})
export class CheckoutComponent implements OnInit {
    public receiptForm!: FormGroup;
    public cart!: CartModel;
    public loading!: boolean;
    public part!: number;
    public userID!: string | null;
    public imagePreview!: string;
    public errorMessage!: string;
    constructor( private receipt: ReceiptService,
        private state: StateService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService) {}
    ngOnInit(): void {
        this.userID = this.auth.userID ? this.auth.userID : 'userID123456';
        this.route.params.subscribe((params: Params) => {
            this.receipt.getBySelector(params['_Id'])
            .then((receipte: any) => {
                this.loading = false;
                this.cart = receipte
            })
        });
        this.receiptForm = this.formBuilder.group({
            c_fname: [null, Validators.required],
            c_lname: [null, Validators.required],
            c_companyname: [null, Validators.required],
            c_address: [null, Validators.required],
            c_state_country: [null, Validators.required],
            c_postal_zip: [null, Validators.required],
            c_phone: [null, Validators.required]
        })
    }
}