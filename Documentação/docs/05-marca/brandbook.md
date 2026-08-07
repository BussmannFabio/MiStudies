# Brandbook — MiStudies

> Manual de identidade visual. Documento-fonte para toda aplicação gráfica da marca. Complementa o [Naming e Tagline](naming-e-tagline.md), [Tom de Voz](tom-de-voz.md) e [Product Brief](../01-fundacao/product-brief.md).
>
> **Fase:** MVP | **Versão:** 1.0 | **Última atualização:** Abril 2026
>
> **Versão visual:** [Brandbook.html](../../../HTML%20Zite/pages/login/Brandbook.html)

---

## 1. Essência Visual

O MiStudies é a mescla entre **biblioteca moderna** e **produto digital bem resolvido**. A identidade visual traduz duas referências em coexistência:

- **Acadêmico** — estrutura, hierarquia, respeito ao conteúdo, papel, profundidade editorial
- **Tech** — limpeza, funcionalidade, cards, interface clara, sem ornamentação supérflua

O resultado é uma linguagem sóbria, precisa e calma. Nada grita. Nada é aleatório.

---

## 2. Logo e Wordmark

### Status atual
O MiStudies **ainda não possui logo finalizado**. Este brandbook define as diretrizes para criação.

### Princípios de construção

1. **Tipográfico, não ilustrado.** A marca não precisa de símbolo isolado num primeiro momento. Um wordmark bem resolvido é mais forte e versátil do que um ícone fraco.
2. **Cortar o "Mi" do "Studies" visualmente.** A forma canônica é `MiStudies` — a diferenciação entre as duas partes deve ser visível mas sutil (ex: peso diferente, cor sutil, letter-spacing).
3. **Geometria limpa.** Preferir fontes com bom contraste de eixo e formas precisas. Sem serifas exageradas, sem scripts, sem efeitos.
4. **Escala aberta.** O logo deve funcionar de 16px (favicon) a letreiro grande — sem perder leitura.

### Variações previstas

| Variação | Uso |
|----------|-----|
| **Wordmark horizontal primário** | Padrão — site, redes, e-mail |
| **Wordmark reduzido (Mi)** | Favicon, avatar, aplicação mínima |
| **Lockup com tagline** | Hero do site, cabeçalho de materiais |
| **Versão mono (preto)** | Documentos impressos, peças técnicas |
| **Versão mono (branco)** | Fundos escuros, aplicações invertidas |

### Área de proteção

Margem mínima em torno do logo = altura da letra "M" da wordmark. Nunca comprimir elementos dentro dessa zona.

### Uso mínimo

- Digital: **80px** de largura
- Impresso: **20mm** de largura

### Usos proibidos

- Não alongar, comprimir ou rotacionar
- Não aplicar sombra, outline ou efeitos 3D
- Não usar sobre fundos ruidosos sem versão mono
- Não mudar o espaçamento interno entre letras
- Não traduzir para outras línguas (ex: "MeusStudies")

---

## 3. Paleta de Cores

> ⚠️ **Atualizado em Abril 2026:** A paleta oficial passou a ser a já implementada no site (Material Design 3 adaptado), não a paleta editorial anterior (Ink/Bone/Ember). O Brandbook foi alinhado ao código real.

A paleta é **intencionalmente restrita**. Primary azul profundo como âncora, teal como secundário, amber como accent de destaque.

### Cores principais

| Nome                   | Hex       | Uso                                               |
| ---------------------- | --------- | ------------------------------------------------- |
| **Primary**            | `#0032b5` | Marca, logo, links ativos, CTAs principais        |
| **Primary Bright**     | `#0344ec` | Hover de CTAs, gradientes, containers             |
| **On-Primary**         | `#ffffff` | Texto sobre fundos Primary                        |
| **Secondary**          | `#006a6a` | Accent secundário, badges de categoria            |
| **On-Secondary**       | `#ffffff` | Texto sobre Secondary                             |
| **Tertiary**           | `#2b3b8d` | Tons complementares, variações do primário        |
| **Amber**              | `#f59e0b` | Destaques, tags de atenção, highlights editoriais |
| **Surface**            | `#f8f9fa` | Fundo padrão da aplicação                         |
| **On-Surface**         | `#191c1d` | Texto principal sobre surface                     |
| **On-Surface-Variant** | `#454652` | Texto secundário, metadados, labels               |
| **Outline**            | `#757684` | Bordas, separadores                               |

### Superfícies (Material Design 3)

| Token | Hex | Uso |
|---|---|---|
| `surface-container-lowest` | `#ffffff` | Cards, modais — máximo contraste |
| `surface-container-low` | `#f3f4f5` | Inputs, áreas levemente elevadas |
| `surface-container` | `#edeeef` | Chips, tags, containers padrão |
| `surface-container-high` | `#e7e8e9` | Hover states |
| `surface-container-highest` | `#e1e3e4` | Divisores, separadores de seção |

### Regras de aplicação

