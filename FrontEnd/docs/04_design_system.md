# 04 — Design System

## Visão Geral

O Design System do MiStudies é baseado no **Material Design 3** com uma paleta customizada. Ele é implementado em dois lugares:

1. **`tailwind.config.js`** — define os tokens (variáveis de design) como classes Tailwind
2. **`src/styles.css`** — cria utilitários reutilizáveis e aplica os tokens globalmente

---

## Paleta de Cores

Arquivo: `tailwind.config.js` → `theme.extend.colors`

### Cores Primárias

| Token | Valor HEX | Classe Tailwind | Uso |
|---|---|---|---|
| `primary` | `#0032b5` | `text-primary`, `bg-primary` | Cor principal (botões, links, destaques) |
| `on-primary` | `#ffffff` | `text-on-primary` | Texto sobre fundo primary |
| `primary-container` | `#0344ec` | `bg-primary-container` | Variant mais clara do primary |

### Cores Secundárias

| Token | Valor HEX | Classe Tailwind | Uso |
|---|---|---|---|
| `secondary` | `#006a6a` | `text-secondary`, `bg-secondary` | Verde-azulado para destaques alternativos |
| `on-secondary` | `#ffffff` | `text-on-secondary` | Texto sobre fundo secondary |
| `secondary-container` | `#90efef` | `bg-secondary-container` | Chips e badges de categorias |

### Cores Terciárias

| Token | Valor HEX | Classe Tailwind | Uso |
|---|---|---|---|
| `tertiary` | `#2b3b8d` | `text-tertiary`, `bg-tertiary` | Azul escuro para tier "Full Studio" |

### Cores de Superfície (Fundos)

| Token | Valor HEX | Uso |
|---|---|---|
| `surface` | `#f8f9fa` | Fundo geral da página (`<body>`) |
| `surface-container-lowest` | `#ffffff` | Cards e painéis brancos |
| `surface-container-low` | `#f3f4f5` | Campos de input |
| `surface-container` | `#edeeef` | Seções de fundo alternado |
| `surface-container-high` | `#e7e8e9` | Bordas, divisores |
| `surface-container-highest` | `#e1e3e4` | Contagens, badges neutros |

### Cores de Texto

| Token | Valor HEX | Uso |
|---|---|---|
| `on-surface` | `#191c1d` | Texto principal (quase preto) |
| `on-surface-variant` | `#454652` | Texto secundário, labels, subtítulos |
| `outline` | `#757684` | Texto terciário, placeholders |

### Cores de Estado

| Token | Valor HEX | Uso |
|---|---|---|
| `error` | `#ba1a1a` | Mensagens de erro, validação |

---

## Tipografia

### Famílias de Fonte

```javascript
// tailwind.config.js
fontFamily: {
  "headline": ["Manrope", "sans-serif"],  // Títulos h1-h6
  "body":     ["Inter", "sans-serif"],    // Texto corrido, labels
}
```

As fontes são carregadas do Google Fonts no `src/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter..." rel="stylesheet">
```

### Classes de Uso

```html
<!-- Títulos: Manrope -->
<h1 class="font-headline font-extrabold">Título</h1>

<!-- Corpo: Inter (padrão do body) -->
<p class="font-body">Parágrafo de texto</p>

<!-- Peso e tamanho ----->
<span class="text-4xl font-extrabold">Grande e Bold</span>
<span class="text-sm font-medium text-on-surface-variant">Pequeno e Cinza</span>
```

---

## Gradiente Signature

O gradiente azul característico do MiStudies:

```css
/* styles.css */
.bg-signature-gradient {
  background: linear-gradient(135deg, #0032b5 0%, #0344ec 100%);
}
```

Uso:
```html
<button class="bg-signature-gradient text-on-primary px-6 py-3 rounded-xl">
  Criar conta
</button>
```

---

## Classes Utilitárias Globais

Definidas em `src/styles.css` dentro de `@layer utilities`:

### `.glass-nav`
Efeito de vidro fosco (glassmorphism) na Navbar:
```css
.glass-nav {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### `.input-field`
Campo de formulário padrão:
```css
.input-field {
  @apply w-full bg-surface-container-low border border-surface-container-high
         rounded-xl px-4 py-3 text-sm text-on-surface outline-none transition-all;
}
.input-field:focus {
  @apply border-primary;
  box-shadow: 0 0 0 3px rgba(0, 50, 181, 0.1);
}
```

Uso:
```html
<input type="email" class="input-field" placeholder="seu@email.com">
```

### `.tab-btn` e `.tab-btn.active`
Sistema de abas (usado no Dashboard):
```css
.tab-btn {
  @apply relative pb-3 text-sm font-medium text-on-surface-variant transition-colors cursor-pointer;
}
.tab-btn.active {
  @apply text-primary font-bold;
}
.tab-btn.active::after {
  content: '';
  @apply absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t;
}
```

Uso:
```html
<button class="tab-btn" [class.active]="abaAtiva === 'aulas'">Minhas Aulas</button>
```

### Badges de Status (Dashboard)
```css
.badge-publicado { @apply bg-green-100 text-green-800; }
.badge-rascunho  { @apply bg-yellow-100 text-yellow-800; }
.badge-arquivado { @apply bg-slate-100 text-slate-600; }
```

---

## Ícones — Material Symbols

O projeto usa a família **Material Symbols Outlined** do Google:

```html
<!-- Ícone de busca -->
<span class="material-symbols-outlined">search</span>

<!-- Ícone de escola com tamanho customizado -->
<span class="material-symbols-outlined text-3xl text-primary">school</span>
```

Lista completa de ícones disponíveis: [https://fonts.google.com/icons](https://fonts.google.com/icons)

---

## Como Adicionar uma Nova Cor

1. Abra `tailwind.config.js`
2. Adicione sob `theme.extend.colors`:
```javascript
"nova-cor": "#ff6b35",
"on-nova-cor": "#ffffff",
```
3. Use nos templates imediatamente:
```html
<div class="bg-nova-cor text-on-nova-cor">...</div>
```
