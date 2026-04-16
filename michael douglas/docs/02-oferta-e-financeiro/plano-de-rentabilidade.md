# Plano de Rentabilidade — MiStudies

> Projeção financeira, custos, capacidade produtiva, metas e riscos do modelo comercial.
>
> **3 sócios · 30h/semanais · Meta S1: R$3.600/mês de receita líquida total (~R$1.200/sócio) · Foco: escala + assinatura + automação**
>
> **Data:** Abril 2026 · **Fase:** MVP → Tração
>
> Fonte comercial: [catalogo-produtos-e-precos.md](catalogo-produtos-e-precos.md). Complementa o [BMC](../01-fundacao/business-model-canvas.md), [Lean Canvas](../01-fundacao/lean-canvas.md) e [Product Brief](../01-fundacao/product-brief.md).

---

## 1. Custos Operacionais Mensais

### Fase MVP (meses 1-3)

| Categoria | Custo mensal | Detalhes |
|---|---|---|
| IA (API + planos) | R$ 100-150 | Claude Pro ou ChatGPT Plus (1 plano compartilhado) + API para automações pontuais |
| Hospedagem | R$ 0-30 | Vercel free tier / GitHub Pages / Netlify para o hub |
| Domínio | R$ 3 | mistudies.com.br rateado |
| Ferramentas | R$ 0 | Figma free, GA4 free, GitHub free |
| **Total MVP** | **R$ 103-183/mês** | Dentro do orçamento de R$100-200 |

### Regra para custo de IA

O custo mensal de IA nas projeções já inclui o uso estimado de planos e APIs. Não somar novamente o custo unitário de IA por aula ao calcular a receita líquida mensal.

Referência para o MVP:

| Volume mensal | Regra |
|---|---|
| Até 20 aulas/mês em mix equilibrado | Orçamento de IA de R$150/mês deve cobrir uso normal |
| Acima de 20 aulas/mês | Adicionar buffer variável por aula: Essencial ~R$3, Pro ~R$6, Full Studio ~R$12 |
| Automação pesada com API | Recalcular custo real por token e atualizar o simulador |

### Fase Escala (meses 4-6)

| Categoria               | Custo mensal       | Detalhes                                     |
| ----------------------- | ------------------ | -------------------------------------------- |
| IA (APIs em produção)   | R$ 150-300         | Múltiplas APIs + tokens de geração em escala |
| Hospedagem profissional | R$ 50-100          | VPS ou Vercel Pro para suportar mais tráfego |
| Domínio + e-mail        | R$ 15              | Domínio + email profissional                 |
| Gateway de pagamento    | ~5% da receita     | Stripe / Mercado Pago                        |
| Ferramentas             | R$ 50-100          | Analytics avançado, CRM básico, automações   |
| **Total Escala**        | **R$ 265-515/mês** | Coberto pela receita projetada               |

### Fase Crescimento (meses 7-12)

| Categoria | Custo mensal | Detalhes |
|---|---|---|
| IA + automações | R$ 300-500 | Pipeline automatizado de geração |
| Infraestrutura | R$ 100-200 | Servidor dedicado, CDN, backups |
| Marketing | R$ 200-500 | Tráfego pago para aquisição de professores |
| Ferramentas SaaS | R$ 100-200 | CRM, email marketing, analytics |
| **Total Crescimento** | **R$ 700-1.400/mês** | ~20-25% da receita projetada |

---

## 2. Projeções Financeiras

> **Nota de cálculo (atualizado Abril 2026):** projeções refletem o modelo canônico de 4 produtos: Setup + Aulas + Hub + Plano Estudante. O Hub passa a entrar a partir da primeira publicação, porque sem Hub a aula não fica pública. Usar o [Simulador de Rentabilidade](../../../HTML%20Zite/pages/plano-rentabilidade.html) para cenários detalhados.

### Premissas de projeção

| Premissa | Conservador | Otimista |
|---|---|---|
| Setup | 100% Básico | Mix Básico + Branded, com 1 Institucional no mês 6 |
| Aulas | Maioria Essencial, algumas Pro | Mix Pro + Full Studio crescente |
| Hub | Todos começam no Starter | Starter + Pro, com Institucional a partir do mês 5 |
| Alunos pagantes | Só entram no mês 4 | Entram no mês 2, crescendo com o acervo |
| Custos | Crescem de R$150 para R$400/mês | Crescem de R$150 para R$500/mês |

### Cenário Conservador

