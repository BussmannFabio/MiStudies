# Relatório de To-Dos — MiStudies
> Gerado em: Abril 2026 · **Última revisão: Abril 2026 (pós-implementação MVP)**

---

## Legenda
- `[X]` Concluído
- `[ ]` Pendente
- `[!]` Bloqueado / decisão necessária
- `P1` Alta prioridade · `P2` Média · `P3` Baixa / futuro

---

## FASE 1 — Validação (Meses 1–2)
> Meta: R$1.000/mês · 3–4 professores piloto

### Produto & Conteúdo
| # | Item | Status | Prioridade | Responsável |
|---|---|---|---|---|
| 1.1 | Base de documentos estratégicos (Brandbook, Canvas, Tom de Voz, etc.) | `[X]` Feito | — | Sócio 2 |
| 1.2 | 3 aulas demo por tier (Essencial / Pro / Full Studio) | `[X]` Feito | — | Sócio 1 |
| 1.3 | Criar a **Skill de Análise B2B** — prompt system para diagnóstico de PDF de professor | `[ ]` | `P1` | Sócio 1/2 |
| 1.4 | Definir pipeline manual: receber PDF → analisar → produzir → revisar → publicar | `[ ]` | `P1` | Todos |
| 1.5 | Criar contrato simples / termos de serviço para professores piloto | `[ ]` | `P1` | Sócio 3 |

### Hub & Tecnologia
| # | Item | Status | Prioridade | Responsável |
|---|---|---|---|---|
| 1.6 | ~~Finalizar `hub.html`~~ | `[X]` Descontinuado | — | — |
| 1.7 | Finalizar `dashboard.html` — área do professor (upload, aulas, analytics) | `[X]` Feito (MVP) | — | Sócio 1 |
| 1.8 | Criar página de comparação dos 3 tiers (landing page de vendas) | `[X]` Feito — `pages/planos-precos.html` | — | Sócio 1 |
| 1.9 | Verificar responsividade de todas as páginas existentes | `[ ]` | `P2` | Sócio 1 |
| 1.10 | Configurar domínio + hospedagem estática (Vercel / Netlify / GitHub Pages) | `[ ]` | `P2` | Sócio 1 |
| 1.11 | Adicionar Google Analytics (GA4) para rastrear visitas | `[ ]` | `P2` | Sócio 1 |

### Negócio & Growth
| # | Item | Status | Prioridade | Responsável |
|---|---|---|---|---|
| 1.12 | Escolher 2–3 professores piloto (com interesse demonstrado) | `[ ]` | `P1` | Sócio 3 |
| 1.13 | Oferecer 1–2 aulas grátis como portfólio / prova de valor para pilotos | `[ ]` | `P1` | Todos |
| 1.14 | Coletar feedback dos pilotos e ajustar tiers/preços se necessário | `[ ]` | `P1` | Todos |
| 1.15 | Definir canal de entrada dos professores (formulário? WhatsApp? e-mail?) | `[ ]` | `P1` | Sócio 3 |
| 1.16 | Lançar cobrança para novos professores após validação com pilotos | `[ ]` | `P2` | Sócio 3 |

---

## FASE 2 — Tração (Meses 3–4)
> Meta: R$3.000/mês · 6–8 professores · primeiros alunos pagantes

### Produto & Conteúdo
| # | Item | Status | Prioridade | Responsável |
|---|---|---|---|---|
| 2.1 | Publicar portfólio com 8–10 aulas no acervo (diversas matérias) | `[ ]` | `P1` | Sócio 1/2 |
| 2.2 | Otimizar Skill de Análise com aprendizados dos primeiros projetos | `[ ]` | `P1` | Sócio 1 |
| 2.3 | Criar templates reutilizáveis por tipo de matéria (Exatas / Humanas / Gestão) | `[ ]` | `P2` | Sócio 1/2 |
| 2.4 | SEO: indexar aulas abertas como conteúdo educacional no Google | `[ ]` | `P2` | Sócio 3 |

### Hub & Tecnologia
| # | Item | Status | Prioridade | Responsável |
|---|---|---|---|---|
| 2.5 | Implementar gateway de pagamento (Stripe ou Mercado Pago) para professores | `[ ]` | `P1` | Sócio 1 |
| 2.6 | Ativar assinatura de alunos (paywall) — aguardar volume de conteúdo | `[ ]` | `P1` | Sócio 1/3 |
| 2.7 | Criar sistema de upload de PDF (formulário para professores enviarem material) | `[ ]` | `P2` | Sócio 1 |
| 2.8 | Página pública de cada professor (`professor/[slug].html`) | `[X]` Feito — template em `pages/professor/gabriel.html` | — | Sócio 1 |

