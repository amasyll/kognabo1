import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/products.service";
import { StateService } from "src/app/services/state.service";
@Component({
    selector: 'shop-catalogues',
    templateUrl: './catalogues.component.html',
    styleUrls: ['./catalogues.component.scss'],
})
export class CataloguesComponent implements OnInit, OnDestroy {
    public product :ProductModel[] = [];
    public part! :number;
    public loading! :boolean;

    private productSub! :Subscription;
    private partSub! :Subscription;
    constructor(private state: StateService,
        private productService: ProductService,
        private router: Router){}
    ngOnInit(): void {
        this.loading = true;
        this.state.mode$.next('catalogues');
        this.productSub = this.productService.product$.subscribe(
            (product) => {
                this.product = product;
                this.loading = false;
            }
        )
        this.partSub = this.state.part$.subscribe(
            (part)=>{
                this.part = part
            }
        );
        this.productService.getAll() 
    }
    onProductCliked(id :string) :void {
        this.router.navigate(['/public/product/details/' +id])
    }
    ngOnDestroy(): void {
        this.state.mode$.next('')
        this.productSub.unsubscribe();
        this.partSub.unsubscribe();  
    }
}