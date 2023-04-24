import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { MarkdownModule, MarkedOptions } from "ngx-markdown"
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin/partials/_navbar/_navbar.component';
import { AdminSidebarComponent } from './admin/partials/_sidebar/_sidebar.component';
import { AdminIndexComponent } from './admin/pages/index/index.component';
import { AdminFooterComponent } from './admin/partials/_footer/_footer.component';
import { AdminChartComponent } from './admin/pages/charts/chart.component';
import { PublicComponent } from './public/public.component';
import { PublicHeaderComponent } from './public/partials/_header/_header.component';
import { PublicBigheadedComponent } from './public/partials/_bigheaded/_bigheaded.component';
import { PublicAboutUsComponent } from './public/partials/_about-us/_about-us.component';
import { PublicTestimoniesComponent } from './public/partials/_testimonies/_testimonies.component';
import { PublicContactComponent } from './public/partials/_contact/_contact.component';
import { PublicFooterComponent } from './public/partials/_footer/_footer.component';
import { AddNewCatalogueComponent } from './public/pages/shopping/add-new-catalogue/add-new-catalogue.component';
import { AddNewMenuComponent } from './public/pages/restaurant/add-new-menu/add-new-menu.component';
import { AddNewDocsComponent } from './public/pages/digi-docs/add-new-docs/add-new-docs.component';
import { ShoppingComponent } from './public/pages/shopping/shopping.component';
import { RestaurantComponent } from './public/pages/restaurant/restaurant.component';
import { DigiDocsComponent } from './public/pages/digi-docs/digi-docs.component';
import { MenusComponent } from './public/pages/restaurant/menus/menus.component';
import { CataloguesComponent } from './public/pages/shopping/catalogues/catalogues.component';
import { DocsComponent } from './public/pages/digi-docs/docs/docs.component';
import { DetailsComponent } from './public/pages/details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        AdminNavbarComponent,
        AdminSidebarComponent,
        AdminIndexComponent,
        AdminFooterComponent,
        AdminChartComponent,
        PublicComponent,
        PublicHeaderComponent,
        PublicBigheadedComponent,
        PublicAboutUsComponent,
        PublicTestimoniesComponent,
        PublicContactComponent,
        PublicFooterComponent,
        AddNewCatalogueComponent,
        AddNewMenuComponent,
        AddNewDocsComponent,
        AdminChartComponent,
        DetailsComponent,
        ShoppingComponent,
        RestaurantComponent,
        DigiDocsComponent,
        MenusComponent,
        CataloguesComponent,
        DocsComponent,
    ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgChartsModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    break: false,
                    pedantic: false,
                    smartLists: true,
                    smartypants: false,
                }
            }
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
}) 
export class AppModule {}