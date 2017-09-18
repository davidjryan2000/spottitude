import {ModuleWitProviders}from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {About Components} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';

const appRoutes: Routes = [
    {
        path:'',
        component:SearchComponent
    },
    {
        path:'about',
        component:AboutComponent
    }

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);