| Mês | Novos Prof. | Aulas | Hubs ativos | Alunos | Bruto est. | Custos | **Receita Líquida** |
|---|---|---|---|---|---|---|---|
| 1 | 2 | 4 Ess | 2 Starter | 0 | R$ 658¹ | -R$ 150 | **R$ 508** |
| 2 | 1 | 4 Ess + 2 Pro | 3 Starter | 0 | R$ 657 | -R$ 170 | **R$ 487** |
| 3 | 1 | 5 Ess + 3 Pro | 4 Starter | 0 | R$ 821 | -R$ 200 | **R$ 621** |
| 4 | 1 | 6 Ess + 4 Pro | 5 Starter | 5 | R$ 1.060 | -R$ 280 | **R$ 780** |
| 5 | 1 | 7 Ess + 5 Pro | 6 Starter | 10 | R$ 1.298 | -R$ 350 | **R$ 948** |
| 6 | 1 | 8 Ess + 6 Pro | 7 Starter | 15 | R$ 1.537 | -R$ 400 | **R$ 1.137** |
| **S1** | | | | | | | **~R$ 4.481** |

> ¹ Mês 1: 2 Setups Básicos (R$400) + 4 Aulas Essenciais (R$160) + 2 Hubs Starter (R$98) = R$658.

### Cenário Otimista

| Mês | Novos Prof. | Aulas | Hubs ativos | Alunos | Bruto est. | Custos | **Receita Líquida** |
|---|---|---|---|---|---|---|---|
| 1 | 3 | 2 Ess + 3 Pro + 1 FS | 2 Starter + 1 Pro | 0 | R$ 1.502 | -R$ 150 | **R$ 1.352** |
| 2 | 2 | 3 Ess + 5 Pro + 2 FS | 3 Starter + 2 Pro | 5 | R$ 1.815 | -R$ 200 | **R$ 1.615** |
| 3 | 2 | 3 Ess + 6 Pro + 3 FS | 4 Starter + 3 Pro | 15 | R$ 2.287 | -R$ 250 | **R$ 2.037** |
| 4 | 3 | 4 Ess + 8 Pro + 4 FS | 5 Starter + 5 Pro | 30 | R$ 3.547 | -R$ 350 | **R$ 3.197** |
| 5 | 3 | 4 Ess + 9 Pro + 5 FS | 5 Starter + 7 Pro + 1 Inst | 50 | R$ 4.467 | -R$ 400 | **R$ 4.067** |
| 6 | 3 | 4 Ess + 10 Pro + 6 FS | 5 Starter + 9 Pro + 2 Inst | 80 | R$ 6.036 | -R$ 500 | **R$ 5.536** |
| **S1** | | | | | | | **~R$ 17.804** |

> **Meta R$3.600/mês:** passa a ser atingível no mês 5 do cenário otimista. O caminho mais saudável não é vender muitas aulas Essenciais; é combinar Setup Branded, mix Pro/Full Studio e Hub recorrente.

### Break-Even

| Fase | Custo fixo/mês | Para cobrir custos | Para R$3.600 líquidos |
|---|---|---|---|
| MVP | R$ 150 | 4 aulas Essenciais ou 2 aulas Pro | 2 Setups Branded + 16 aulas Pro/FS + 8 hubs + 30 alunos |
| Escala | R$ 400 | 6 aulas Essenciais ou 4 aulas Pro | 15 aulas Pro/FS + 12 hubs + 50 alunos + 2 Setups/mês |
| Crescimento | R$ 1.000 | 13 aulas Essenciais ou 10 aulas Pro | 20 aulas Pro/FS + 15 hubs + 80 alunos + 2-3 Setups/mês |

---

## 3. Tempo por Aula — Detalhamento para Escala

### Distribuição de horas por atividade

| Atividade | Essencial | Pro | Full Studio |
|---|---|---|---|
| Análise do PDF (Skill) | 20 min | 30 min | 45 min |
| Pesquisa complementar | 15 min | 45 min | 90 min |
| Reestruturação didática | 30 min | 60 min | 90 min |
| Geração HTML (IA + ajustes) | 45 min | 90 min | 150 min |
| Design/customização | 15 min | 30 min | 60 min |
| QA e revisão | 15 min | 30 min | 45 min |
| **Total** | **~2,5h** | **~4,7h** | **~8h** |

### Capacidade de produção mensal (120h/mês total entre 3 sócios)

| Cenário | Mix de aulas | Aulas/mês | Horas gastas | Horas p/ hub/marketing |
|---|---|---|---|---|
| Conservador | 100% Essencial | 35 | 87h | 33h |
| Equilibrado | 40% Ess + 40% Pro + 20% Full Studio | 20 | 90h | 30h |
| Full Studio-heavy | 30% Ess + 30% Pro + 40% Full Studio | 14 | 76h | 44h |

---

## 4. Divisão de Responsabilidades

| Papel | Foco | Horas/sem |
|---|---|---|
| **Sócio 1 — Produto & Tech** | Desenvolvimento do hub, HTML/CSS, automações, pipeline técnico, Skill de Análise | 10h |
| **Sócio 2 — Conteúdo & Design** | Transformação de PDFs, design editorial, QA, criação de templates, brandbook aplicado | 10h |
| **Sócio 3 — Negócios & Growth** | Prospecção de professores, negociação, marketing, redes sociais, financeiro, parcerias | 10h |

---

## 5. Roadmap de Execução

### Fase 1 — Validação (Meses 1-2)
*Meta: R$1.000/mês · 3-4 professores*

