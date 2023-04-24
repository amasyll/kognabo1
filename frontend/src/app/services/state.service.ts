import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class StateService {
    public part$ = new BehaviorSubject<number>(0);
    public part = 0;
    public mode$ = new BehaviorSubject<string>('')
}