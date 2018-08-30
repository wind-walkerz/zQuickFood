import {NgModule} from '@angular/core';

import {CommonComponentModule} from './common/common.module';

@NgModule({
    imports: [
        CommonComponentModule
    ],
    exports: [
        CommonComponentModule
    ]
})
export class ComponentModule {
}