- Finalizar o site/hub funcional
- Criar a Skill de Análise (prompt system para diagnóstico de PDF)
- Definir pipeline manual: receber PDF → analisar → gerar HTML → entregar
- Prospectar os professores já interessados como pilotos pagos de baixo risco
- Criar 3 aulas de demonstração com tiers diferentes
- Definir contratos simples / termos de serviço
- Receber feedback e ajustar tiers/preços
- Vender a primeira oferta mínima publicada: Setup + Aula + Hub

### Fase 2 — Tração (Meses 3-4)
*Meta: R$3.000/mês · 6-8 professores · primeiros alunos pagantes*

- Publicar portfólio com 8-10 aulas no hub
- Ativar assinatura de alunos apenas se os benefícios pagos estiverem implementados
- Prospecção ativa: abordar professores via LinkedIn, redes acadêmicas
- Criar página de vendas para professores com tiers e preços
- Implementar gateway de pagamento (Stripe / Mercado Pago)
- Otimizar Skill de Análise com learnings dos primeiros projetos
- SEO: indexar aulas abertas como conteúdo educacional

### Fase 3 — Escala (Meses 5-6)
*Meta: R$3.600-4.500/mês · 10-15 professores · 40+ alunos*

- Semi-automatizar pipeline com IA (reduzir tempo/aula em 30%)
- Lançar pacotes semestrais para professores
- Criar programa de indicação (professor indica professor)
- Templates reutilizáveis por tipo de matéria
- Expansão para novas áreas além de Adm/Eng. Produção
- Primeiras abordagens institucionais (faculdades)
- Dashboard do professor (analytics de visualização das suas aulas)

### Fase 4 — Automação e Crescimento (Meses 7-12)
*Meta: R$6.000-10.000/mês*

- Automação da Skill: professor faz upload → sistema gera preview automático → equipe revisa
- Self-service parcial (professor configura tier e recebe orçamento automático)
- API própria para geração de aulas
- Marketplace: professores podem vender/compartilhar aulas entre si
- Licenciamento institucional (plano para faculdades inteiras)
- Contratação do primeiro freelancer para produção

---

## 6. Métricas de Acompanhamento

| Métrica | Meta Mês 1 | Meta Mês 3 | Meta Mês 6 |
|---|---|---|---|
| Professores ativos | 2 | 5 | 12 |
| Aulas entregues/mês | 4 | 10 | 20 |
| Hubs pagantes | 2 | 5 | 12 |
| Alunos pagantes | 0 | 10 | 50 |
| Receita bruta | R$ 650+ | R$ 2.000+ | R$ 5.000+ |
| Receita líquida | R$ 500+ | R$ 1.700+ | R$ 4.000+ |
| Ticket médio por professor ativo | R$ 300+ | R$ 400+ | R$ 450+ |
| Tempo médio/aula | 4h | 3,5h | 2,5h |

---

## 7. Riscos e Mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Professores não pagam o preço definido | Alto | Usar diagnóstico gratuito, demos e primeira oferta de R$289 em vez de aula grátis |
| Volume de aulas não escala com 3 pessoas | Alto | Automação agressiva; templates reutilizáveis |
| Alunos não percebem valor na assinatura | Médio | Só ativar cobrança quando downloads, favoritos, kits e progresso existirem |
| Churn alto de professores | Alto | Contrato semestral; resultados mensuráveis (views) |
| Sócios não mantêm 10h/semana | Alto | Acordo formal; reunião semanal de 30min |

---

## 8. Decisões — Status Abril 2026

| # | Decisão | Status | Resposta |
|---|---|---|---|
| D1 | Preços por aula | ✅ | R$ 40 Essencial / R$ 75 Pro / R$ 100 Full Studio |
| D2 | Onboarding grátis para pilotos? | ✅ | Não — cobrança desde o início |
| D3 | Acervo gratuito para alunos? | ✅ | Visualização livre para todos; assinatura dá extras |
| D4 | Divisão de lucros | ✅ | Igualitária — 33/33/33 |
| D5 | Formalização societária | ⏳ | Ainda não decidido — MEI/ME conjunto ou freelancers |
| D6 | Nome do tier mais caro | ✅ | **Full Studio** (era "Premium") |
| D7 | Assinatura de alunos | ✅ | R$ 14,90/mês ou R$143/ano; ativar só com benefícios pagos reais |
| D8 | Oferta mínima publicada | ✅ | Setup Básico + 1 Aula Essencial + Hub Starter = R$ 289 no primeiro mês |
| D9 | Hub para publicação | ✅ | Necessário para manter aulas públicas no acervo |

### Pendências abertas

- **D5:** Formalização societária ainda não decidida
- **Validação de preço:** confirmar se professores aceitam pagar Setup + Aula + Hub desde o primeiro piloto
- **Benefícios do aluno:** implementar favoritos, downloads, kits e progresso antes de cobrar assinatura B2C
- **Política de reativação:** definir valor cobrado após 90 dias de Hub cancelado, se houver
