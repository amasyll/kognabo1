import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductModel } from "src/app/models/product.model";
import { AuthService } from "src/app/services/auth.service";
import { ProductService } from "src/app/services/products.service";
import { StateService } from "src/app/services/state.service";
import { SellerService } from "src/app/services/seller.service";
import { SellerModel } from "src/app/models/seller.model";
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy{
    public product!: ProductModel;
    public loading!: boolean;
    public userID!: string | null;
    public part!: number;
    public seller!: SellerModel;

    private partSub!: Subscription;
    constructor(private stat: StateService,
        private route: ActivatedRoute,
        private router: Router,
        private prod: ProductService,
        private auth: AuthService,
        private sellerService: SellerService){}
    ngOnInit(): void {
        this.loading = true;
        this.stat.mode$.next('product-detail');
        this.userID = this.auth.userID ? this.auth.userID : 'Ip';
        this.route.params.subscribe((params: Params) => {
            this.prod.getBySelector(params['_Id'])
            .then((prods: any) => {
                this.loading = false;
                this.product = prods;
            });
        });
        this.sellerService.getById(this.product.seller_Id)
        .then((seller: any) => {
            this.loading = false;
            this.seller = seller;
        });
    }
    onAddToCart(): void {
       confirm('Ajoutez ?') 
    }
    ngOnDestroy(): void {
        this.partSub.unsubscribe();
    }   
}