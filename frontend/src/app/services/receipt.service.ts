import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ReceiptModel } from "../models/receipt.model";

@Injectable({providedIn: 'root'})
export class ReceiptService {
    constructor(private http: HttpClient) {}
    private receipt :ReceiptModel[] = []
    public receipt$ = new Subject<ReceiptModel[]>()
    getAll() {
        this.http.get('localhost:3000/receipt')
        .subscribe((receipt: any)=> {
            if(receipt) {
                this.receipt = receipt
                this.emitReceipt()
            }
        }, (error)=> {
            console.error(error);
        })
    }
    emitReceipt() {
        this.receipt$.next(this.receipt)
    }
    getById(id: any) {
        return new Promise((resolve, reject) => {
            this.http.get('localhost:3000/receipt' + id)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    createNew(formDatas: any) {
        return new Promise((resolve, reject) => {
            this.http.post('localhost:3000/receipt', formDatas)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    update(id :string, formData :any) {
        return new Promise((resolve, reject) => {
            this.http.put('localhost:3000/receipt' +id, formData)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
    delete(id :string) {
        return new Promise((resolve, reject) => {
            this.http.delete('localhost:3000/receipt' +id)
            .subscribe((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })
        })
    }
}