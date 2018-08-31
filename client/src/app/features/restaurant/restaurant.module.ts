import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import {CategoryModule} from "./containers/category/category.module";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";

@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        CategoryModule,
        RestaurantRoutingModule
    ],

})
export class RestaurantModule {
}
