import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class AuthService {
    public userToken! :string | null;
    public userID! :string | null;
    public isAuth$ = new BehaviorSubject<boolean>(false)
    constructor(private router: Router,
        private http: HttpClient) {}
    createNewUser(userDatas: any, image: any) {
        return new Promise((resolve, reject) => {
            const userData = new FormData()
            userData.set('formData', JSON.stringify(userDatas))
            userData.set(image, userDatas.id)
            this.http.post('', userData).subscribe(() => {
                this.loging(userDatas)
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    reject(error)
                })
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
    loging(userInfo :any) {
        return new Promise((resolve, reject) => {
            this.http.post('', {}).subscribe((authData: any) => {
                /*this.userID = authData.id,
                this.userToken = authData.id,*/
                this.isAuth$.next(true),
                resolve(authData)             
            }, (error)=> {
                reject(error)
            })
        })
    }
    logOut() {
        this.isAuth$.next(false);
        this.userID = null;
        this.userToken = null
    }
}