# 05 — Componentes Compartilhados

Componentes **shared** aparecem em **todas** as páginas automaticamente, pois estão no shell da aplicação (`app.ts`).

---

## Navbar

**Arquivo:** `src/app/shared/navbar/navbar.ts` e `navbar.html`

### O que faz

- Exibe o logo "MiStudies" com link para `/`
- Exibe links de navegação: Home, Acervo, Planos
- Exibe link "Dashboard" apenas quando o usuário está logado
- Exibe "Entrar" e "Criar conta" quando deslogado, ou o nome do usuário + "Sair" quando logado
- Menu hambúrguer para mobile (toggle com `menuAberto`)

### Classe TypeScript

```typescript
// src/app/shared/navbar/navbar.ts
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  menuAberto = false;

  constructor(public authService: AuthService) {}

  toggleMenu() { this.menuAberto = !this.menuAberto; }
  logout()     { this.authService.logout(); }
}
```

### Como funciona o estado de autenticação

O `AuthService` é injetado como `public` para que o template possa chamar seus métodos diretamente:

```html
<!-- navbar.html -->

<!-- Mostra "Dashboard" só se estiver logado -->
@if (authService.isLoggedIn()) {
  <a routerLink="/dashboard">Dashboard</a>
}

<!-- Bloco alternativo: logado vs. deslogado -->
@if (authService.isLoggedIn()) {
  <span>{{ authService.getUser()?.nome }}</span>
  <button (click)="logout()">Sair</button>
} @else {
  <a routerLink="/login">Entrar</a>
  <a routerLink="/cadastro">Criar conta</a>
}
```

### Comportamento Responsivo

| Tela | Comportamento |
|---|---|
| Desktop (≥768px) | Links visíveis horizontalmente, classe `hidden md:flex` |
| Mobile (<768px) | Links ocultos, botão hambúrguer aparece (`md:hidden`) |
| Mobile (menu aberto) | Dropdown vertical aparece com `@if (menuAberto)` |

### Estilo `glass-nav`

A navbar usa `backdrop-filter: blur(12px)` para criar o efeito de vidro fosco sobre o conteúdo que passa por baixo ao rolar a página.

---

## Footer

**Arquivo:** `src/app/shared/footer/footer.ts` e `footer.html`

### O que faz

- Exibe o nome "MiStudies"
- Links para Planos, Acervo e Suporte (email)
- Copyright com o ano atual gerado dinamicamente

### Classe TypeScript

```typescript
// src/app/shared/footer/footer.ts
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  anoAtual = new Date().getFullYear(); // Ex: 2026
}
```

### Template

```html
<!-- footer.html -->
<footer class="w-full border-t border-slate-100 bg-slate-50">
  <div class="flex flex-col md:flex-row justify-between items-center px-12 py-8 max-w-7xl mx-auto">

    <div class="font-headline font-bold text-slate-900">MiStudies</div>

    <div class="flex gap-8">
      <a routerLink="/planos">Planos</a>
      <a routerLink="/acervo">Acervo</a>
      <a href="mailto:contato@mistudies.com.br">Suporte</a>
    </div>

    <!-- anoAtual vem do TypeScript: new Date().getFullYear() -->
    <div>© {{ anoAtual }} MiStudies</div>

  </div>
</footer>
```

---

## Como Adicionar um Novo Componente Compartilhado

**Exemplo:** Criar um botão "Voltar ao topo"

1. **Crie os arquivos:**
```
src/app/shared/scroll-top/
  ├── scroll-top.ts
  └── scroll-top.html
```

2. **Implemente o componente:**
```typescript
// scroll-top.ts
@Component({
  selector: 'app-scroll-top',
  standalone: true,
  template: `<button (click)="scroll()">↑</button>`
})
export class ScrollTop {
  scroll() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
```

3. **Adicione ao shell em `app.ts`:**
```typescript
imports: [RouterOutlet, Navbar, Footer, ScrollTop],
template: `
  <app-navbar />
  <router-outlet />
  <app-scroll-top />
  <app-footer />
`
```

Pronto — aparece em todas as páginas automaticamente.
