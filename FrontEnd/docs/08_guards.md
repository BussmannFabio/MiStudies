# 08 — Guards

Guards são **interceptores de rota** — código que roda antes de o Angular renderizar uma página. Eles decidem se o usuário **pode ou não acessar** aquela rota.

---

## AuthGuard

**Arquivo:** `src/app/guards/auth-guard.ts`

### O que faz

Antes de carregar o Dashboard, o AuthGuard verifica se existe um token de autenticação válido no `localStorage`. Se não existir, redireciona para `/login`.

### Código Completo

```typescript
// src/app/guards/auth-guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

/**
 * AuthGuard — protege rotas que exigem login.
 *
 * Funciona como uma "portaria": antes de deixar o usuário entrar
 * no Dashboard, verifica se ele tem um token válido.
 *
 * Uso em app.routes.ts:
 *   { path: 'dashboard', canActivate: [authGuard], ... }
 */
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);   // Injeta o service
  const router      = inject(Router);        // Injeta o router

  if (authService.isLoggedIn()) {
    return true;                              // ✅ Deixa entrar
  }

  return router.createUrlTree(['/login']);    // 🔒 Redireciona para login
};
```

### Por que `inject()` em vez de construtor?

O AuthGuard é uma **função** (não uma classe), portanto não tem construtor. A função `inject()` do Angular permite injetar dependências dentro de funções standalone — é a forma moderna recomendada no Angular 17+.

---

## Como o Guard é Aplicado

No arquivo de rotas `app.routes.ts`:

```typescript
{
  path: 'dashboard',
  loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
  canActivate: [authGuard]   // ← Guard aplicado aqui
}
```

**Fluxo de execução:**

```
Usuário tenta acessar /dashboard
           ↓
Angular chama authGuard()
           ↓
    authService.isLoggedIn()?
      /             \
    Sim              Não
     ↓                ↓
Dashboard         Redireciona para /login
renderiza
```

---

## Rotas Protegidas vs. Públicas

| Rota | Protegida? | Motivo |
|---|---|---|
| `/` | ❌ Não | Landing page pública |
| `/login` | ❌ Não | Precisa ser acessível para logar |
| `/cadastro` | ❌ Não | Precisa ser acessível para criar conta |
| `/planos` | ❌ Não | Informação comercial pública |
| `/acervo` | ❌ Não | Conteúdo público |
| `/acervo/:slug` | ❌ Não | Conteúdo público (paywall será no backend) |
| `/professor/:slug` | ❌ Não | Perfil público |
| `/dashboard` | ✅ Sim | Área restrita de professor |

---

## Adicionando o Guard a Novas Rotas

Para proteger uma nova rota:

```typescript
// app.routes.ts
{
  path: 'minha-nova-rota',
  loadComponent: () => import('./pages/nova/nova').then(m => m.Nova),
  canActivate: [authGuard]     // ← adiciona aqui
}
```

---

## Guards Futuros (Sugestões)

### `roleGuard` — Controle por tipo de usuário

Para distinguir professor de aluno:

```typescript
export const roleGuard: CanActivateFn = () => {
  const user = inject(AuthService).getUser();

  if (user?.tipo === 'professor') return true;

  return inject(Router).createUrlTree(['/acervo']); // Aluno → acervo
};
```

### `noAuthGuard` — Redirecionar logados

Para impedir que usuário logado acesse `/login` ou `/cadastro`:

```typescript
export const noAuthGuard: CanActivateFn = () => {
  if (!inject(AuthService).isLoggedIn()) return true;

  return inject(Router).createUrlTree(['/dashboard']); // Já logado → dashboard
};
```
