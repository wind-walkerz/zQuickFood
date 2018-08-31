import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {SearchInputComponent} from './01. Banner/search-input/search-input.component';
import {Section1Component} from './01. Banner/section1.component';
import {Section2Component} from './02. Steps/section2.component';
import {Section3Component} from './03. Most Popular Restaurant/section3.component';
import {Section4Component} from './04/section4.component';
import {Section5Component} from './05/section5.component';
import {Section6Component} from './06. Work with Us/section6.component';


@NgModule({
    declarations: [
        HomeComponent,

        Section1Component,
        Section2Component,
        Section3Component,
        Section4Component,
        Section5Component,
        Section6Component,


        SearchInputComponent,

    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: HomeComponent
        }]),

        SharedModule
    ]

})
export class HomeModule {
}
