import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Section1Component} from "./01. Banner/section1.component";
import {CategoryComponent} from "./category.component";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        Section1Component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: CategoryComponent}])
    ],

})
export class CategoryModule {
}
