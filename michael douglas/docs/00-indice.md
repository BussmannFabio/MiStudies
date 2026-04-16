# MiStudies — Índice de Documentação

> Mapa oficial dos documentos do projeto. Use este arquivo para encontrar a fonte certa antes de alterar oferta, preço, pitch, contrato, operação, marca ou tecnologia.
>
> **Última revisão:** Abril 2026 · **Fase:** MVP → Tração

---

## Como a Documentação Está Organizada

Os arquivos não usam numeração. A ordem fica nas pastas, para manter leitura simples e navegação previsível.

| Pasta | Função | Quando usar |
|---|---|---|
| `01-fundacao/` | Tese, visão, canvas, personas e proposta de valor | Para entender por que o MiStudies existe e para quem ele serve |
| `02-oferta-e-financeiro/` | Produto vendido, preços, rentabilidade e roadmap | Para decidir o que vender, quanto cobrar e o que construir |
| `03-operacao/` | Entrega, produção, qualidade e publicação | Para executar o serviço depois que o professor compra |
| `04-comercial/` | ICP, pitch, templates e concorrentes | Para prospectar, vender e posicionar |
| `05-marca/` | Nome, voz, identidade visual e social media | Para escrever, desenhar ou revisar comunicação |
| `06-legal/` | Contrato, termos e privacidade | Para formalizar relações com professores e usuários |
| `07-tecnologia/` | Arquitetura, migração Angular e auditorias técnicas | Para orientar desenvolvimento e decisões técnicas |
| `08-gestao/` | Backlog, acompanhamento e histórico de tracking | Para priorizar execução e acompanhar pendências |
| `90-prompts/` | Prompts usados para gerar documentos pendentes | Para criar ou revisar documentação com IA |
| `99-arquivo/` | Documentos históricos substituídos | Para consultar contexto antigo sem usar como fonte atual |
| `../playbooks/skills/` | Skills e playbooks operacionais | Para padronizar fluxos de IA e produção |

---

## Fontes de Verdade

| Tema | Documento oficial |
|---|---|
| Visão, missão, limites e princípios | [product-brief.md](01-fundacao/product-brief.md) |
| Modelo de negócio resumido | [business-model-canvas.md](01-fundacao/business-model-canvas.md) |
| Hipóteses e validação do MVP | [lean-canvas.md](01-fundacao/lean-canvas.md) |
| Produto vendido, escopo, preços e regras comerciais | [catalogo-produtos-e-precos.md](02-oferta-e-financeiro/catalogo-produtos-e-precos.md) |
| Custo de IA/API por aula | [calculo-custos-ia-api.md](02-oferta-e-financeiro/calculo-custos-ia-api.md) |
| Revisão de preços, pacotes e lógica comercial | [precificacao-recomendada.md](02-oferta-e-financeiro/precificacao-recomendada.md) |
| Custos, metas, capacidade produtiva e projeções | [plano-de-rentabilidade.md](02-oferta-e-financeiro/plano-de-rentabilidade.md) |
| Operação de entrega após venda | [pipeline-manual-de-entrega.md](03-operacao/pipeline-manual-de-entrega.md) |
| Padrão editorial e qualidade das aulas | [guia-de-producao-de-conteudo.md](03-operacao/guia-de-producao-de-conteudo.md) |
| Nome, tagline e assinatura verbal | [naming-e-tagline.md](05-marca/naming-e-tagline.md) |
| Escrita e tom de voz | [tom-de-voz.md](05-marca/tom-de-voz.md) |
| Identidade visual | [brandbook.md](05-marca/brandbook.md) |
| Arquitetura técnica, stack e decisões de produto | [arquitetura-produto.md](07-tecnologia/arquitetura-produto.md) |
| Migração do frontend HTML para Angular | [migracao-angular.md](07-tecnologia/migracao-angular.md) |
| Backlog e prioridades de execução | [backlog-geral.md](08-gestao/backlog-geral.md) |
| Plano de rotas, models e API do backend | [BeckEnd/documentacao/implementation_plan.md](../../BeckEnd/documentacao/implementation_plan.md) |
| Próximos documentos a gerar | [prompts-documentos-pendentes.md](90-prompts/prompts-documentos-pendentes.md) |

