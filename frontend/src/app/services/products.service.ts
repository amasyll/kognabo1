import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProductModel } from "../models/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private http: HttpClient) {}
    private product :ProductModel[] = [
        {
            _Id: 'aze1e12',
            seller_Id: 'hgj',
            title: 'Bon produit',
            imageUrl: 'assets/images/dashboard/img_1.jpg',
            description: "[Github](https://github.com/amasyll).Ex numquam veritatis debitis minima quo error quam eos dolorum",
            price: 20000*100,
            date: Date.now(),
        },
        {
            _Id: 'azeee12',
            seller_Id: 'hgfd',
            title: 'Bon produit',
            imageUrl: 'assets/images/dashboard/img_3.jpg',
            description: "[Github](https://github.com/amasyll).Ex numquam veritatis debitis minima quo error quam eos dolorum",
            price: 200000*100,
            date: Date.now(),
        }
    ]
    public product$ = new Subject<ProductModel[]>()
    getAll() {
       /* this.http.get('')
        .subscribe((product: any)=> {
            if(product) {
                this.product = product
                this.emitProduct()
            }
        }, (error)=> {
            console.error(error);
        })*/
        this.emitProduct()
    }
    emitProduct() {
        this.product$.next(this.product)
    }
    getBySelector(selector: any) {
        return new Promise((resolve, reject) => {
            this.http.get('/' + selector)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    createNew(formDatas: any, image: any) {
        return new Promise((resolve, reject) => {
            const userData = new FormData()
            userData.set('formData', JSON.stringify(formDatas))
            userData.set(image, formDatas.id)
            this.http.post('', userData)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    update(id :string, formData :any, image :File | string) {
        return new Promise((resolve, reject) => {
            let formDatas  :any | FormData;
            if(typeof image === 'string') {
                formData.imageUrl = image;
                formDatas = formData
            } else {
                formDatas = new FormData();
                formDatas.set('formData', JSON.stringify(formData));
                formDatas.set('image', formData.id)
            }
            this.http.put('/' +id, formDatas)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    delete(id :string) {
        return new Promise((resolve, reject) => {
            this.http.delete('/' +id)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
}