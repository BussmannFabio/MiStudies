# Relatório de Inconsistências — MiStudies
> Gerado em: Abril 2026 · 24 itens identificados · Última revisão: Abril 2026

---

## Legenda
- 🔴 **Crítica** — Bloqueia execução ou cria contradição fundamental
- 🟠 **Alta** — Impacta identidade, posicionamento ou receita
- 🟡 **Média** — Inconsistência de execução
- 🟢 **Baixa** — Detalhe ou documentação interna
- ✅ **Resolvido** — Decisão tomada e/ou corrigido no código

---

## 🔴 CRÍTICAS

### ✅ #1 — Dois modelos de negócio simultâneos e incompatíveis — RESOLVIDO
**Arquivos:** `michael douglas/1. Business Model Canvas.md`, `michael douglas/2. Lean Canvas.md`, `michael douglas/4. Modelo Freemium.md` vs `michael douglas/8. Plano de Rentabilidade.md`, `michael douglas/relatorio-todos.md`

O projeto tem dois produtos documentados como se fossem o mesmo:

| Aspecto | Modelo 1 — Hub B2C | Modelo 2 — B2B Serviço |
|---|---|---|
| **Documentos** | BMC, Lean Canvas, Product Brief, Modelo Freemium | Plano de Rentabilidade, relatorio-todos |
| **Cliente** | Aluno (B2C) | Professor (B2B) |
| **Receita primária** | Assinatura de alunos | Transformação de aula |
| **Preço base** | R$14,90–29,90/mês | R$120–450/aula |
| **Proposta de valor** | "Hub de resumos organizados" | "PDF vira HTML interativo" |
| **Estrutura de equipe** | Solo ou dupla | 3 sócios |

O `index.html` vende para professores, o `hub.html` vende para alunos, o `dashboard.html` é uma terceira coisa. Nenhuma página faz sentido completo sozinha.

**✅ Resolvido (Abril 2026):** Modelo híbrido B2B+B2C confirmado. Professor tem 3 etapas (Onboarding → Criação de Aulas → Hub mensal). Acervo gratuito para alunos, assinatura R$14,90 para extras. Preços: R$40/75/100 por aula. Tier "Full Studio" (era Premium).

---

### ✅ #2 — Preço da assinatura de aluno — RESOLVIDO
**Arquivos:** `michael douglas/4. Modelo Freemium.md` vs `michael douglas/8. Plano de Rentabilidade.md`

- `Modelo Freemium.md` → **R$29,90/mês** (mensal), R$22,45/mês equivalente (anual)
- `Plano de Rentabilidade.md` → **R$14,90/mês** (mensal), R$9,90/mês equivalente (anual)

São documentos do mesmo projeto, na mesma pasta, com preços completamente diferentes sem justificativa documentada.

**✅ Resolvido:** R$14,90/mês · Anual com 20% off (~R$11,92/mês). Simulador e documentos atualizados.

---

### 🟠 #3 — Proposta de valor diferente em cada página pública (correção em andamento)
**Arquivos:** `index.html`, `pages/hub.html`, `pages/dashboard.html`

| Página | Mensagem exibida | Público implícito |
|---|---|---|
| `index.html` | "Nossa arquitetura intelectual organiza o caos para que você foque no que realmente importa: ensinar." | Professores |
| `hub.html` | "Conteúdos organizados para quem aprende melhor com método, foco e acesso direto ao que importa." | Alunos |
| `dashboard.html` | "Gerencie, cadastre e faça upload de novos conteúdos, apostilas, resumos e apresentações." | Professores (outra função) |

Visitante que entra em `index.html` e clica em "Acervo" vai parar em `hub.html` com uma mensagem completamente diferente e para um público diferente.