**Regra de prioridade:** se houver conflito entre documentos, preço, escopo, tier, cobrança e regra comercial seguem o [Catálogo de Produtos e Preços](02-oferta-e-financeiro/catalogo-produtos-e-precos.md). Custos, metas, capacidade produtiva e projeções seguem o [Plano de Rentabilidade](02-oferta-e-financeiro/plano-de-rentabilidade.md).

---

## Documentos Atuais

### Fundação

| Documento | Status | Observação |
|---|---|---|
| [product-brief.md](01-fundacao/product-brief.md) | Feito | Visão, missão, limites e princípios |
| [business-model-canvas.md](01-fundacao/business-model-canvas.md) | Feito | Modelo de negócio em blocos |
| [lean-canvas.md](01-fundacao/lean-canvas.md) | Feito | Problema, solução, métricas e hipóteses |
| [proposta-de-valor.md](01-fundacao/proposta-de-valor.md) | Pendente | Value Proposition Canvas para professor e aluno |

### Oferta e Financeiro

| Documento | Status | Observação |
|---|---|---|
| [catalogo-produtos-e-precos.md](02-oferta-e-financeiro/catalogo-produtos-e-precos.md) | Feito | Fonte comercial principal |
| [calculo-custos-ia-api.md](02-oferta-e-financeiro/calculo-custos-ia-api.md) | Feito | Fórmula e cenários para estimar custo de IA/API por aula |
| [precificacao-recomendada.md](02-oferta-e-financeiro/precificacao-recomendada.md) | Em revisão | Proposta para corrigir preços, pacotes e oferta mínima |
| [plano-de-rentabilidade.md](02-oferta-e-financeiro/plano-de-rentabilidade.md) | Feito | Fonte financeira principal |
| [roadmap-de-produto.md](02-oferta-e-financeiro/roadmap-de-produto.md) | Pendente | Evolução do produto em fases |

### Operação

| Documento | Status | Observação |
|---|---|---|
| [pipeline-manual-de-entrega.md](03-operacao/pipeline-manual-de-entrega.md) | Pendente | Bloqueante antes de assinar pilotos |
| [guia-de-producao-de-conteudo.md](03-operacao/guia-de-producao-de-conteudo.md) | Pendente | Necessário antes de escalar produção |

### Comercial

| Documento | Status | Observação |
|---|---|---|
| [icp-professor-ideal.md](04-comercial/icp-professor-ideal.md) | Pendente | Próximo documento recomendado |
| [pitch-comercial.md](04-comercial/pitch-comercial.md) | Pendente | Depende do ICP e do catálogo |
| [templates-de-comunicacao.md](04-comercial/templates-de-comunicacao.md) | Pendente | Depende do pitch |
| [analise-de-concorrentes.md](04-comercial/analise-de-concorrentes.md) | Pendente | Posicionamento e alternativas do mercado |

### Marca

| Documento | Status | Observação |
|---|---|---|
| [naming-e-tagline.md](05-marca/naming-e-tagline.md) | Feito | Nome, tagline e variações |
| [tom-de-voz.md](05-marca/tom-de-voz.md) | Feito | Voz por canal, vocabulário e anti-exemplos |
| [brandbook.md](05-marca/brandbook.md) | Feito | Paleta, tipografia, grid e aplicações |
| [guia-de-social-media.md](05-marca/guia-de-social-media.md) | Pendente | Como a marca se comporta em Instagram e LinkedIn |

### Legal

