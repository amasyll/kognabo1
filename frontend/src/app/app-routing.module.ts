import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AdminIndexComponent } from "./admin/pages/index/index.component";
import { AdminChartComponent } from "./admin/pages/charts/chart.component";
import { PublicComponent } from "./public/public.component";
import { DefaultComponent } from "./public/pages/default/default.component";
import { AddNewCatalogueComponent } from "./public/pages/shopping/add-new-catalogue/add-new-catalogue.component";
import { AddNewMenuComponent } from "./public/pages/restaurant/add-new-menu/add-new-menu.component";
import { AddNewDocsComponent } from "./public/pages/digi-docs/add-new-docs/add-new-docs.component";
import { DetailsComponent } from "./public/pages/details/details.component";
import { ShoppingComponent } from "./public/pages/shopping/shopping.component";
import { RestaurantComponent } from "./public/pages/restaurant/restaurant.component";
import { DigiDocsComponent } from "./public/pages/digi-docs/digi-docs.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuard } from "./services/auth-guard.service";
import { UpdateCatalogueComponent } from "./public/pages/shopping/update-catalogue/update-catalogue.component";
import { UpdateMenuComponent } from "./public/pages/restaurant/update-menu/update-menu.component";
import { UpdateDocsComponent } from "./public/pages/digi-docs/update-docs/update-docs.component";
import { Error404Component } from "./error-404/error-404.component";
const routes :Routes = [
    { path: 'admin', component: AdminComponent, 
        children: [
            { path: 'index', component: AdminIndexComponent },
            { path: 'charts', component: AdminChartComponent },
            { path: 'addnew/catalogue', component: AddNewCatalogueComponent },
            { path: 'addnew/menu', component: AddNewMenuComponent },
            { path: 'addnew/book', component: AddNewDocsComponent },
            { path: 'update/catalogue/:id', component: UpdateCatalogueComponent },
            { path: 'update/menu/:id', component: UpdateMenuComponent },
            { path: 'update/docs/:id', component: UpdateDocsComponent },
            { path: '', pathMatch: 'full', redirectTo: 'index' },
            { path: '**', redirectTo: 'error404' }
        ]
    },
    { path: 'public', component: PublicComponent, 
        children: [
            { path: 'default', component: DefaultComponent },
            { path: 'product/details/:id', component: DetailsComponent },
            { path: 'shopping', component: ShoppingComponent },
            { path: 'restau', component: RestaurantComponent },
            { path: 'digidocs', component: DigiDocsComponent },
            { path: 'receipt', component: CartComponent },
            { path: 'checkout', component: CheckoutComponent },
            { path: '', pathMatch: 'full', redirectTo: 'default' },
            { path: '**', redirectTo: 'error404'}
        ] 
    },
    { path: '', pathMatch: 'full', redirectTo: 'public' },
    { path: 'error404', component: Error404Component },
    { path: '**', redirectTo: 'error404' }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule{}