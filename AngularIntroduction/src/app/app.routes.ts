// app-routing.module.ts
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Product } from './components/product/product';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'product', component: Product },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // default ke home
];