### Negócio & Growth
| # | Item | Status | Prioridade | Responsável |
|---|---|---|---|---|
| 2.9 | Prospecção ativa: LinkedIn, grupos acadêmicos, eventos universitários | `[ ]` | `P1` | Sócio 3 |
| 2.10 | Landing page de vendas para professores (tiers, preços, exemplos) | `[X]` Feito — `pages/planos-precos.html` | — | Sócio 1/3 |
| 2.11 | Criar proposta comercial / pitch deck para apresentar a professores | `[ ]` | `P2` | Sócio 3 |

---

## FASE 3 — Escala (Meses 5–6)
> Meta: R$3.600–4.500/mês · 10–15 professores · 40+ alunos

| # | Item | Status | Prioridade |
|---|---|---|---|
| 3.1 | Semi-automatizar pipeline com IA (reduzir tempo/aula em 30%) | `[ ]` | `P2` |
| 3.2 | Lançar pacotes semestrais para professores (20 aulas com 30% off) | `[ ]` | `P2` |
| 3.3 | Programa de indicação: professor indica professor (cashback/desconto) | `[ ]` | `P2` |
| 3.4 | Expandir para novas áreas além de Adm/Eng. Produção | `[ ]` | `P3` |
| 3.5 | Primeiras abordagens institucionais (coordenadores de cursos) | `[ ]` | `P2` |
| 3.6 | Dashboard com analytics de visualização por aula | `[ ]` | `P2` |
| 3.7 | Sistema de NPS / coleta de feedback dos professores | `[ ]` | `P3` |

---

## FASE 4 — Automação (Meses 7–12)
> Meta: R$6.000–10.000/mês

| # | Item | Status | Prioridade |
|---|---|---|---|
| 4.1 | Automação da Skill: professor faz upload → sistema gera preview automático | `[ ]` | `P3` |
| 4.2 | Self-service parcial: professor configura tier e recebe orçamento automático | `[ ]` | `P3` |
| 4.3 | API própria para geração de aulas | `[ ]` | `P3` |
| 4.4 | Marketplace: professores vendem/compartilham aulas entre si | `[ ]` | `P3` |
| 4.5 | Licenciamento institucional (plano para faculdades inteiras) | `[ ]` | `P3` |
| 4.6 | Contratação do primeiro freelancer para produção de conteúdo | `[ ]` | `P3` |

---

## DECISÕES DOS SÓCIOS — RESPONDIDAS EM ABRIL 2026

| # | Decisão | Resposta |
|---|---|---|
| D1 | **Preços por aula** | ✅ R$40 Essencial / R$75 Pro / R$100 Full Studio |
| D2 | **Onboarding gratuito para pilotos?** | ✅ Não — cobrança desde o início |
| D3 | **Hub (acervo) gratuito?** | ✅ Sim — visualização gratuita permanentemente |
| D4 | **Divisão de lucros** | ✅ Igualitária — 33/33/33 |
| D5 | **Formalizar sociedade?** | ⏳ Ainda não decidido |
| D6 | **Nome do tier mais caro** | ✅ "Full Studio" (era "Premium") |
| D7 | **Assinatura de alunos** | ✅ Possível, mas benefícios extras precisam ser definidos antes de ativar |

### Modelo de Negócio Confirmado

**Professor — 3 etapas de compra:**
1. **Onboarding** — Básico R$200 / Branded R$500 / Institucional R$1.000
2. **Criação de Aulas** — R$40 Essencial / R$75 Pro / R$100 Full Studio por aula
3. **Hub** — Starter R$49/mês / Pro R$99/mês / Institucional R$249/mês

**Estudante:**
- Acervo: visualização **gratuita** para todos
- Assinatura: **R$14,90/mês** ou anual com **20% off** (~R$11,92/mês)

---

## BACKLOG TÉCNICO — REVISADO ABRIL 2026

