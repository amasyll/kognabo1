import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from "@angular/core"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Chart, ChartConfiguration, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import { Subscription } from "rxjs";
import { CartModel } from "src/app/models/cart.model";
import { ProductModel } from "src/app/models/product.model";
import { SellerModel } from "src/app/models/seller.model";
import { ProductService } from "src/app/services/products.service";
import { ReceiptService } from "src/app/services/receipt.service";
import { StateService } from "src/app/services/state.service";


@Component({
    selector: 'index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AdminIndexComponent implements OnInit, OnDestroy {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    public loading!: boolean;
    public page = 1;
    public pageSize = 4;
    public carts :CartModel[] = [];
    public products :ProductModel[] = [];
    public collectionSize = this.products.length;
    
    private productSub!: Subscription;
    private receiptSub!: Subscription;
    private partSub!: Subscription;

    constructor(private modalService :NgbModal,
        private productService: ProductService,
        private stateService: StateService,
        private receiptService: ReceiptService){
        Chart.register()
    }
    
    public chartData :ChartConfiguration['data'] = { 
        datasets: [
            {
                data: [2, 59, 10],
                label: 'Serie A',
                fill: 'origin'
            },
            {
                data: [3, 51, 20],
                label: 'Serie B',
                fill: 'origin'
            }
        ],
        labels: ['Homme', 'Femme', 'Enfant']
    }
    public chartOption :ChartConfiguration['options'] = {
        elements: {line: {tension:0.5}},
        scales: {
            x: {},
            y: {},
            /*y1: {position: 'right', grid: {color: 'rgb(255, 0, 0, 0.5)'}},*/
        },
        plugins: { },
    }
    public chartType :ChartType = 'bar';
    
    ngOnInit(): void {
        this.loading = true;
        this.stateService.mode$.next('index')
        this.productSub = this.productService.product$.subscribe(
            (product) => {
                this.products = product;
                this.loading = false;
            }
        )
        this.productService.getAll()
        this.receiptSub = this.receiptService.product$.subscribe(
            (receipt) => {
                this.carts = receipt;
                this.loading = false;
            }
        ) 
        this.receiptService.getAll();
    }
    openModalVertically(content :any) {
        this.modalService.open(content,{ centered: true })
    }
    onRefresh(){
        
    }
    ngOnDestroy(): void {
        this.productSub.unsubscribe();
        this.receiptSub.unsubscribe();
        this.partSub.unsubscribe();
    }
}