import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageComponent} from "./Image/Image";


@NgModule({
    declarations: [ImageComponent],
    imports: [
        CommonModule
    ],
    exports: [ImageComponent]
})
export class CommonComponentModule {
}
