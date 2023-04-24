import { Component, OnInit} from "@angular/core";
import { SellerModel } from "../../../models/seller.model";
@Component({
    selector: 'admin-sidebar',
    templateUrl: '_sidebar.component.html',
    styleUrls: ['_sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit{
    public isCollapsed = true;
    public admin :SellerModel =  
        {
            _Id: '1243',
            name: 'Amadou Sylla',
            imageUrl: 'assets/images/faces/face1.jpg',
            createdDate: Date.now()
        }
    
    ngOnInit(): void {
        this.admin
    }
}