- **Fundo padrão da página:** `surface` (`#f8f9fa`)
- **Cards:** `surface-container-lowest` (`#ffffff`) com borda `surface-container-high`
- **Primary** como cor de ação, não de fundo extenso
- **Amber** apenas em badges, highlights e micro-accents — nunca em botões primários
- **Gradiente de marca:** `linear-gradient(135deg, #0032b5, #0344ec)` — exclusivo para hero e CTAs principais

### Tokens CSS (para o design system)

```css
:root {
  --ms-primary:           #0032b5;
  --ms-primary-bright:    #0344ec;
  --ms-on-primary:        #ffffff;
  --ms-secondary:         #006a6a;
  --ms-tertiary:          #2b3b8d;
  --ms-amber:             #f59e0b;
  --ms-amber-light:       #fef3c7;
  --ms-surface:           #f8f9fa;
  --ms-on-surface:        #191c1d;
  --ms-on-surface-var:    #454652;
  --ms-outline:           #757684;
  --ms-surface-low:       #f3f4f5;
  --ms-surface-container: #edeeef;
  --ms-surface-high:      #e7e8e9;
  --ms-white:             #ffffff;
}
```

---

## 4. Tipografia

> ⚠️ **Atualizado em Abril 2026:** Fonte oficial passa a ser Manrope (headlines) + Inter (body), alinhando ao sistema já implementado no site. Manrope foi descontinuada.

### Famílias oficiais

| Família | Papel | Fonte | Fallback |
|---------|-------|-------|----------|
| **Manrope** | Headlines, display, títulos, logo | Google Fonts | system-ui, sans-serif |
| **Inter** | Body, UI, navegação, legendas | Google Fonts | -apple-system, sans-serif |
| **JetBrains Mono** | Código, dados técnicos, fórmulas | Google Fonts | monospace |

### Por que essa escolha

- **Manrope** é uma sans-serif geométrica com caráter forte — limpa, moderna e funcional. Ótima em títulos grandes e em tamanhos menores. Reflete o posicionamento tech + editorial do MiStudies.
- **Inter** é o padrão de interface digital de alta qualidade — legível em qualquer tamanho, neutra e confortável para leitura de conteúdo longo.
- **JetBrains Mono** para dados técnicos, fórmulas e indicadores — reforça o território de conteúdo técnico sério.

### Escala tipográfica

| Token | Tamanho | Uso | Família | Peso |
|-------|---------|-----|---------|------|
| `--ms-text-hero` | clamp(3rem, 6vw, 4.5rem) | Headlines principais | Manrope | 800 |
| `--ms-text-h1` | clamp(2.25rem, 4vw, 3.25rem) | Títulos de seção | Manrope | 700 |
| `--ms-text-h2` | clamp(1.5rem, 2.5vw, 2.25rem) | Subtítulos | Manrope | 700 |
| `--ms-text-h3` | clamp(1.125rem, 1.8vw, 1.5rem) | Títulos de card | Manrope | 600 |
| `--ms-text-body-lg` | 1.25rem | Intro de seção, lead | Inter | 400 |
| `--ms-text-body` | 1rem | Corpo padrão | Inter | 400 |
| `--ms-text-small` | 0.875rem | Metadados, captions | Inter | 400 |
| `--ms-text-micro` | 0.75rem | Micro labels, tags, badges | Inter | 500–600 |
| `--ms-text-code` | 0.875rem | Código, dados técnicos | JetBrains Mono | 400 |

### Line-height

- **Manrope (títulos):** 1.1 a 1.2
- **Inter (body):** 1.6 a 1.75
- **JetBrains Mono:** 1.5

### Pesos permitidos

- **Manrope:** 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold para hero).
- **Inter:** 400, 500 (medium) e 600 (semibold).
- **JetBrains Mono:** 400 e 500.

### Regras tipográficas

1. **Nunca misturar mais de duas famílias em um mesmo bloco.**
2. **Hero e H1–H3 em Manrope, sempre.** É a assinatura tipográfica da marca.
3. **Body em Inter, sempre.** Manrope em corpo longo cansa a leitura.
4. **Extrabold (800) apenas em hero e wordmark.** Não usar em subtítulos ou body.
5. **Nenhum texto em caixa alta além de micro-labels, tags e eyebrows.**
6. **Letter-spacing negativo sutil em títulos grandes** (`tracking-tighter` / `-0.025em`).

---

## 5. Grid e Espaçamento

### Sistema de spacing (escala 4px)

```css
:root {
  --ms-space-1: 4px;   /* micro */
  --ms-space-2: 8px;   /* compacto */
  --ms-space-3: 12px;  /* padrão pequeno */
  --ms-space-4: 16px;  /* padrão */
  --ms-space-5: 24px;  /* médio */
  --ms-space-6: 32px;  /* confortável */
  --ms-space-7: 48px;  /* generoso */
  --ms-space-8: 64px;  /* seção */
  --ms-space-9: 96px;  /* hero */
  --ms-space-10: 128px; /* breathing room editorial */
}
```

### Grid de página

- **Desktop:** 12 colunas, gutter 24px, max-width 1200px
- **Tablet:** 8 colunas, gutter 20px
- **Mobile:** 4 colunas, gutter 16px, padding lateral 20px

