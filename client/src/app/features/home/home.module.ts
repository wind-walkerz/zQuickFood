import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {BannerComponent} from './01. banner/banner.component';
import {SharedModule} from "../../shared/shared.module";
import { SearchInputComponent } from './01. banner/search-input/search-input.component';
import { StepsComponent } from './02. steps/steps.component';
import { MostPopularComponent } from './03. most_popular/most-popular.component';

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
        SearchInputComponent,
        StepsComponent,
        MostPopularComponent
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