| # | Arquivo | Problema original | Status atual |
|---|---|---|---|
| T1 | ~~`pages/hub.html`~~ | Sem cards de professores reais | `[X]` **Deletado** — substituído por `acervo.html` + `professor/[slug].html` |
| T2 | `pages/dashboard.html` | Área do professor não funcional | `[X]` **Resolvido** — 3 abas: Visão Geral / Minhas Aulas / Nova Aula |
| T3 | ~~`pages/resumos.html`~~ | Não estava linkado ao sistema de aulas | `[X]` **Deletado** — substituído por `pages/acervo.html` com nova taxonomia |
| T4 | `index.html` | Sem link para landing page de professores | `[X]` **Resolvido** — nav tem link "Planos" → `planos-precos.html` |
| T5 | Geral | Sem meta tags de SEO completas (og:image, og:title) | `[ ]` **Pendente** — `P2` |
| T6 | Geral | Sem `sitemap.xml` e `robots.txt` | `[ ]` **Pendente** — `P2` |
| T7 | `pages/demo/` | Sem índice de comparação das 3 demos | `[ ]` **Pendente** — criar `pages/demo/index.html` — `P3` |
| T8 | `pages/login.html` | Não existia | `[X]` **Criado** — formulário e-mail + senha com redirect |
| T9 | `pages/cadastro.html` | Não existia | `[X]` **Criado** — fluxo 3 etapas: tipo → dados → confirmação |
| T10 | Geral | URLs de conteúdo ad hoc (`escopo-PI.html` etc.) | `[X]` **Resolvido** — movidos para `pages/acervo/[slug].html` |
| T11 | Geral | Sem favicon em nenhuma página | `[ ]` **Pendente** — `P2` |

---

## RESUMO EXECUTIVO — ESTADO ATUAL (Abril 2026)

```
FEITO ATÉ AGORA:
  [X] Base estratégica (docs/ com Brandbook, Canvas, Plano de Rentabilidade, etc.)
  [X] index.html — landing de marketing para professores
  [X] pages/acervo.html — acervo com filtros (área, matéria, formato, tier, prof, tags)
  [X] pages/planos-precos.html — pricing completo com builder interativo
  [X] pages/dashboard.html — 3 abas (Visão Geral / Minhas Aulas / Nova Aula)
  [X] pages/login.html — formulário de acesso
  [X] pages/cadastro.html — cadastro em 3 etapas com tipo professor/aluno
  [X] pages/professor/gabriel.html — template de perfil público
  [X] pages/acervo/[slug].html — 3 conteúdos com URLs canônicas
  [X] pages/demo/ — 3 aulas demo por tier (Essencial / Pro / Full Studio)
  [X] pages/plano-rentabilidade.html — simulador de receita
  [X] Decisões D1–D4, D6–D7 respondidas pelos sócios
  [X] Marca padronizada — "MiStudies" em todas as páginas, "gaaabriel" removido

PRÓXIMAS 2 SEMANAS (P1):
  [ ] 1.3 — Criar Skill de Análise B2B (prompt system para PDF de professor)
  [ ] 1.4 — Definir pipeline manual completo (PDF → análise → produção → entrega)
  [ ] 1.5 — Criar contrato simples para professores piloto
  [ ] 1.12 — Escolher e contatar 2–3 professores piloto
  [ ] 1.15 — Definir canal de entrada dos professores (WhatsApp, e-mail ou formulário)
  [ ] D5 — Decidir formalização societária
  [ ] D7 — Definir benefícios exatos da assinatura de aluno

PRÓXIMOS 30 DIAS (P2):
  [ ] 1.9 — Verificar responsividade em mobile
  [ ] 1.10 — Configurar domínio + hospedagem em produção
  [ ] 1.11 — Google Analytics (GA4)
  [ ] T5 — Meta tags SEO em todas as páginas
  [ ] T6 — sitemap.xml e robots.txt
  [ ] T11 — Favicon em todas as páginas
  [ ] 2.5 — Gateway de pagamento (Stripe / Mercado Pago)

META DO MÊS 1 (preços confirmados):
  → 2 professores × Onboarding Básico R$200 = R$400
  → 4 aulas Essencial × R$40 = R$160
  → Receita bruta estimada: ~R$560
  → Para atingir R$1.000: incluir 1 professor Branded (R$500) ou mix de tiers Pro/Full Studio
```

---

*Documento mantido por Sócio 1 (Produto & Tech) · Atualizar ao concluir cada item*
*Última atualização: Abril 2026*
