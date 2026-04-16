# Migração para Angular — MiStudies
> Documento de execução passo a passo · Criado: Abril 2026
> Pasta de destino: `FrontEnd/` (raiz do repositório)

---

## Contexto

O frontend atual é HTML/CSS/JS puro com Tailwind via CDN, distribuído em ~8 páginas independentes com nav duplicada em cada arquivo. A migração para Angular resolve os riscos mapeados na auditoria de arquitetura:

- Nav e config Tailwind copiadas em cada página → componentes compartilhados
- Tailwind via CDN (~350KB sem tree-shaking) → build com tree-shaking (~10KB)
- Dashboard acessível sem auth por URL direta → `AuthGuard` no roteador
- Dados hardcoded em cada HTML → Services centralizados

**Premissa:** a migração é feita em etapas paralelas ao HTML atual. O `pages/` continua funcionando até a substituição completa.

---

## Mapeamento de páginas → rotas Angular

| Arquivo atual | Rota Angular | Componente |
|---|---|---|
| `index.html` | `/` | `HomeComponent` |
| `pages/login.html` | `/login` | `LoginComponent` |
| `pages/cadastro.html` | `/cadastro` | `CadastroComponent` |
| `pages/dashboard.html` | `/dashboard` | `DashboardComponent` |
| `pages/planos-precos.html` | `/planos` | `PlanosComponent` |
| `pages/acervo.html` | `/acervo` | `AcervoComponent` |
| `pages/acervo/[slug].html` | `/acervo/:slug` | `AulaDetalheComponent` |
| `pages/professor/[slug].html` | `/professor/:slug` | `ProfessorComponent` |

---

## Etapas da migração

### Etapa 1 — Setup do projeto
> **Status:** `[ ]` Não iniciado

```bash
# Pré-requisito: Node 18+ e Angular CLI instalados
npm install -g @angular/cli

# Dentro da raiz do repositório
ng new mistudies-app --routing=true --style=css --ssr=false
```

Após criado, mover o conteúdo gerado para `FrontEnd/`:
```bash
mv mistudies-app/* FrontEnd/
mv mistudies-app/.* FrontEnd/ 2>/dev/null || true
rmdir mistudies-app
```

**Resultado esperado:**
```
FrontEnd/
├── src/
│   ├── app/
│   ├── assets/
│   ├── styles.css
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json
```

---

### Etapa 2 — Tailwind com build (substituir CDN)
> **Status:** `[ ]` Não iniciado · Depende de: Etapa 1

```bash
cd FrontEnd
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configurar `tailwind.config.js`:
```js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {} },
  plugins: [],
}
```

Em `src/styles.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Adicionar tokens de cor do MiStudies no `theme.extend` (retirar do `Brandbook.html`).

**Resultado esperado:** Tailwind funcional via build, sem CDN.

---

### Etapa 3 — Componentes compartilhados (navbar e footer)
> **Status:** `[ ]` Não iniciado · Depende de: Etapa 2

```bash
ng generate component shared/navbar
ng generate component shared/footer
```

`src/app/app.component.html`:
```html
<app-navbar />
<router-outlet />
<app-footer />
```

Migrar o HTML da navbar atual para `navbar.component.html`. A navbar existe **uma única vez** no projeto.

---

### Etapa 4 — Componentes de página e rotas
> **Status:** `[ ]` Não iniciado · Depende de: Etapa 3

```bash
ng generate component pages/home
ng generate component pages/login
ng generate component pages/cadastro
ng generate component pages/dashboard
ng generate component pages/planos
ng generate component pages/acervo
ng generate component pages/aula-detalhe
ng generate component pages/professor
```

Configurar `src/app/app.routes.ts`:
```typescript
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'planos', component: PlanosComponent },
  { path: 'acervo', component: AcervoComponent },
  { path: 'acervo/:slug', component: AulaDetalheComponent },
  { path: 'professor/:slug', component: ProfessorComponent },
  { path: '**', redirectTo: '' },
];
```

---

### Etapa 5 — Migração do HTML de cada página
> **Status:** `[ ]` Não iniciado · Depende de: Etapa 4

Para cada página, copiar o conteúdo dentro do `<main>` (sem `<head>`, sem nav, sem footer) para o `.component.html` correspondente.

Ordem sugerida (do mais simples ao mais complexo):
1. `HomeComponent` ← `index.html`
2. `LoginComponent` ← `pages/login.html`
3. `CadastroComponent` ← `pages/cadastro.html`
4. `PlanosComponent` ← `pages/planos-precos.html`
5. `AcervoComponent` ← `pages/acervo.html`
6. `DashboardComponent` ← `pages/dashboard.html`
7. `ProfessorComponent` ← `pages/professor/gabriel.html`
8. `AulaDetalheComponent` ← `pages/acervo/[slug].html`

---

### Etapa 6 — AuthGuard (proteger dashboard)
> **Status:** `[ ]` Não iniciado · Depende de: Etapa 4

```bash
ng generate guard guards/auth
```

`src/app/guards/auth.guard.ts`:
```typescript
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loggedIn = !!localStorage.getItem('token');
  return loggedIn ? true : router.createUrlTree(['/login']);
};
```

---

### Etapa 7 — Services para consumir a API do backend
> **Status:** `[ ]` Não iniciado · Depende de: Etapa 5 + backend B4–B7

```bash
ng generate service services/auth
ng generate service services/aulas
ng generate service services/professor
ng generate service services/planos
```

Cada service usa `HttpClient` para consumir os endpoints do `BeckEnd/`:

```typescript
// aulas.service.ts (exemplo)
@Injectable({ providedIn: 'root' })
export class AulasService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAcervo() {
    return this.http.get(`${this.api}/api/aulas`);
  }
}
```

Configurar `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

---

### Etapa 8 — Build e deploy
> **Status:** `[ ]` Não iniciado · Depende de: Etapa 7

```bash
cd FrontEnd
ng build --configuration=production
```

Saída em `FrontEnd/dist/mistudies-app/browser/`. Fazer deploy no Netlify.

Criar `FrontEnd/public/_redirects`:
```
/* /index.html 200
```

Necessário para o roteamento Angular funcionar ao recarregar a página diretamente.

---

## Checklist de execução

| Etapa | Descrição | Status |
|---|---|---|
| 1 | Setup Angular CLI + `ng new` em `FrontEnd/` | `[ ]` |
| 2 | Tailwind com build (remover CDN) | `[ ]` |
| 3 | `NavbarComponent` e `FooterComponent` | `[ ]` |
| 4 | Componentes de página + rotas em `app.routes.ts` | `[ ]` |
| 5 | Migrar HTML de cada página (8 páginas) | `[ ]` |
| 6 | `AuthGuard` para `/dashboard` | `[ ]` |
| 7 | Services + integração com API backend | `[ ]` |
| 8 | Build de produção + deploy Netlify | `[ ]` |

---

## Decisões pendentes antes de começar

| Decisão | Impacto |
|---|---|
| URL base da API em produção | Necessário para configurar `environment.prod.ts` na Etapa 7 |
| Domínio final do projeto | Necessário para configurar `_redirects` e CORS no backend |

---

*Última atualização: Abril 2026 · Responsável: Sócio 1*
