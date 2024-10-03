import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { ShopComponent } from '../Components/shop/shop.component';

export const routes: Routes = [
    {
        path:"", 
        redirectTo:'home',
        pathMatch:"full",
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"shop",
        component:ShopComponent
    }
];
