# 02 — Estrutura do Projeto

## Mapa de Pastas

```
app/frontend/
├── docs/                          ← Esta documentação
│   ├── README.md
│   ├── 01_visao_geral.md
│   ├── 02_estrutura_do_projeto.md
│   └── ...
│
├── src/
│   ├── index.html                 ← HTML raiz (único HTML do projeto)
│   ├── main.ts                    ← Ponto de entrada do Angular
│   ├── styles.css                 ← Estilos globais + Tailwind
│   │
│   ├── environments/
│   │   ├── environment.ts         ← Config desenvolvimento (API local)
│   │   └── environment.prod.ts    ← Config produção (API remota)
│   │
│   └── app/
│       ├── app.ts                 ← Componente raiz (shell da aplicação)
│       ├── app.config.ts          ← Providers globais (Router, HttpClient)
│       ├── app.routes.ts          ← Definição de todas as rotas
│       │
│       ├── guards/
│       │   └── auth-guard.ts      ← Proteção de rotas autenticadas
│       │
│       ├── services/
│       │   ├── auth.ts            ← Autenticação (login, logout, token)
│       │   └── aulas.ts           ← Dados do acervo (API)
│       │
│       ├── shared/                ← Componentes usados em TODAS as páginas
│       │   ├── navbar/
│       │   │   ├── navbar.ts
│       │   │   └── navbar.html
│       │   └── footer/
│       │       ├── footer.ts
│       │       └── footer.html
│       │
│       └── pages/                 ← Uma pasta por página/rota
│           ├── home/
│           │   ├── home.ts
│           │   └── home.html
│           ├── login/
│           │   ├── login.ts
│           │   └── login.html
│           ├── cadastro/
│           │   ├── cadastro.ts
│           │   └── cadastro.html
│           ├── acervo/
│           │   ├── acervo.ts
│           │   └── acervo.html
│           ├── dashboard/
│           │   ├── dashboard.ts
│           │   └── dashboard.html
│           ├── planos/
│           │   ├── planos.ts
│           │   └── planos.html
│           ├── professor/
│           │   ├── professor.ts
│           │   └── professor.html
│           └── aula-detalhe/
│               ├── aula-detalhe.ts
│               └── aula-detalhe.html
│
├── angular.json                   ← Configuração do CLI Angular
├── tailwind.config.js             ← Tokens de design (cores, fontes)
├── tsconfig.json                  ← Configuração do TypeScript
└── package.json                   ← Dependências do projeto
```

---

## Arquivos-Chave Explicados

### `src/index.html`
O único arquivo HTML do projeto. O Angular injeta tudo dentro do `<app-root>`.

```html
<body>
  <app-root></app-root>  <!-- Angular renderiza tudo aqui -->
</body>
```

### `src/main.ts`
Ponto de entrada. Inicializa o Angular com as configurações do `app.config.ts`.

```typescript
bootstrapApplication(App, appConfig);
```

### `src/app/app.ts`
O "shell" da aplicação — estrutura que envolve todas as páginas:

```
┌─────────────────────────────┐
│        <app-navbar />       │  ← sempre visível
├─────────────────────────────┤
│      <router-outlet />      │  ← página atual renderiza aqui
├─────────────────────────────┤
│        <app-footer />       │  ← sempre visível
└─────────────────────────────┘
```

### `src/app/app.config.ts`
Registra os providers globais da aplicação:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),   // ← habilita roteamento
    provideHttpClient()      // ← habilita requisições HTTP
  ]
};
```

### `src/environments/`
Separa configurações por ambiente. Em **desenvolvimento**:
- `environment.ts` → `apiUrl: 'http://localhost:3000'`

Em **produção**:
- `environment.prod.ts` → `apiUrl: 'https://api.mistudies.com.br'`

O Angular troca automaticamente o arquivo durante o build.

---

## Convenção de Nomenclatura

| Tipo | Convenção | Exemplo |
|---|---|---|
| Componente | PascalCase | `Home`, `AuthService` |
| Arquivo | kebab-case | `home.ts`, `auth-guard.ts` |
| Pasta | kebab-case | `aula-detalhe/`, `shared/` |
| Seletor CSS | `app-` prefix | `app-navbar`, `app-footer` |
| Rota URL | kebab-case | `/aula-detalhe/:slug` |
