# 06 — Páginas

Cada página é um componente Angular independente com seu próprio arquivo `.ts` e `.html`. Todas usam **lazy loading** (carregadas sob demanda pelo router).

---

## Home (`/`)

**Arquivos:** `pages/home/home.ts` + `home.html`

### Seções da Página

| Seção | Descrição |
|---|---|
| **Hero** | Título principal, subtítulo, 2 botões (CTA e Acervo), imagem à direita |
| **Process (O Método)** | 3 cards com ícones: Upload → Reestruturação → Acervo |
| **Features Bento Grid** | Grid assimétrico com 4 blocos de features |
| **Final CTA** | Faixa com gradiente azul e botão "Criar Conta Gratuita" |

### Componente TypeScript

Simples — apenas declara o componente e importa `RouterLink`:

```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {}
```

### Elementos Notáveis no Template

```html
<!-- Título com texto em itálico colorido -->
<h1>Seu conteúdo, <span class="text-primary italic">bem resolvido</span></h1>

<!-- Botão primário com gradiente signature -->
<a routerLink="/cadastro" class="bg-signature-gradient text-on-primary px-10 py-4 rounded-xl">
  Começar agora
</a>

<!-- Bento Grid: coluna larga + coluna estreita -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
  <div class="md:col-span-8">...</div>   <!-- Feature grande -->
  <div class="md:col-span-4">...</div>   <!-- Feature pequena -->
</div>
```

---

## Login (`/login`)

**Arquivos:** `pages/login/login.ts` + `login.html`

### Funcionalidades

- **Formulário Reativo** (`ReactiveFormsModule`) com validação em tempo real
- **Mostrar/ocultar senha** com toggle
- **Integração real com a API** via `AuthService.login()`
- **Redirecionamento** para `/dashboard` após login bem-sucedido
- **Exibição de erro** da API se o login falhar

### Classe TypeScript

```typescript
export class Login {
  form: FormGroup;
  mostrarSenha = false;
  carregando = false;
  erro = '';

  constructor(
    private fb: FormBuilder,       // Cria o formulário
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;      // Bloqueia se inválido
    this.carregando = true;

    const { email, senha } = this.form.value;

    this.authService.login(email, senha).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => this.erro = err.error?.mensagem || 'E-mail ou senha incorretos.'
    });
  }
}
```

### Formulário Reativo vs. Template-Driven

| Tipo | Quando usar |
|---|---|
| **Reativo** (Login, Cadastro) | Validação complexa, testes, lógica no TypeScript |
| **Template-driven** (`[(ngModel)]`) | Formulários simples sem validação elaborada |

No login usamos **reativo** porque precisamos de validação em tempo real e controle do estado `carregando`.

---

## Cadastro (`/cadastro`)

**Arquivos:** `pages/cadastro/cadastro.ts` + `cadastro.html`

### Funcionalidades

- **Multi-step** com 3 etapas controladas por `step = 1 | 2 | 3`
- **Seleção de tipo** de conta (Professor ou Aluno) com cards clicáveis
- **Campos extras** para professor (área de atuação, instituição)
- **Confirmação** na etapa 3 com mensagem personalizada por tipo

### Controle das Etapas

```typescript
export class Cadastro {
  step = 1;                          // Etapa atual (1, 2 ou 3)
  tipo: 'professor' | 'aluno' = 'professor';
  mostrarSenha = false;
  nome = '';                         // Capturado com [(ngModel)]

  goStep(n: number) { this.step = n; }
  selectTipo(t: 'professor' | 'aluno') { this.tipo = t; }
}
```

### Template com `@if`

```html
<!-- Mostra cada step conforme o valor atual de `step` -->
@if (step === 1) { <div>Escolha professor ou aluno...</div> }
@if (step === 2) { <div>Preencha seus dados...</div> }
@if (step === 3) { <div>Conta criada! Bem-vindo.</div> }
```

---

## Acervo (`/acervo`)

**Arquivos:** `pages/acervo/acervo.ts` + `acervo.html`

Esta é a página mais complexa do projeto. Usa **Angular Signals** para gerenciar os filtros reativamente.

### Funcionalidades

- **Busca textual** em tempo real (título, tags, área, professor, etc.)
- **Filtros sidebar**: Área, Matéria, Formato, Tier, Professor, Tags
- **Grid de áreas** clicável no topo
- **Pills de filtros ativos** removíveis
- **Lista filtrada** com badges de formato e tier
- **Estado vazio** quando nenhum resultado é encontrado
- **FAB mobile** para abrir filtros em telas pequenas

