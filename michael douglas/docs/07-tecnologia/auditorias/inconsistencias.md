# Relatório de Inconsistências — MiStudies
> Gerado em: Abril 2026 · 24 itens identificados · **Última revisão: Abril 2026 (pós-implementação MVP)**

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
**Arquivos:** `docs/01-fundacao/business-model-canvas.md`, `docs/01-fundacao/lean-canvas.md`, `docs/99-arquivo/modelo-freemium.md` vs `docs/02-oferta-e-financeiro/catalogo-produtos-e-precos.md` + `docs/02-oferta-e-financeiro/plano-de-rentabilidade.md`

**✅ Resolvido (Abril 2026):** Modelo híbrido B2B+B2C confirmado. Professor tem 3 etapas (Onboarding → Criação de Aulas → Hub mensal). Acervo gratuito para alunos, assinatura R$14,90 para extras. Preços: R$40/75/100 por aula. Tier "Full Studio" (era Premium). Documentado em `backlog-geral.md`.

---

### ✅ #2 — Preço da assinatura de aluno — RESOLVIDO
**✅ Resolvido:** R$14,90/mês · Anual com 20% off (~R$11,92/mês). Simulador e `docs/02-oferta-e-financeiro/plano-de-rentabilidade.md` atualizados. `pages/planos-precos.html` reflete valores corretos.

---

### ✅ #3 — Proposta de valor diferente em cada página pública — RESOLVIDO
**Arquivos:** `index.html`, ~~`pages/hub.html`~~, `pages/dashboard.html`

`hub.html` foi **deletado** (Abril 2026). `index.html` é a única landing pública, com hero voltado para professores. `dashboard.html` é área restrita (não é página de marketing). Problema estrutural eliminado.

**Ação restante:** hero copy do `index.html` ainda usa texto genérico — ver #16.

---

### ✅ #4 — As 7 decisões dos sócios — RESOLVIDO (D1–D4, D6–D7)
**✅ Resolvido:** Ver tabela de decisões em `backlog-geral.md`. D5 (formalização societária) ainda em aberto.

---

## 🟠 ALTAS

### ✅ #5 — Dois nomes de marca: "MiStudies" e "gaaabriel" — RESOLVIDO
**✅ Resolvido:** Todas as páginas usam apenas "MiStudies". Referências a "gaaabriel" removidas de `index.html`, `dashboard.html`, `escopo-PI.html`, `sistema-producao.html`, `docs/05-marca/brandbook.md`.

---

### ✅ #6 — Quatro paletas de cores — RESOLVIDO
**✅ Resolvido:** Paleta oficial = azul `#0032b5` + tokens MD3. `docs/05-marca/brandbook.md` atualizado. Todas as páginas principais usam os mesmos tokens Tailwind.

---

### ✅ #7 — Quatro famílias tipográficas diferentes — RESOLVIDO
**✅ Resolvido:** Fonte oficial = **Manrope** (headlines) + **Inter** (body). `docs/05-marca/brandbook.md` atualizado. Consistente em `index.html`, `dashboard.html`, `acervo.html`, `planos-precos.html`, `login.html`, `cadastro.html`.

---

### ✅ #8 — Tagline "The Intellectual Architect" — RESOLVIDO
**✅ Resolvido:** Removido de `index.html`. Footer usa "© 2026 MiStudies — Seu estudo, bem resolvido."

---

## 🟡 MÉDIAS

### #9 — Sistema de ícones inconsistente — PARCIALMENTE RESOLVIDO
**Resolução adotada:** **Material Symbols Outlined** (Google) é o sistema padrão — já em uso em todas as páginas principais. `docs/05-marca/brandbook.md` deve ser atualizado para remover referência ao Lucide.

**Ação restante:** Atualizar seção de ícones do Brandbook para validar Material Symbols como padrão oficial.

---

### ✅ #10 — Copyright 2024 vs 2026 — RESOLVIDO
**✅ Resolvido:** `index.html` atualizado para 2026. `hub.html` e `resumos.html` deletados. Não há mais divergência.

---

### ✅ #11 — Termo para o cliente B2B — RESOLVIDO
**✅ Resolvido:** Termo canônico = **"professor"** em toda a comunicação. `index.html`, `dashboard.html`, `planos-precos.html` e documentos atualizados.

---

### ✅ #12 — Custos operacionais possivelmente contados em duplicidade — RESOLVIDO
**Arquivo:** `docs/02-oferta-e-financeiro/plano-de-rentabilidade.md` — Seções 1 e 2

- Custos MVP: R$100–150/mês de IA (planos + uso estimado)
- Custo por aula: Essencial ~R$3, Pro ~R$6, Full Studio ~R$12 de IA/API

**Fechamento:** o Plano de Rentabilidade agora explicita que o orçamento mensal de IA já inclui planos e APIs estimados. Até 20 aulas/mês em mix equilibrado, usar R$150/mês; acima disso, adicionar buffer variável por aula.

---

### ✅ #13 — Tiers de aula ausentes do Modelo Freemium — RESOLVIDO
`pages/planos-precos.html` foi criada (Abril 2026) com arquitetura completa: Onboarding + Tiers por aula + Hub. Ela substitui funcionalmente o `docs/99-arquivo/modelo-freemium.md` como referência de preços para o usuário.

