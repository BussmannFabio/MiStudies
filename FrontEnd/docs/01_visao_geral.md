# 01 — Visão Geral

## O que é o MiStudies FrontEnd?

O MiStudies é uma plataforma que transforma o material bruto de professores em aulas interativas bem estruturadas. Este documento descreve o **front-end** — a interface que os usuários veem e interagem.

---

## Por que Angular?

O projeto original era composto por **páginas HTML estáticas separadas**, cada uma com seu próprio `<nav>`, estilos inline e scripts JavaScript. Isso causava:

- **Duplicação de código** — a Navbar era repetida em 8 arquivos diferentes
- **Navegação quebrada** — cada link recarregava a página inteira (sem SPA)
- **Escalabilidade zero** — adicionar uma feature nova exigia editar todos os arquivos
- **Sem autenticação real** — o login era simulado com `localStorage` e `window.location.href`

O **Angular** resolve todos esses problemas:

| Problema Anterior | Solução Angular |
|---|---|
| Navbar duplicada em 8 arquivos | Um único `NavbarComponent` |
| Reload de página em cada link | `RouterLink` (SPA — sem reload) |
| JavaScript inline em cada página | Lógica encapsulada em classes TypeScript |
| Sem validação de formulários | `ReactiveFormsModule` com validadores |
| Sem proteção de rotas | `AuthGuard` |
| Fetch manual de API | `HttpClient` e `Services` |

---

## Stack Tecnológica

| Tecnologia | Versão | Papel |
|---|---|---|
| **Angular** | 19 | Framework principal (componentes, rotas, DI) |
| **TypeScript** | 5.x | Linguagem (tipagem estática, classes, interfaces) |
| **Tailwind CSS** | 3.x | Estilização via classes utilitárias |
| **Zone.js** | 0.15.x | Detecção de mudanças (Change Detection) |
| **RxJS** | 7.x | Programação reativa (Observable, pipe, tap) |
| **Angular Signals** | built-in | Estado reativo moderno (usado no Acervo) |

---

## Decisões de Arquitetura

### 1. Standalone Components
Todos os componentes foram criados como **standalone** (sem NgModule). Isso é o padrão do Angular 17+ e simplifica muito a estrutura.

```typescript
@Component({
  selector: 'app-home',
  standalone: true,           // ← sem NgModule
  imports: [RouterLink],      // ← imports declarados aqui
  templateUrl: './home.html',
})
export class Home {}
```

### 2. Lazy Loading em todas as rotas
Nenhuma página é carregada no bundle inicial. Cada rota carrega seu componente **somente quando o usuário navega para ela**. Isso mantém o carregamento inicial rápido.

```typescript
{
  path: 'acervo',
  loadComponent: () => import('./pages/acervo/acervo').then(m => m.Acervo)
}
```

### 3. Angular Signals no Acervo
A página de Acervo usa `signal()` e `computed()` do Angular — a nova forma de gerenciar estado reativo, sem RxJS e sem `ChangeDetectorRef`:

```typescript
filterArea = signal('all');
filteredConteudos = computed(() => { /* recalcula automaticamente */ });
```

### 4. Design System via Tailwind
Em vez de estilos CSS por componente, todo o design compartilha os mesmos **tokens de cor e tipografia** definidos em `tailwind.config.js`. Mudando um token, todo o app atualiza.

---

## Fluxo de uma Requisição

```
Usuário clica em link
        ↓
RouterLink (sem reload)
        ↓
Angular Router verifica AuthGuard (se rota protegida)
        ↓
Lazy Load: carrega o componente da página
        ↓
Componente chama Service (ex: AuthService.login())
        ↓
Service faz HttpClient.post() → API do BeckEnd
        ↓
Observable retorna response
        ↓
Componente atualiza o template
        ↓
Usuário vê a mudança (sem reload de página)
```