### Princípios de espaçamento

- **Generosidade vertical.** Seções devem respirar. Padding vertical mínimo de 64px entre blocos.
- **Proximidade por afinidade.** Elementos relacionados ficam juntos (8-16px). Elementos separados ficam distantes (48-96px).
- **Sempre múltiplos de 4.** Não usar valores arbitrários como 13px ou 27px.

---

## 6. Iconografia e Elementos Gráficos

### Estilo de ícones

- **Linhas, não fills.** Ícones em outline com stroke de 1.5px.
- **Cantos levemente arredondados.** Sem pontas agressivas.
- **Tamanho padrão:** 20px (UI), 24px (destaque).
- **Biblioteca recomendada:** [Lucide Icons](https://lucide.dev) — gratuita, open-source, estética alinhada.

### Elementos editoriais

- **Rules (linhas horizontais):** 1px, cor Mist 40, espaçamento generoso acima/abaixo.
- **Drop caps (em artigos):** Manrope, Ember, tamanho 3x o body.
- **Pull quotes:** Manrope itálico, Ink, sem aspas tipográficas exageradas.
- **Tags/Badges:** Inter 500 micro, uppercase, letter-spacing 0.08em, padding 4px 8px, border-radius 2px.

### O que evitar

- Ícones coloridos com gradientes
- Emojis em contexto institucional (ok em redes sociais informais)
- Ilustrações "flat" genéricas (pessoas com braços longos, etc.)
- Stock photos genéricas
- Padrões geométricos decorativos

---

## 7. Aplicações

### Hierarquia padrão de uma página

```
1. Hero (Manrope, Bone ou Ink de fundo)
   ↓
2. Eyebrow (Inter micro, uppercase, Ember ou Moss)
   ↓
3. Subheader (Manrope H2)
   ↓
4. Body (Inter body)
   ↓
5. CTAs (Ember)
```

### Cards de conteúdo

- Fundo: Paper
- Borda: 1px Mist 20
- Border-radius: 4px (sutil, não round demais)
- Padding interno: 24px
- Hover: border Mist 40, sombra muito sutil

### Botões

**Primário:**
- Background: gradiente `#0032b5 → #0344ec`
- Texto: `#ffffff`
- Padding: 10px 24px
- Border-radius: 8px
- Hover: opacidade 0.9

**Secundário:**
- Background: transparente
- Borda: 1px `#0032b5`
- Texto: `#0032b5`
- Hover: background `#f3f4f5`

**Terciário (link):**
- Texto: `#0032b5`
- Underline: offset 3px
- Hover: underline mais espessa

### Formulários

- Inputs com fundo Paper, borda Mist 40
- Focus: borda Ember, outline 2px Ember 20% opacity
- Labels em Inter 500 micro acima do input
- Placeholder em Mist

---

## 8. Aplicações Proibidas

| ✗ Não faça | ✓ Faça |
|------------|--------|
| Usar Ember como fundo de seção inteira | Use Ember apenas em CTAs e accents |
| Combinar Ember + Moss em mesmo elemento | Use um accent por elemento |
| Usar gradientes nas cores principais | Mantenha cores sólidas |
| Títulos em Inter ao invés de Manrope | H1 e Hero sempre em Manrope |
| Body em Manrope | Body sempre em Inter |
| Border-radius maior que 8px | Máximo 4px — estética editorial |
| Sombras pesadas (shadow-lg, shadow-xl) | Sombras sutis ou nenhuma |
| Ícones coloridos/3D | Outline, stroke 1.5px |
| Botões arredondados tipo pill | Border-radius 2-4px |
| Cores fora da paleta oficial | Use apenas os tokens definidos |

---

## 9. Moodboard Textual

Referências visuais que inspiram o MiStudies:

- **Design editorial:** The Browser Company (Arc), Stripe Press, Are.na
- **Typography:** Manrope specimen, Inter Display
- **Biblioteca moderna:** Kinfolk Magazine, MIT Press covers, Taschen editorial design
- **Produto tech:** Linear, Vercel, Raycast — limpeza com caráter
- **Acadêmico contemporâneo:** The New York Review of Books (digital), LRB, Aeon
- **Cor e composição:** Works by Irma Boom, Massimo Vignelli's grid systems

---

## 10. Próximos Passos

1. **Criar o wordmark** seguindo os princípios do Bloco 2
2. **Produzir o logo final** em versões SVG para aplicação em todo o sistema
3. **Atualizar `mistudies-theme.css`** com os novos tokens definidos aqui
4. **Refatorar páginas existentes** (index, escopo-PI, sistema-producao, tpm-oee, resumos) para usar a nova paleta e tipografia
5. **Gerar templates sociais** (Instagram, LinkedIn) aplicando o sistema
6. **Criar favicon** a partir do "Mi" reduzido

---

> *"A marca não é o logo. A marca é a soma coerente de cada decisão visual — do espaçamento entre letras à cor do botão secundário. Este documento é o mapa dessa coerência."*
