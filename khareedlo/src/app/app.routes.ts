import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { Component } from '@angular/core';
import { ProductsComponent } from './pages/admin/products/products.component';
import { WebproductsComponent } from './pages/website/webproducts/webproducts.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Allproducts',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LandingComponent,
        children:[
            {
            path:'products/:id',
            component:CategoryProductsComponent
        },
        {
            path:'Allproducts',
            component:WebproductsComponent
        }
        
    ]
    },
    
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'products',
                component: ProductsComponent
            },
            {
                path:'category',
                component: CategoriesComponent
            },
        ]
    }    
];
