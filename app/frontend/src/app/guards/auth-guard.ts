import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

/**
 * AuthGuard — protege rotas que requerem autenticação.
 *
 * Como funciona:
 * 1. Verifica se existe um token no AuthService
 * 2. Se sim → permite o acesso à rota
 * 3. Se não → redireciona automaticamente para /login
 *
 * Adicionado em app.routes.ts com: canActivate: [authGuard]
 */
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