**Ação necessária:** Após definir o modelo (#1), reescrever hero de todas as páginas para o mesmo público e proposta.

---

### ✅ #4 — As 7 decisões dos sócios — RESOLVIDO (D1–D4, D6–D7)
**Arquivo:** `michael douglas/relatorio-todos.md` — Seção "Decisões Pendentes"

| ID | Decisão | Status |
|---|---|---|
| D1 | Preços por aula (R$120/250/450) estão corretos? | ❓ Sem resposta |
| D2 | Onboarding gratuito para professores piloto? | ❓ Sem resposta |
| D3 | Hub gratuito por quanto tempo para pilotos? | ❓ Sem resposta |
| D4 | Divisão de lucros 33/33/33 ou proporcional? | ❓ Sem resposta |
| D5 | Formalizar como MEI/ME ou cada um emite como freelancer? | ❓ Sem resposta |
| D6 | Nome do tier mais caro ("Premium" vs "Editorial" vs "Full Studio")? | ❓ Sem resposta |
| D7 | Assinatura de alunos ativar no mês 1 ou esperar volume de conteúdo? | ❓ Sem resposta |

**✅ Resolvido:** D1–D4 e D6–D7 respondidos em Abril 2026. D5 (formalização) ainda em aberto. Ver `relatorio-todos.md`.

---

## 🟠 ALTAS

### ✅ #5 — Dois nomes de marca: "MiStudies" e "gaaabriel" — RESOLVIDO
**Arquivos:** `pages/hub.html` linha 73, `index.html` linha 90, `pages/resumos.html`, `pages/dashboard.html`

```html
<!-- hub.html linha 73 — logo da nav -->
<a href="../index.html" class="...">gaaabriel</a>

<!-- index.html linha 90 — logo da nav -->
<div class="...">MiStudies</div>

<!-- hub.html footer -->
<div class="font-headline font-black text-2xl text-primary mb-1">MiStudies</div>
<div class="font-body text-sm italic">por gaaabriel</div>
```

O documento `5. Naming & Tagline.md` define **MiStudies** como marca canônica. "gaaabriel" não é mencionado em nenhum documento estratégico. Parece ser uma marca pessoal de creator que coexiste com a marca do produto B2B de 3 sócios.

**✅ Resolvido:** "gaaabriel" é canal pessoal, não marca do produto. Todas as páginas usarão apenas "MiStudies".

---

### ✅ #6 — Quatro paletas de cores — RESOLVIDO
**Arquivos:** `michael douglas/7. Brandbook.md`, `assets/styles/global/tokens.css`, `index.html`, `pages/demo/aula-essencial.html`, `pages/plano-rentabilidade.html`

| Arquivo | Cor principal | Fundo | Accent |
|---|---|---|---|
| `Brandbook.md` (oficial) | Ink `#141619` | Bone `#F5F2EB` | Ember `#B45309` |
| `tokens.css` (asset global) | Blue `#0F1C2E` | Neutro `#F5F5F5` | Yellow `#F2B705` |
| `index.html` / `hub.html` (Tailwind) | Primary `#0032b5` | Surface `#f8f9fa` | Secondary `#006a6a` |
| `aula-*.html` (demos) | Ink `#0C1117` | Bg `#F6F8FA` | Amber `#E6A21E` |
| `plano-rentabilidade.html` | Dark `#0C1117` | Dark `#131B24` | Amber `#E6A21E` |

O `assets/styles/mistudies/mistudies-theme.css` existe para padronizar, mas nenhuma das páginas de conteúdo o importa.

**✅ Resolvido:** Paleta oficial = azul `#0032b5` (atual do site). Brandbook.md e tokens.css serão atualizados para refletir isso.

---

### ✅ #7 — Quatro famílias tipográficas diferentes — RESOLVIDO
**Arquivos:** `michael douglas/7. Brandbook.md`, `assets/styles/global/tokens.css`, páginas HTML

| Arquivo | Display/Headline | Body | Mono |
|---|---|---|---|
| `Brandbook.md` (oficial) | **Fraunces** | **Inter** | **JetBrains Mono** |
| `tokens.css` (asset global) | Cormorant Garamond | Montserrat | — |
| `index.html` / `hub.html` | Manrope | Inter | — |
| `aula-*.html` (demos) | Cormorant Garamond | Montserrat | JetBrains Mono |
| `conteúdoANA.html` | Playfair Display | DM Sans | DM Mono |

Nenhum arquivo usa Fraunces, que é a fonte oficial definida no Brandbook.

**✅ Resolvido:** Fonte oficial = **Manrope** (headlines) + **Inter** (body). Brandbook.md e tokens.css serão atualizados.

---

### ✅ #8 — Tagline "The Intellectual Architect" — RESOLVIDO
**Arquivo:** `index.html` — footer

```html
© 2024 MiStudies - The Intellectual Architect. All rights reserved.
```

Esta tagline não aparece em nenhum dos documentos estratégicos: não está em `5. Naming & Tagline.md`, `6. Tom de Voz.md`, `3. Product Brief.md` nem no `7. Brandbook.md`. Parece uma tagline abandonada que sobrou no código de uma versão anterior.

**✅ Resolvido:** Tagline oficial = "Seu estudo, bem resolvido". "The Intellectual Architect" removido do index.html.

---

## 🟡 MÉDIAS

### #9 — Sistema de ícones inconsistente entre páginas
**Arquivos:** `michael douglas/7. Brandbook.md`, `index.html`, `pages/hub.html`, `pages/demo/aula-essencial.html`

- `Brandbook.md` recomenda: **Lucide Icons** com stroke 1.5px
- `index.html` e `hub.html` usam: **Material Symbols Outlined** (Google)
- `pages/demo/aula-*.html`: **nenhum ícone** (usa emojis em alguns pontos)
- `conteúdoANA.html`: **nenhum ícone**

Nenhuma página usa Lucide.

**Ação necessária:** Padronizar em um único sistema. Material Symbols já está em uso — mais fácil migrar o Brandbook para validar Material Symbols do que reescrever todas as páginas.

---

### #10 — Copyright 2024 vs 2026
**Arquivos:** `index.html` vs `pages/hub.html`, `pages/resumos.html`

- `index.html` footer: `© 2024 MiStudies`
- `hub.html`, `resumos.html` footer: `© 2026 MiStudies`

**Ação necessária:** Padronizar para 2026 em todos os arquivos.

---

### ✅ #11 — Termo para o cliente B2B — RESOLVIDO
**Arquivos:** `michael douglas/1. Business Model Canvas.md`, `michael douglas/3. Product Brief.md`, `index.html`, `pages/hub.html`

| Arquivo | Termo usado |
|---|---|
| `BMC.md` | "Professores e criadores de conteúdo educacional" |
| `Product Brief.md` | "O Professor — Cliente + Parceiro" |
| `Plano de Rentabilidade.md` | "professor" |
| `index.html` hero | "Educadores" |
| `hub.html` nav | (sem menção) |

Para um produto B2B com ICP definido, o termo precisa ser único em toda comunicação.

**✅ Resolvido:** Termo canônico = "professor". index.html e documentos atualizados.

---

### #12 — Custos operacionais possivelmente contados em duplicidade
**Arquivo:** `michael douglas/8. Plano de Rentabilidade.md` — Seções 5 e 7

- **Seção 5 (Custos MVP):** R$100–150/mês de IA (plano fixo)
- **Seção 7 (Custo por aula):** R$2,50–4,50/aula de custo de IA (tokens API)

Não está claro se o plano fixo já cobre os tokens por aula ou se são custos adicionais. Se forem acumulativos, com 20 aulas/mês o custo de IA pode chegar a R$240 — bem acima dos R$150 projetados.

**Ação necessária:** Esclarecer na documentação: "O plano fixo de IA cobre até X aulas/mês. Acima disso, custo adicional de R$Y/aula via API."

---

### #13 — Tiers de aula ausentes do Modelo Freemium
**Arquivos:** `michael douglas/4. Modelo Freemium.md` vs `michael douglas/8. Plano de Rentabilidade.md`

`Modelo Freemium.md` estrutura toda a monetização sem mencionar os tiers de professor (Essencial/Pro/Premium). Os dois documentos parecem ser de fases ou visões diferentes do produto e nunca foram reconciliados.

**Ação necessária:** Após definir o modelo (#1), arquivar o documento obsoleto ou adicionar uma seção de reconciliação.

---

### #14 — `relatorio-todos.md` com status técnicos desatualizados
**Arquivo:** `michael douglas/relatorio-todos.md` — Backlog Técnico

| Item | O que o documento diz | Realidade atual |
|---|---|---|
| T1 | `hub.html` sem cards de professores | `hub.html` já tem cards de conteúdo |
| T2 | `dashboard.html` não funcional, só visual | `dashboard.html` tem formulário parcialmente funcional |

**Ação necessária:** Revisar T1–T7 e atualizar status real.

---

### #15 — Tagline no site difere da tagline oficial nos documentos
**Arquivos:** `michael douglas/5. Naming & Tagline.md`, `index.html`

- `Naming & Tagline.md` recomenda: **"Seu estudo, bem resolvido"**
- `index.html` hero usa: **"Estudo Bem Resolvido para Educadores"**

Além de diferente da versão oficial, a variação do site muda o tom (perde o "Seu", que cria pertencimento) e adiciona "para Educadores", alterando o público implícito.

**Ação necessária:** Usar a versão oficial do documento estratégico.

---

### #16 — Linguagem abstrata na hero contradiz o Tom de Voz definido
**Arquivos:** `index.html`, `michael douglas/6. Tom de Voz.md`

`index.html` linha 114:
```html
Nossa arquitetura intelectual organiza o caos para que você foque no que realmente importa: ensinar.
```

`Tom de Voz.md` instrui: clareza direta, sem abstrações, linguagem próxima e concreta.

"Arquitetura intelectual" e "organizar o caos" são abstrações que contradizem diretamente o tom de voz documentado.

**Ação necessária:** Reescrever a hero copy seguindo `6. Tom de Voz.md`. Sugestão: "Transforme suas aulas em HTML interativo com design editorial premium."

---

## 🟢 BAIXAS

### #17 — Logo/Wordmark não finalizado mas design system tratado como completo
**Arquivo:** `michael douglas/7. Brandbook.md` linha 24

```
"O MiStudies ainda não possui logo finalizado."
```

Nenhum arquivo HTML tem um logo SVG próprio — todos usam wordmark tipográfico puro. Não há favicon definido em nenhuma página.

**Ação necessária:** Criar logo conforme especificações do Brandbook (tipográfico, corte entre "Mi" e "Studies"). Adicionar favicon em todas as páginas.

---

### #18 — Ausência de link de volta em páginas de conteúdo
**Arquivos:** `pages/escopo-PI.html`, `pages/sistema-producao.html`, `pages/tpm-oee.html`, `pages/demo/aula-*.html`

Páginas filho não têm navegação de volta para `hub.html` ou `index.html`. O usuário fica preso e precisa usar o botão "voltar" do navegador.

**Ação necessária:** Adicionar header mínimo com link de volta em todas as páginas de conteúdo.

---

### #19 — Grid/layout com max-width diferente do definido no Brandbook
**Arquivos:** `michael douglas/7. Brandbook.md`, `index.html`, `pages/hub.html`

- `Brandbook.md` define: max-width **1200px**
- `index.html` e `hub.html` usam Tailwind `max-w-7xl` = **1280px**

Diferença pequena (80px) mas indica que o Brandbook e o código não foram feitos em conjunto.

---

### #20 — Componentes de botão com estilos divergentes
**Arquivos:** `index.html`, `pages/hub.html`, `pages/dashboard.html`

Todos usam `.bg-signature-gradient` mas com padding, radius e tamanhos diferentes em cada página. Não há classe `.btn` reutilizável em `assets/styles/global/components.css`.

---

### #21 — Cores de surface/card inconsistentes entre páginas do hub
**Arquivos:** `index.html`, `pages/hub.html`, `pages/dashboard.html`

- `index.html`: `bg-surface-container-lowest`
- `hub.html`: `bg-surface-container-lowest border border-surface-container-high`
- `dashboard.html`: `bg-surface-container-lowest rounded-3xl` (radius maior)

Mesma "família" de tokens mas aplicados de formas diferentes.

---

### #22 — Segmentação de público diverge entre BMC e Lean Canvas
**Arquivos:** `michael douglas/1. Business Model Canvas.md`, `michael douglas/2. Lean Canvas.md`

- **BMC:** Universitários Adm/Eng, Professores, Empreendedores/profissionais
- **Lean Canvas:** Adiciona contexto "em fase de provas" e distingue early adopter explicitamente

Lean Canvas é mais preciso. BMC está desatualizado em relação a ele.

---

### #23 — Meta de R$3.600/mês sem contexto claro no cabeçalho do documento
**Arquivo:** `michael douglas/8. Plano de Rentabilidade.md` — cabeçalho

```
Meta: R$3.600/mês (S1)
```

Lendo só o cabeçalho, não está claro se é:
- Receita bruta ou líquida?
- Total ou por sócio?
- Meta do mês 1 ou do semestre 1?

A resposta está na Seção 6 (mês 5, líquido total), mas deveria estar explícita no cabeçalho.

---

### #24 — "2024" no copyright de index.html
**Arquivo:** `index.html` footer

```html
© 2024 MiStudies - The Intellectual Architect. All rights reserved.
```

Projeto está em 2026. Footer não foi atualizado.

---

## Matriz de Prioridades

### Semana 1 — Decisão estratégica (bloqueante)
```
[ ] Definir: Modelo 1 (Hub B2C) ou Modelo 2 (B2B serviço de aulas)?
[ ] Responder D1–D7 do relatorio-todos.md em reunião de sócios
[ ] Definir: "gaaabriel" é canal pessoal ou é a marca do produto?
[ ] Definir: preço canônico da assinatura de aluno (R$14,90 ou R$29,90)
```

### Semana 2 — Alinhamento de produto
```
[ ] Reescrever hero de index.html para o modelo escolhido
[ ] Padronizar termo do cliente B2B ("professor" em toda comunicação)
[ ] Substituir tagline "The Intellectual Architect" pela oficial
[ ] Usar tagline "Seu estudo, bem resolvido" em todas as páginas
[ ] Atualizar copyright para 2026 em index.html
```

### Semana 3 — Design system
```
[ ] Decidir paleta oficial (Brandbook.md vs tokens.css)
[ ] Padronizar fonte (Fraunces ou Manrope) em tokens.css
[ ] Criar componente .btn reutilizável em components.css
[ ] Padronizar sistema de ícones (Material Symbols ou Lucide)
[ ] Criar favicon e SVG do logo
```

### Backlog
```
[ ] Reconciliar Modelo Freemium.md com Plano de Rentabilidade.md
[ ] Atualizar status de T1–T7 no relatorio-todos.md
[ ] Adicionar links de volta em páginas de conteúdo filho
[ ] Esclarecer duplicidade de custos de IA na documentação
[ ] Padronizar max-width para 1200px (Brandbook) ou atualizar Brandbook
```

---

## Resumo executivo

| Severidade | Qtd | Principal impacto |
|---|---|---|
| 🔴 Crítica | 4 | Modelo de negócio não definido; decisões dos sócios em aberto |
| 🟠 Alta | 4 | Identidade de marca fragmentada; paleta e fonte inconsistentes |
| 🟡 Média | 8 | Execução diverge dos documentos estratégicos |
| 🟢 Baixa | 8 | Detalhes de código e documentação interna |

**A inconsistência raiz é a #1** — sem clareza sobre qual é o produto real (Hub B2C ou Serviço B2B para professores), qualquer trabalho de design, copy ou desenvolvimento pode estar sendo feito para o modelo errado.

---

*Documento gerado por análise cruzada de todos os arquivos do repositório · Abril 2026*
*Próxima revisão: após resolução dos itens da Semana 1*
