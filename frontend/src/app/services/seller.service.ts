import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SellerModel } from "../models/seller.model";

@Injectable({providedIn: 'root'})
export class SellerService {
    constructor(private http: HttpClient) {}
    private product :SellerModel[] = [
        {
            _Id: 'azeee12',
            name: 'Banna Group Tech',
            imageUrl: 'assets/images/dashboard/img_3.jpg',
            createdDate: Date.now(),
        }
    ]
    public product$ = new Subject<SellerModel[]>()
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
    getById(id: any) {
        return new Promise((resolve, reject) => {
            this.http.get('/' + id)
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