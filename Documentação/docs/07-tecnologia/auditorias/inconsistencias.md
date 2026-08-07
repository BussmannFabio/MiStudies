# Relatório de Inconsistências — MiStudies
> Gerado em: Abril 2026 · 24 itens identificados · **Última revisão: Julho 2026 (condensado — itens resolvidos resumidos em tabela)**

---

## Legenda
- 🔴 **Crítica** — Bloqueia execução ou cria contradição fundamental
- 🟠 **Alta** — Impacta identidade, posicionamento ou receita
- 🟡 **Média** — Inconsistência de execução
- 🟢 **Baixa** — Detalhe ou documentação interna
- ✅ **Resolvido** — Decisão tomada e/ou corrigido no código

---

## ✅ Itens resolvidos (18 de 24) — resumo

| # | Severidade | Item | Resolução |
|---|---|---|---|
| 1 | 🔴 | Dois modelos de negócio simultâneos e incompatíveis | Modelo híbrido B2B+B2C confirmado — professor com 3 etapas, acervo gratuito + assinatura R$14,90. Ver `backlog-geral.md` |
| 2 | 🔴 | Preço da assinatura de aluno indefinido | R$14,90/mês · anual com 20% off (~R$11,92/mês) |
| 3 | 🔴 | Proposta de valor diferente em cada página pública | `hub.html` deletado; `index.html` é a única landing pública |
| 4 | 🔴 | As 7 decisões dos sócios | D1–D4 e D6–D7 resolvidas (ver `backlog-geral.md`); D5 (formalização societária) segue aberta |
| 5 | 🟠 | Dois nomes de marca ("MiStudies" e "gaaabriel") | Todas as páginas usam apenas "MiStudies" |
| 6 | 🟠 | Quatro paletas de cores | Paleta oficial: azul `#0032b5` + tokens MD3 |
| 7 | 🟠 | Quatro famílias tipográficas | Manrope (headlines) + Inter (body) |
| 8 | 🟠 | Tagline "The Intellectual Architect" | Removida; footer usa "© 2026 MiStudies — Seu estudo, bem resolvido" |
| 10 / 24 | 🟡 / 🟢 | Copyright "2024" divergente de 2026 (item duplicado no relatório original) | `index.html` atualizado para 2026 |
| 11 | 🟡 | Termo para o cliente B2B inconsistente | "Professor" é o termo canônico em toda comunicação |
| 12 | 🟡 | Custos operacionais possivelmente em duplicidade | Plano de Rentabilidade esclarece que o orçamento de IA já inclui planos e APIs |
| 13 | 🟡 | Tiers de aula ausentes do Modelo Freemium | `planos-precos.html` criado; `modelo-freemium.md` marcado como histórico |
| 14 | 🟡 | `backlog-geral.md` com status técnicos desatualizados | Itens T1–T7 revisados e atualizados |
| 18 | 🟢 | Ausência de link de volta em páginas de conteúdo | Nav padrão em `pages/acervo/` com logo e link Acervo |
| 21 | 🟢 | Cores de surface/card inconsistentes | Páginas novas seguem padrão consistente; legadas têm variações menores, sem risco de identidade |
| 22 | 🟢 | Segmentação de público diverge entre BMC e Lean Canvas | Ambos atualizados para o modelo B2B+B2C confirmado |
| 23 | 🟢 | Meta de R$3.600/mês sem contexto no cabeçalho | Cabeçalho esclarece: meta S1 é receita líquida total, ~R$1.200/sócio |

---

## 🟡 Itens abertos — Médias

### #9 — Sistema de ícones inconsistente — PARCIALMENTE RESOLVIDO
**Resolução adotada:** **Material Symbols Outlined** (Google) é o padrão — já em uso em todas as páginas principais.
**Ação restante:** atualizar `docs/05-marca/brandbook.md` para remover a referência ao Lucide e validar Material Symbols como padrão oficial.

---

### #15 — Tagline no site difere da tagline oficial nos documentos
**Arquivos:** `docs/05-marca/naming-e-tagline.md`, `index.html`

- `naming-e-tagline.md`: **"Seu estudo, bem resolvido"**
- `index.html` hero h1: **"Estudo Bem Resolvido para Educadores"**

A variação adiciona "para Educadores" (restringe público implícito) e perde o "Seu" (perde pertencimento).

**Ação necessária:** usar a versão oficial do documento estratégico no h1 do hero.

---

### #16 — Copy do hero do `index.html` genérica e fora do tom de voz
**Arquivo:** `index.html` linha ~114, `docs/05-marca/tom-de-voz.md`

O subtítulo atual — *"Transforme conteúdos brutos em experiências de aprendizagem estruturadas..."* — é adequado mas pode ser mais direto. O Tom de Voz pede linguagem concreta, sem abstrações.

**Ação necessária:** revisar hero copy seguindo `docs/05-marca/tom-de-voz.md`. Prioridade baixa — não bloqueia MVP.

---

## 🟢 Itens abertos — Baixas

### #17 — Logo/Wordmark não finalizado, sem favicon
**Arquivo:** `docs/05-marca/brandbook.md`

Todas as páginas usam wordmark tipográfico puro (texto "MiStudies"). Nenhuma tem `<link rel="favicon">`.

**Ação necessária:** criar favicon (pode ser simples: "M" com fundo azul `#0032b5`). Adicionar em todas as páginas.

---

### #19 — Grid com max-width diferente do Brandbook
- `docs/05-marca/brandbook.md` define: **1200px**
- Tailwind `max-w-7xl` = **1280px**

Diferença de 80px. Mais simples resolver atualizando o Brandbook para aceitar 1280px.

---

### #20 — Componentes de botão sem classe reutilizável
Todas as páginas usam `.bg-signature-gradient` inline mas com padding/radius diferentes. Não há `.btn-primary` em `assets/styles/`. Relevante quando houver mais páginas.

---

## Status geral — Pós-implementação MVP

| Severidade | Total | Resolvidos | Em aberto |
|---|---|---|---|
| 🔴 Crítica | 4 | 4 ✅ | 0 |
| 🟠 Alta | 4 | 4 ✅ | 0 |
| 🟡 Média | 8 | 5 ✅ | 3 (#9 parcial, #15, #16) |
| 🟢 Baixa | 8 | 5 ✅ | 3 (#17, #19, #20) |
| **Total** | **24** | **18 ✅** | **6** |

### Itens ainda abertos (priorizados)
1. **#15** — Alinhar tagline do hero com `docs/05-marca/naming-e-tagline.md` *(copy)*
2. **#17** — Criar favicon e adicionar em todas as páginas *(código, baixa complexidade)*
3. **#9** — Atualizar Brandbook para validar Material Symbols como padrão *(doc interno)*
4. **#16** — Revisar hero copy seguindo Tom de Voz *(copy)*
5. **#19** — Padronizar max-width (Brandbook vs código) *(doc ou código)*
6. **#20** — Criar classe `.btn-primary` reutilizável *(CSS, futuro)*

---

*Última atualização: Julho 2026 · Detalhe completo dos 18 itens resolvidos permanece no histórico do Git deste arquivo.*
