import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro').then(m => m.Cadastro)
  },
  {
    path: 'planos',
    loadComponent: () => import('./pages/planos/planos').then(m => m.Planos)
  },
  {
    path: 'acervo',
    loadComponent: () => import('./pages/acervo/acervo').then(m => m.Acervo)
  },
  {
    path: 'acervo/:slug',
    loadComponent: () => import('./pages/aula-detalhe/aula-detalhe').then(m => m.AulaDetalhe)
  },
  {
    path: 'professor/:slug',
    loadComponent: () => import('./pages/professor/professor').then(m => m.Professor)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
