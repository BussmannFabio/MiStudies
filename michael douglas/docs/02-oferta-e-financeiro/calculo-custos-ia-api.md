# Cálculo de Custos de IA/API por Aula — MiStudies

> Esquema de validação para estimar se o custo de IA/API por Aula MiStudies está realista.
>
> **Status:** Modelo de cálculo · **Data:** Abril 2026

---

## 1. Objetivo

O custo de IA/API não deve ser tratado como chute fixo. Ele depende de cinco variáveis:

- quantidade de tokens de entrada;
- quantidade de tokens de saída;
- modelo usado em cada etapa;
- número de tentativas/retrabalho;
- uso de ferramentas extras, como busca web, geração de imagem, OCR e armazenamento.

Este documento cria uma forma simples de estimar o custo por tier antes de precificar pacotes, planos mensais ou créditos de produção.

---

## 2. Fórmula Base

```text
custo_texto_usd =
  (tokens_entrada / 1.000.000 * preco_input_modelo)
+ (tokens_saida / 1.000.000 * preco_output_modelo)

custo_total_brl =
  (custo_texto_usd + custo_ferramentas_usd) * cambio_usd_brl * fator_retrabalho
```

### Premissas atuais

| Variável | Valor usado | Observação |
|---|---:|---|
| Câmbio de referência | R$ 5,00 / US$ 1 | Usar arredondado para planejamento |
| Fator de retrabalho baixo | 1,15x | Poucas tentativas, prompt estável |
| Fator de retrabalho normal | 1,35x | Algumas rodadas de ajuste e QA |
| Fator de retrabalho alto | 1,60x | Material denso, erro de escopo ou muitas regenerações |
| Buffer recomendado | 25-50% | Aplicar quando o professor envia material ruim ou muito fragmentado |

---

## 3. Preços de Referência

Preços oficiais consultados em abril de 2026.

| Provedor/modelo | Input / 1M tokens | Output / 1M tokens | Melhor uso no MiStudies |
|---|---:|---:|---|
| OpenAI GPT-5.4 nano | US$ 0,20 | US$ 1,25 | Classificação, limpeza, metadados, tarefas simples |
| OpenAI GPT-5.4 mini | US$ 0,75 | US$ 4,50 | Rascunho, estrutura, HTML inicial e produção recorrente |
| OpenAI GPT-5.4 | US$ 2,50 | US$ 15,00 | Revisão crítica, raciocínio, QA e aulas densas |
| Anthropic Claude Haiku 3.5 | US$ 0,80 | US$ 4,00 | Alternativa barata para rascunho e síntese |
| Anthropic Claude Sonnet 4 | US$ 3,00 | US$ 15,00 | Alternativa forte para análise e revisão |
| Google Gemini 2.5 Flash | US$ 0,30 | US$ 2,50 | Produção barata com contexto grande |
| Google Gemini 2.5 Pro | US$ 1,25 | US$ 10,00 | Análise densa e raciocínio |

Ferramentas extras:

| Ferramenta | Custo de referência | Como tratar |
|---|---:|---|
| OpenAI web search | US$ 10 / 1.000 chamadas | ~US$ 0,01 por busca |
| Gemini grounding com Search | US$ 35 / 1.000 prompts após cota gratuita | ~US$ 0,035 por prompt cobrado |
| Imagen 4 Standard | US$ 0,04 por imagem | Usar apenas quando a imagem for parte real da entrega |
| Imagen 4 Ultra | US$ 0,06 por imagem | Reservar para Full Studio |
| OpenAI Batch API | 50% de desconto | Útil para produção assíncrona e volume |
| Anthropic Batch API | 50% de desconto | Útil para produção assíncrona e volume |

---

## 4. Pipeline de Consumo por Aula

### Etapas que consomem IA

| Etapa | O que gera | Risco de custo |
|---|---|---|
| Diagnóstico | resumo do material, lacunas, densidade, escopo | baixo |
| Estrutura didática | seções, hierarquia, exemplos, exercícios | médio |
| Redação/adaptação | texto final da aula | médio-alto |
| Geração HTML | página base com componentes | alto por output |
| QA e revisão | checklist, correções, consistência | médio |
| Metadados | título, descrição, tags, slug | baixo |
| Pesquisa externa | fontes, exemplos, checagem | variável |
| Imagens | ilustrações, diagramas ou assets gerados | variável |

### Orçamento de tokens por tier