| Documento | Status | Observação |
|---|---|---|
| [contrato-professores-piloto.md](06-legal/contrato-professores-piloto.md) | Pendente | Depende do catálogo e do pipeline |
| [termos-de-uso.md](06-legal/termos-de-uso.md) | Pendente | Necessário para cadastro e publicação |
| [politica-de-privacidade.md](06-legal/politica-de-privacidade.md) | Pendente | Necessário para cadastro, analytics e LGPD |

### Tecnologia

| Documento | Status | Observação |
|---|---|---|
| [arquitetura-produto.md](07-tecnologia/arquitetura-produto.md) | Feito | Arquitetura técnica, frontend e backend |
| [migracao-angular.md](07-tecnologia/migracao-angular.md) | Feito | Etapas da migração HTML → Angular |
| [auditorias/analise-arquitetura.md](07-tecnologia/auditorias/analise-arquitetura.md) | Feito | Auditoria de arquitetura |
| [auditorias/frontend-inconsistencias.md](07-tecnologia/auditorias/frontend-inconsistencias.md) | Feito | Inconsistências de frontend |
| [auditorias/inconsistencias.md](07-tecnologia/auditorias/inconsistencias.md) | Feito | Relatório geral de inconsistências |

### Gestão e Apoio

| Documento | Status | Observação |
|---|---|---|
| [backlog-geral.md](08-gestao/backlog-geral.md) | Feito | To-dos, decisões dos sócios e próximos passos |
| [README.md](08-gestao/README.md) | Feito | Guia da pasta de gestão |
| [prompts-documentos-pendentes.md](90-prompts/prompts-documentos-pendentes.md) | Em revisão | Prompts e ordem sugerida de criação |
| [modelo-freemium.md](99-arquivo/modelo-freemium.md) | Histórico | Substituído pelo catálogo e pelo plano financeiro |

---

## Ordem Recomendada Agora

1. Criar [icp-professor-ideal.md](04-comercial/icp-professor-ideal.md)
2. Criar [pitch-comercial.md](04-comercial/pitch-comercial.md)
3. Criar [templates-de-comunicacao.md](04-comercial/templates-de-comunicacao.md)
4. Criar [pipeline-manual-de-entrega.md](03-operacao/pipeline-manual-de-entrega.md)
5. Criar [contrato-professores-piloto.md](06-legal/contrato-professores-piloto.md)
6. Criar [guia-de-producao-de-conteudo.md](03-operacao/guia-de-producao-de-conteudo.md)
7. Criar [proposta-de-valor.md](01-fundacao/proposta-de-valor.md)
8. Criar [analise-de-concorrentes.md](04-comercial/analise-de-concorrentes.md)
9. Criar [guia-de-social-media.md](05-marca/guia-de-social-media.md)
10. Criar [roadmap-de-produto.md](02-oferta-e-financeiro/roadmap-de-produto.md)

---

## Regras de Manutenção

- Se mudar preço, escopo, pacote ou regra comercial: atualizar primeiro o **Catálogo de Produtos e Preços**.
- Se mudar meta, margem, custo, capacidade ou projeção: atualizar primeiro o **Plano de Rentabilidade**.
- Se mudar entrega, SLA, revisão ou publicação: atualizar primeiro o **Pipeline Manual de Entrega**.
- Se mudar padrão editorial ou escopo por tier: atualizar primeiro o **Guia de Produção de Conteúdo**.
- Se mudar mensagem, promessa ou CTA: conferir **Tom de Voz**, **Naming e Tagline**, **Catálogo** e **ICP**.
- Se criar documento novo: salvar na pasta temática, atualizar este índice e ajustar o backlog em [backlog-geral.md](08-gestao/backlog-geral.md).
- Se mudar stack ou arquitetura técnica: atualizar [arquitetura-produto.md](07-tecnologia/arquitetura-produto.md) e o documento técnico correspondente.
- Documentos em `99-arquivo/` não devem ser usados como fonte de decisão atual.
