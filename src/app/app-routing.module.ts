import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

//! apuntes 1 routes y todo en general

const routes: Routes = [
 /*    {
        path: '',
        component: HomePageComponent,
    }, */
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) //! apuntes 5 esto se hace para que no cargué el modulo desde app.module, puesto que no es necesario
    },
    {
        path: '**',
        redirectTo: 'countries'
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