| Tier | Entrada estimada | Saída estimada | Comentário |
|---|---:|---:|---|
| Essencial | 60k-120k | 18k-35k | Pouca pesquisa, HTML simples, baixa interatividade |
| Pro | 140k-260k | 45k-90k | Mais reestruturação, exemplos, componentes e QA |
| Full Studio | 280k-500k | 100k-180k | Múltiplas seções, interatividade, revisão forte e possível geração de assets |

Esses números somam várias chamadas. Uma aula com material de 12 páginas não consome só os tokens do PDF uma vez; o conteúdo volta em diagnóstico, estrutura, geração, revisão e ajustes.

---

## 5. Cenários de Custo

### Cenário A — Pipeline otimizado

Uso recomendado para produção em escala:

- modelo barato/mini para diagnóstico, estrutura e metadados;
- modelo médio/forte só para QA final;
- pouca ou nenhuma geração de imagem;
- Batch API quando não houver urgência.

| Tier | Custo estimado IA/API | Quando é realista |
|---|---:|---|
| Essencial | R$ 1-3 | Material limpo, sem pesquisa profunda |
| Pro | R$ 4-8 | Aula padrão com 2-4 fontes e HTML interativo moderado |
| Full Studio | R$ 10-20 | Aula densa, mas sem assets caros nem muitas regenerações |

### Cenário B — Pipeline realista MVP

Uso provável com sócios produzindo manualmente e testando prompts:

- modelo mini/flash para rascunho;
- modelo forte em trechos de análise, revisão e correção;
- 1-2 rodadas de ajuste;
- algumas buscas externas;
- poucas imagens geradas.

| Tier | Custo estimado IA/API | Valor para usar no catálogo |
|---|---:|---:|
| Essencial | R$ 3-6 | R$ 5 |
| Pro | R$ 8-15 | R$ 12 |
| Full Studio | R$ 20-40 | R$ 30 |

### Cenário C — Pipeline pesado

Uso quando o material vem ruim, há muita tentativa, ou modelos caros entram em tudo:

- modelo frontier em várias etapas;
- muita saída em HTML;
- web search pago;
- imagens geradas;
- retrabalho alto;
- professor pede ajustes que quase viram nova entrega.

| Tier | Custo estimado IA/API | Sinal de alerta |
|---|---:|---|
| Essencial | R$ 8-15 | Se passar disso, provavelmente virou Pro |
| Pro | R$ 20-40 | Se passar disso, cobrar crédito extra ou ajustar escopo |
| Full Studio | R$ 45-90 | Se passar disso, tratar como projeto especial |

---

## 6. Checklist de Controle Antes de Produzir

Antes de iniciar uma aula, responder:

- O material está em texto copiável ou exige OCR?
- O professor mandou até 12 páginas/20 slides ou passou do escopo?
- A aula exige pesquisa externa real?
- A aula exige imagens geradas ou apenas componentes visuais em HTML?
- O HTML será padrão, interativo ou muito customizado?
- A entrega precisa de modelo forte em todas as etapas ou só no QA?
- O prazo permite Batch API ou precisa ser síncrono?
- O professor tem histórico de pedir muita revisão?

Se duas ou mais respostas aumentarem complexidade, aplicar buffer de 50% no custo de IA/API e considerar subir o tier.

---

## 7. Modelo de Registro por Aula

Usar esta ficha para comparar estimativa contra gasto real.

```text
Aula:
Professor:
Tier:
Material recebido:
Páginas/slides:

Modelos usados:
- Diagnóstico:
- Estrutura:
- Redação:
- HTML:
- QA:

Tokens entrada total:
Tokens saída total:
Buscas/web:
Imagens geradas:
Tentativas/retrabalho:

Custo API bruto:
Custo ferramentas:
Custo total em USD:
Câmbio usado:
Custo total em BRL:

Observação:
```

---

## 8. Recomendação Atual

Para o catálogo, usar uma estimativa mais conservadora que a tabela anterior:

| Tier | Custo IA/API recomendado para planejamento |
|---|---:|
| Essencial | R$ 5 |
| Pro | R$ 12 |
| Full Studio | R$ 30 |

Esses valores não são teto. São números de planejamento para o cenário MVP realista. O controle real deve vir da ficha por aula nas primeiras entregas pagas.

---

## Fontes

- [OpenAI API Pricing](https://openai.com/api/pricing/)
- [Anthropic Claude Pricing](https://docs.anthropic.com/en/docs/about-claude/pricing)
- [Google Gemini API Pricing](https://ai.google.dev/pricing)
- [USD/BRL — Investing.com](https://www.investing.com/currencies/usd-brl-historical-data)
