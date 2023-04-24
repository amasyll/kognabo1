import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SearchService } from "../services/search.service";
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchByTypeComponent implements OnInit {
    public result :any;
    constructor(private route :ActivatedRoute,
        private research : SearchService){}
    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.research.getJSON("type/"+params['type'])
            .then(res => this.result = res)
            .catch(err => console.error(err))
        })
    }
}