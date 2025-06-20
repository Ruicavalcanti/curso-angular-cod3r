import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {ProductRead2Component} from './components/product/product-read2/product-read2.component';
export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "products",
        component: ProductCrudComponent
    },
    {
        path: "products/create",
        component: ProductCreateComponent
    },
    {
        path: "products/products-read2",
        component: ProductRead2Component
    }
    
];
