import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CartModel } from "../models/cart.model";

@Injectable({providedIn: 'root'})
export class CartService {
    constructor(private http: HttpClient) {}
    private cart :CartModel[] = []
    public cart$ = new Subject<CartModel[]>()
    getAllCarts() {
        this.http.get('localhost:3000/cart')
        .subscribe((cart: any)=> {
            if(cart) {
                this.cart = cart
                this.emitCart()
            }
        }, (error)=> {
            console.error(error);
        })
    }
    emitCart() {
        this.cart$.next(this.cart)
    }
    getCartById(id: any) {
        return new Promise((resolve, reject) => {
            this.http.get('localhost:3000/cart' + id)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    createNew(formDatas: any) {
        return new Promise((resolve, reject) => {
            this.http.post('localhost:3000/cart', formDatas)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    update(id :string, formData :any) {
        return new Promise((resolve, reject) => {
            this.http.put('localhost:3000/cart' +id, formData)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    delete(id :string) {
        return new Promise((resolve, reject) => {
            this.http.delete('localhost:3000/cart' +id)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
}