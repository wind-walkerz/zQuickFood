import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadChildren: './features/home/home.module#HomeModule'},
    {path: 'restaurant', loadChildren: './features/restaurant/restaurant.module#CategoryModule'},
    {path: 'blog', loadChildren: './features/blog/blog.module#BlogModule'},
    {path: 'contact', loadChildren: './features/contact/contact.module#ContactModule'},
    {path: 'about', loadChildren: './features/about/about.module#AboutModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}


