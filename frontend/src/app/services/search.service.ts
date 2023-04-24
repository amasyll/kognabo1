import { JsonPipe } from "@angular/common";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private http: HttpClient) {}
    getJSON(params: string) :Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('search/' +params)
            .subscribe(
                (res) => resolve(JSON.stringify(res)),
                (err) => reject(err)
            )
        })
    }
}