**Fechamento:** `docs/99-arquivo/modelo-freemium.md` recebeu nota explícita de documento histórico/desatualizado e aponta para `docs/02-oferta-e-financeiro/catalogo-produtos-e-precos.md` como referência oficial de produto e preços.

---

### ✅ #14 — `backlog-geral.md` com status técnicos desatualizados — RESOLVIDO NESTA REVISÃO
Todos os itens T1–T7 foram revisados e atualizados nesta sessão. Ver `backlog-geral.md`.

---

### #15 — Tagline no site difere da tagline oficial nos documentos
**Arquivos:** `docs/05-marca/naming-e-tagline.md`, `index.html`

- `Naming & Tagline.md`: **"Seu estudo, bem resolvido"**
- `index.html` hero h1: **"Estudo Bem Resolvido para Educadores"**

A variação adiciona "para Educadores" (restringe público implícito) e perde o "Seu" (perde pertencimento).

**Ação necessária:** Usar a versão oficial do documento estratégico no h1 do hero.

---

### #16 — Copy do hero do `index.html` genérica e fora do tom de voz
**Arquivo:** `index.html` linha ~114, `docs/05-marca/tom-de-voz.md`

O subtítulo atual: *"Transforme conteúdos brutos em experiências de aprendizagem estruturadas..."* é adequado mas pode ser mais direto. O Tom de Voz pede linguagem concreta, sem abstrações.

**Ação necessária:** Revisar hero copy seguindo `docs/05-marca/tom-de-voz.md`. Prioridade baixa — não bloqueia MVP.

---

## 🟢 BAIXAS

### #17 — Logo/Wordmark não finalizado, sem favicon
**Arquivo:** `docs/05-marca/brandbook.md`

Todas as páginas usam wordmark tipográfico puro (texto "MiStudies"). Nenhuma tem `<link rel="favicon">`.

**Ação necessária:** Criar favicon (pode ser simples: "M" com fundo azul #0032b5). Adicionar em todas as páginas.

---

### ✅ #18 — Ausência de link de volta em páginas de conteúdo — RESOLVIDO
**✅ Resolvido:** Páginas de conteúdo movidas para `pages/acervo/` (Abril 2026). Todas têm nav com logo → `../../index.html` e link Acervo → `../acervo.html`.

---

### #19 — Grid com max-width diferente do Brandbook
- `docs/05-marca/brandbook.md` define: **1200px**
- Tailwind `max-w-7xl` = **1280px**

Diferença de 80px. Pode ser resolvido atualizando o Brandbook para aceitar 1280px (mais simples).

---

### #20 — Componentes de botão sem classe reutilizável
Todas as páginas usam `.bg-signature-gradient` inline mas com padding/radius diferentes. Não há `.btn-primary` em `assets/styles/`. Relevante quando houver mais páginas.

---

### ✅ #21 — Cores de surface/card inconsistentes — MELHORADO
Páginas criadas recentemente (`dashboard.html`, `login.html`, `cadastro.html`) seguem padrão consistente: `bg-surface-container-lowest border border-surface-container rounded-2xl`. Páginas legadas têm pequenas variações mas não comprometem a identidade.

---

### ✅ #22 — Segmentação de público diverge entre BMC e Lean Canvas — RESOLVIDO
- **BMC:** atualizado para refletir o modelo B2B+B2C com professor como cliente primário.
- **Lean Canvas:** atualizado para o mesmo modelo, mantendo foco em validação do MVP.

**Fechamento:** ambos os documentos agora apontam para o modelo comercial confirmado e para as fontes oficiais em `docs/02-oferta-e-financeiro/`.

---

### ✅ #23 — Meta de R$3.600/mês sem contexto claro no cabeçalho — RESOLVIDO
**Arquivo:** `docs/02-oferta-e-financeiro/plano-de-rentabilidade.md`

**Fechamento:** cabeçalho atualizado para deixar claro que a meta S1 é R$3.600/mês de receita líquida total, equivalente a aproximadamente R$1.200 por sócio.

---

### ✅ #24 — "2024" no copyright — RESOLVIDO
**✅ Resolvido:** `index.html` atualizado para 2026.

---

## Status geral — Pós-implementação MVP (Abril 2026)

| Severidade | Total | Resolvidos | Em aberto |
|---|---|---|---|
| 🔴 Crítica | 4 | 4 ✅ | 0 |
| 🟠 Alta | 4 | 4 ✅ | 0 |
| 🟡 Média | 8 | 5 ✅ | 3 |
| 🟢 Baixa | 8 | 5 ✅ | 3 |
| **Total** | **24** | **18 ✅** | **6** |

### Itens ainda abertos (priorizados)
1. **#15** — Alinhar tagline do hero com `docs/05-marca/naming-e-tagline.md` *(copy)*
2. **#17** — Criar favicon e adicionar em todas as páginas *(código, baixa complexidade)*
3. **#9** — Atualizar Brandbook para validar Material Symbols como padrão *(doc interno)*
4. **#16** — Revisar hero copy seguindo Tom de Voz *(copy)*
5. **#19** — Padronizar max-width (Brandbook vs código) *(doc ou código)*
6. **#20** — Criar classe `.btn-primary` reutilizável *(CSS, futuro)*

---

*Última atualização: Abril 2026 · Pós-commit implementação MVP*
