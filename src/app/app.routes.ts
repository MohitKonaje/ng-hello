import { Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {HomeComponent} from './home/home.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'list/:id', component: ListComponent },
    { path: '**', 
       redirectTo: (route)=>{return '/home'}, 
    //    component: HomeComponent 
    },

];
