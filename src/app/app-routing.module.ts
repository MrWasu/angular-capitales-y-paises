import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

//! apuntes routes y todo en general

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    /* {
       path: 'contact',
       component: ContactPageComponent
     },
     {
       path: 'countries',
       loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
     },*/
    {
        path: '**',
        redirectTo: 'home'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }