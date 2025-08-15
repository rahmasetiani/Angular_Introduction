import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // default ke home

];