### Signals Utilizados

```typescript
// Estado dos filtros — cada um é um signal
filterArea    = signal('all');
filterMateria = signal('all');
filterFormato = signal('all');
searchQuery   = signal('');

// Computed: recalcula automaticamente quando qualquer signal muda
filteredConteudos = computed(() => {
  return this.CONTEUDOS.filter(c => {
    if (this.filterArea() !== 'all' && c.area !== this.filterArea()) return false;
    if (this.searchQuery() && !c.titulo.includes(this.searchQuery())) return false;
    // ...
    return true;
  });
});
```

**Por que Signals?**
- Sem `ChangeDetectorRef` manual
- Sem `.subscribe()` e gerenciamento de memória
- O computed se atualiza automaticamente quando qualquer signal dependente muda

### Estrutura de Dados

```typescript
interface Conteudo {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  area: string;       // 'engprod' | 'administracao'
  materia: string;    // 'marketing' | 'financas' | etc.
  tags: string[];
  prof: string;
  formato: string;    // 'Resumo' | 'Aula' | 'Slide' | 'Masterclass'
  tier: string;       // 'Essencial' | 'Pro' | 'Full Studio'
  arquivo: string;    // rota Angular (vazio = "Em breve")
}
```

---

## Dashboard (`/dashboard`) ⚠️ Protegida

**Arquivos:** `pages/dashboard/dashboard.ts` + `dashboard.html`

Acessível **apenas para usuários logados** (protegida pelo `AuthGuard`).

### Funcionalidades

- **4 cards de métricas**: Aulas publicadas, Visualizações, Matérias, Satisfação
- **Sistema de 3 abas**: Minhas Aulas · Nova Aula · Perfil Público
- **Lista de aulas** com badges de status (Publicado / Rascunho)
- **Formulário** de nova aula (título, formato, tier, descrição, tags)
- **Perfil** com link para a página pública do professor

### Sistema de Abas

```typescript
export class Dashboard {
  abaAtiva = 'aulas';    // 'aulas' | 'upload' | 'perfil'
  setAba(aba: string) { this.abaAtiva = aba; }
}
```

```html
<!-- Tab buttons -->
<button (click)="setAba('aulas')" class="tab-btn" [class.active]="abaAtiva === 'aulas'">
  Minhas Aulas
</button>

<!-- Conteúdo das tabs -->
@if (abaAtiva === 'aulas')  { <div>lista de aulas...</div> }
@if (abaAtiva === 'upload') { <div>formulário...</div> }
@if (abaAtiva === 'perfil') { <div>perfil...</div> }
```

---

## Planos (`/planos`)

**Arquivos:** `pages/planos/planos.ts` + `planos.html`

Página estática com 3 cards de planos:

| Plano | Preço | Público |
|---|---|---|
| **Essencial** | Grátis | Alunos e professores iniciando |
| **Pro** | R$ 29/mês | Professores com conteúdo Pro |
| **Full Studio** | R$ 79/mês | Times e instituições |

---

## Professor (`/professor/:slug`)

**Arquivos:** `pages/professor/professor.ts` + `professor.html`

Página pública do perfil do professor. Recebe o `slug` via `ActivatedRoute` e futuramente buscará os dados na API.

```typescript
ngOnInit() {
  this.slug = this.route.snapshot.paramMap.get('slug') || '';
  // TODO: this.aulasService.getProfessor(this.slug).subscribe(...)
}
```

---

## Aula Detalhe (`/acervo/:slug`)

**Arquivos:** `pages/aula-detalhe/aula-detalhe.ts` + `aula-detalhe.html`

Página de visualização de uma aula específica. Recebe o `slug` via `ActivatedRoute` e futuramente renderizará o player de slides e conteúdo KaTeX.

```typescript
ngOnInit() {
  this.slug = this.route.snapshot.paramMap.get('slug') || '';
  // TODO: this.aulasService.getAula(this.slug).subscribe(...)
}
```

> **Nota:** As páginas de Professor e AulaDetalhe estão como **placeholder** — a estrutura de rota está pronta, mas o conteúdo completo será implementado quando a API do backend retornar os dados de cada professor/aula.
