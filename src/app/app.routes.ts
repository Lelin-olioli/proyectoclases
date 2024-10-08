import { Routes } from '@angular/router';

export const routes: Routes = [
  {
   // path: 'home',
    //loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
   // path: 'login',
   // loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  path: 'home',
  loadComponent: () => import('./home/home.page').then((m) => m.HomePage)

  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
];
