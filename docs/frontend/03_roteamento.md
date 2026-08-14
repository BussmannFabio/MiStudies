# 03 — Roteamento

## O que é o Router do Angular?

Em vez de o browser carregar um novo arquivo `.html` a cada clique (como no projeto original), o Angular mantém a **mesma página carregada** e apenas troca o componente exibido. Isso é uma **SPA — Single Page Application**.

O usuário sente a diferença: **sem piscar de tela, sem recarregamento, navegação instantânea**.

---

## Mapa Completo de Rotas

Arquivo: `src/app/app.routes.ts`

| URL | Componente | Protegida? |
|---|---|---|
| `/` | `Home` | Não |
| `/login` | `Login` | Não |
| `/cadastro` | `Cadastro` | Não |
| `/planos` | `Planos` | Não |
| `/acervo` | `Acervo` | Não |
| `/acervo/:slug` | `AulaDetalhe` | Não |
| `/professor/:slug` | `Professor` | Não |
| `/dashboard` | `Dashboard` | ✅ Sim (AuthGuard) |
| `/**` (qualquer outra) | — | Redireciona para `/` |

---

## Código do Arquivo de Rotas

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  // Página inicial
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },

  // Autenticação
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
  { path: 'cadastro', loadComponent: () => import('./pages/cadastro/cadastro').then(m => m.Cadastro) },

  // Conteúdo público
  { path: 'planos', loadComponent: () => import('./pages/planos/planos').then(m => m.Planos) },
  { path: 'acervo', loadComponent: () => import('./pages/acervo/acervo').then(m => m.Acervo) },

  // Rotas dinâmicas (parâmetro :slug)
  { path: 'acervo/:slug', loadComponent: () => import('./pages/aula-detalhe/aula-detalhe').then(m => m.AulaDetalhe) },
  { path: 'professor/:slug', loadComponent: () => import('./pages/professor/professor').then(m => m.Professor) },

  // Área restrita (requer login)
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard]     // ← bloqueia se não estiver logado
  },

  // Fallback: rota não encontrada → volta para home
  { path: '**', redirectTo: '' }
];
```

---

## Lazy Loading — Como Funciona

Cada rota usa `loadComponent` com `import()` dinâmico. Isso significa que o JavaScript de cada página **só é baixado quando o usuário navegar para ela**.

Ao rodar `npm run start`, o Angular já mostra os "chunks" separados:

```
Lazy chunk files    | Names
chunk-W4WUTUFU.js   | acervo        64.81 kB
chunk-IRG3TJS6.js   | cadastro      29.17 kB
chunk-3WGHBUBF.js   | home          22.26 kB
chunk-NPIMAQDS.js   | dashboard     21.82 kB
chunk-W34ZOZSQ.js   | login         16.58 kB
```

O bundle inicial carregado é apenas **~60 kB** — todo o resto vem sob demanda.

---

## RouterLink vs href

No HTML original, a navegação era feita assim:
```html
<!-- HTML estático — recarrega a página inteira -->
<a href="acervo.html">Acervo</a>
```

No Angular, usamos `routerLink`:
```html
<!-- Angular — navega sem reload -->
<a routerLink="/acervo">Acervo</a>
```

Para usar `routerLink` em um componente, é necessário importar:
```typescript
imports: [RouterLink]
```

---

## RouterLinkActive — Link Ativo

A diretiva `routerLinkActive` adiciona uma classe CSS automaticamente quando a rota está ativa:

```html
<a routerLink="/acervo"
   routerLinkActive="text-primary border-b-2 border-primary font-bold">
  Acervo
</a>
```

Para a rota raiz `/`, use `[routerLinkActiveOptions]="{exact: true}"` para evitar que ela fique sempre ativa:

```html
<a routerLink="/"
   routerLinkActive="text-primary font-bold"
   [routerLinkActiveOptions]="{exact: true}">
  Home
</a>
```

---

## Rotas Dinâmicas (:slug)

Rotas com `:slug` recebem um parâmetro variável na URL. Por exemplo:
- `/acervo/tpm-e-oee` → `slug = "tpm-e-oee"`
- `/professor/prof-ana` → `slug = "prof-ana"`

O componente lê o parâmetro assim:

```typescript
import { ActivatedRoute } from '@angular/router';

export class AulaDetalhe implements OnInit {
  slug = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Lê o parâmetro :slug da URL atual
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }
}
```

---

## Redirecionamento por Código

Para redirecionar o usuário por código TypeScript (ex: após o login), use o serviço `Router`:

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

onLoginSuccess() {
  this.router.navigate(['/dashboard']);
}
```
