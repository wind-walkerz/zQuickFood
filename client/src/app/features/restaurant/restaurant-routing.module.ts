import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/category', pathMatch: 'full'},
    {path: 'category', loadChildren: './features/containers/category/category.module#CategoryModule'},
    // {path: 'detail', loadChildren: './features/containers/detail/detail.module#DetailModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RestaurantRoutingModule {
}


