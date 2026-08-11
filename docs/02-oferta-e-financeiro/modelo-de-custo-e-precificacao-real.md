# Modelo de Custo e Precificação Real — MiStudies

> **Data-base:** 11/08/2026 · **Moeda:** BRL · **Fase:** MVP
>
> Bottom-up baseado no [Catálogo](catalogo-produtos-e-precos.md), [Plano](plano-de-rentabilidade.md) e [Pipeline](../03-operacao/pipeline-manual-de-entrega.md). Recalibrar após três aulas pagas.

## Resumo executivo

- APIs: **R$0,24/R$0,65/R$2,65** por aula Essencial/Pro/Full; tempo domina.
- As 8 etapas somam **150/315/510 min**, não 2,5h/4,7h/8h.
- A R$60/h e 15 aulas/mês, custos: **R$174,46/R$339,87/R$536,87**.
- Margens atuais: **-347,1%/-363,7%/-447,2%**.
- Recomendação a ~60%: aulas **R$590/R$1.140/R$1.800**; Setup **R$510/R$1.060/R$2.410**; Hub **R$139/R$289/R$699**.

## Premissas, câmbio e fórmulas

Sem PTAX de fechamento publicável do próprio dia, adota-se **US$1=R$5,50; €1=R$6,40**. Trocar pela PTAX na contratação e recalcular se variar >10%. Metodologia: [BCB](https://www.bcb.gov.br/conteudo/relatorioinflacao/EstudosEspeciais/EE042_A_taxa_de_cambio_de_referencia_Ptax.pdf), consulta 11/08/2026.

```text
Humano = minutos/60 × valor-hora
Variável = humano + APIs/imagens
Fixo/aula = fixo mensal/aulas-mês
Total = variável + fixo/aula
Gateway avulso = preço×3,99% + 0,39
Gateway Hub = preço×4,69% + 0,39
Tributo = preço×6%
Margem = (preço-gateway-tributo-custo)/preço
Preço-alvo avulso = (custo+0,39)/(1-3,99%-6%-margem)
Preço-alvo Hub = (custo+0,39)/(1-4,69%-6%-margem)
```

6% é hipótese, não parecer. Três sócios não devem usar MEI individual como sociedade. DAS-MEI serviço seria R$86,05/mês se elegível ([Portal do Empreendedor](https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/perguntas-frequentes/como-e-feita-a-formalizacao-do-mei/qual-o-custo-da-formalizacao), atualizado 02/01/2026; consulta 11/08/2026). Contador deve confirmar CNAE/anexo/fator R.

## 1. Valor-hora dos sócios

| Cenário | Valor | Justificativa |
|---|---:|---|
| Caixa | R$0/h | concilia caixa; não precifica |
| Oportunidade | **R$30/h** | piso dos docs; R$4.800/160h |
| Reposição | **R$60/h** | hipótese blended de atendimento, redação, design e dev; R$9.600/160h |

R$60/h é hipótese a validar na primeira contratação, não “média de mercado”.

## 2. Ferramentas e APIs

### 2.1 Cotações oficiais (consulta 11/08/2026)

| Item | Preço | BRL/decisão | Fonte primária |
|---|---:|---|---|
| GPT-5.6 Luna | US$0,20/1M in; US$1,20/1M out | R$1,10/R$6,60 | [OpenAI — reajuste de 30/07/2026](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) |
| Sonar | US$1/1M in/out + US$8/1.000 requests médios | por uso | [Perplexity](https://docs.perplexity.ai/docs/getting-started/pricing) |
| Deep Research | US$2/1M in; US$8/1M out; US$2/1M citação; US$3/1M raciocínio; US$5/1.000 buscas | Full | [Perplexity](https://docs.perplexity.ai/docs/getting-started/pricing) |
| NotebookLM | 100 notebooks; 50 fontes; 50 chats/dia | R$0 incremental; manual | [Google](https://support.google.com/notebooklm/answer/16269187) |
| n8n Community | self-host padrão | R$0 licença | [n8n](https://n8n.io/pricing/) |
| Hetzner CX23 | €5,49/mês sem IVA | **R$35,14** | [Hetzner](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/) |
| DigitalOcean 2vCPU/4GiB | US$24/mês | **R$132** | [DigitalOcean](https://www.digitalocean.com/pricing/droplets) |
| Contabo | sem cotação reproduzível | excluir até proposta | [Contabo](https://contabo.com/en/) |
| RunPod RTX4090 | US$0,69/h | **R$3,80/h**; opcional | [RunPod](https://www.runpod.io/pricing) |
| GPT Image 1.5 médio | US$0,034/imagem | **R$0,187** | [OpenAI](https://developers.openai.com/api/docs/models/gpt-image-1.5) |
| Bancos de imagem | API gratuita nos termos | R$0 | [Unsplash](https://unsplash.com/developers)/[Pexels](https://www.pexels.com/api/) |
| Vercel Hobby/Pro | US$0 não comercial / US$20 | Pro **R$110** | [Vercel](https://vercel.com/pricing) |
| .com.br | preço não exposto | **R$40/ano provisório** | [Registro.br](https://registro.br/) |
| Stripe/Billing | 3,99%+R$0,39; +0,7% recorrente | fórmulas acima | [Stripe](https://stripe.com/br/pricing) |
| CRM/analytics | stack gratuita | R$0; hipótese | — |
| Contabilidade | não escolhida | **provisão R$250/mês** | — |

GPU, VPS/n8n, CRM pago e chat pessoal ficam fora do baseline.

### 2.2 Consumo assumido

| Etapa | Essencial | Pro | Full |
|---|---:|---:|---:|
| Análise Luna | 20k/4k=**0,05** | 35k/7k=**0,08** | 60k/12k=**0,15** |
| Pesquisa | 1 Sonar=**0,08** | 4=**0,31** | 4+Deep=**1,68** |
| MD Luna | 30k/8k=**0,09** | 50k/15k=**0,15** | 80k/25k=**0,25** |
| HTML Luna | 10k/3k=**0,03** | 30k/10k=**0,10** | 60k/20k=**0,20** |
| Imagens | 0 | 0 | 2×0,187=**0,37** |
| **Total R$** | **0,24** | **0,65** | **2,65** |

Sonar: `(4.000×US$1/1M+2.000×US$1/1M+US$8/1.000)×5,50=R$0,077`.

## 3. Custo variável: 8 etapas × 3 tiers

A **R$60/h**; célula = humano + ferramenta.

| Etapa | Essencial | Pro | Full |
|---|---:|---:|---:|
| 1 Recepção | 15/60×60=**15,00** | **20,00** | **30,00** |
| 2 Análise | 20+0,05=**20,05** | 30+0,08=**30,08** | 45+0,15=**45,15** |
| 3 Escopo | **10,00** | **15,00** | **20,00** |
| 4 Pesquisa | 15+0,08=**15,08** | 45+0,31=**45,31** | 90+1,68=**91,68** |
| 5 Markdown | 30+0,09=**30,09** | 60+0,15=**60,15** | 90+0,25=**90,25** |
| 6 Validação | **15,00** | **25,00** | **40,00** |
| 7 HTML | 45+0,03=**45,03** | 90+0,10=**90,10** | 150+0,20+0,37=**150,57** |
| 8 QA/publicação | **15,00** | **30,00** | **45,00** |
| **Total** | **150,24** | **315,65** | **512,65** |

Minutos: E `15+20+10+15+30+15+45+15=150`; P `20+30+15+45+60+25+90+30=315`; F `30+45+20+90+90+40+150+45=510`.

| Cenário | E | P | F |
|---|---:|---:|---:|
| R$0/h | **0,24** | **0,65** | **2,65** |
| R$30/h | 2,5×30+0,24=**75,24** | 5,25×30+0,65=**158,15** | 8,5×30+2,65=**257,65** |
| R$60/h | **150,24** | **315,65** | **512,65** |

## 4. Custo fixo e rateio

| Baseline | Mensal |
|---|---:|
| Vercel Pro | 110,00 |
| Domínio provisório | 3,33 |
| Provisão contábil | 250,00 |
| GitHub/GA4/CRM | 0 |
| **Total** | **363,33** |

n8n+Hetzner: `363,33+35,14=R$398,47`; fora até provar economia. Gateway/tributo são variáveis.

| Aulas/mês | Conta | Fixo/aula |
|---:|---:|---:|
| 4 | 363,33/4 | **90,83** |
| 6 | /6 | **60,56** |
| 8 | /8 | **45,42** |
| 10 | /10 | **36,33** |
| 14 | /14 | **25,95** |
| 20 | /20 | **18,17** |

Todo fixo foi conservadoramente atribuído às aulas; se Setup/Hub absorverem, migra, não some.

## 5. Custo total por aula

Base 15 aulas: `363,33/15=24,22`.

| Lente | E | P | F |
|---|---:|---:|---:|
| Caixa | 0,24+24,22=**24,46** | **24,87** | **26,87** |
| R$30/h | **99,46** | **182,37** | **281,87** |
| R$60/h | **174,46** | **339,87** | **536,87** |

## 6. Setup e Hub

Tempos inexistentes nos docs são hipóteses a medir.

### Setup bottom-up

| Atividade | Básico | Branded | Institucional |
|---|---:|---:|---:|
| Briefing | 30min | 45 | 90 |
| Perfil/bio/taxonomia | 45 | 60 | 120 |
| Identidade | 30 | 120 | 300 |
| QA | 30 | 60 | 120 |
| Entrega | 15 | 30 | 90 |
| **Tempo** | **2,5h** | **5,25h** | **12h** |
| API | 0,10 | 0,20 | 0,40 |
| **Caixa** | **0,10** | **0,20** | **0,40** |
| **R$30/h** | **75,10** | **157,70** | **360,40** |
| **R$60/h** | **150,10** | **315,20** | **720,40** |

### Hub bottom-up/mês

Premissa Starter 15min, Pro 60min, Institucional 180min. Para enxergar o Hub isoladamente, esta tabela usa um **cenário alternativo stand-alone** em que 100% do fixo é alocado a 15 Hubs: `363,33/15=24,22`. Esse R$24,22 **substitui**, e não se soma, ao rateio integral por aula da seção 4. Numa operação mista, os R$363,33 devem ser distribuídos uma única vez entre Aulas, Setups e Hubs por um critério documentado (por exemplo, participação na receita ou horas consumidas).

| Plano | Tempo | Humano R$60/h | Fixo | Custo |
|---|---:|---:|---:|---:|
| Starter | 0,25h | 15 | 24,22 | **39,22** |
| Pro | 1h | 60 | 24,22 | **84,22** |
| Institucional | 3h | 180 | 24,22 | **204,22** |

“Aulas ilimitadas” é hospedagem de aulas compradas, não produção gratuita.

## 7. Margens e preço mínimo

Exemplo E/caixa: `(40-(40×3,99%+0,39)-40×6%-24,46)/40=27,89%`.

| Aula | Atual | Margem caixa | R$30/h | R$60/h |
|---|---:|---:|---:|---:|
| E | 40 | **27,9%** | **-159,5%** | **-347,1%** |
| P | 75 | **56,3%** | **-153,7%** | **-363,7%** |
| F | 100 | **62,7%** | **-192,2%** | **-447,2%** |

| Aula | Custo | 60% (`/0,3001`) | 70% (`/0,2001`) | 80% (`/0,1001`) |
|---|---:|---:|---:|---:|
| E | 174,46 | **582,64** | **873,81** | **1.746,75** |
| P | 339,87 | **1.133,82** | **1.700,45** | **3.399,20** |
| F | 536,87 | **1.790,27** | **2.684,95** | **5.367,23** |

60% financia comercial, ociosidade, produto e retrabalho; 70% é meta pós-automação; 80% exige reduzir horas.

| Setup | Atual | Custo | Margem | Preço 60% |
|---|---:|---:|---:|---:|
| Básico | 200 | 150,10 | **14,8%** | **501,47** |
| Branded | 500 | 315,20 | **26,9%** | **1.051,62** |
| Institucional | 1.000 | 720,40 | **17,9%** | **2.401,83** |

| Hub | Atual | Custo | Margem | Preço 60% (`/0,2931`) |
|---|---:|---:|---:|---:|
| Starter | 49 | 39,22 | **8,5%** | **135,14** |
| Pro | 99 | 84,22 | **3,8%** | **288,67** |
| Institucional | 249 | 204,22 | **7,1%** | **698,77** |

## 8. Sensibilidade

| Aulas/mês | Fixo/aula | E | P | F |
|---:|---:|---:|---:|---:|
| 5 | 72,67 | **222,91** | **388,32** | **585,32** |
| 15 | 24,22 | **174,46** | **339,87** | **536,87** |
| 30 | 12,11 | **162,35** | **327,76** | **524,76** |
| 60 | 6,06 | **156,30** | **321,71** | **518,71** |

De 15 para 60, Essencial cai só R$18,16. Volume não salva subpreço; automação deve reduzir etapas 4/5/7.

| Tier (15 aulas) | R$0/h | R$30/h | R$60/h |
|---|---:|---:|---:|
| E | 24,46 | 99,46 | 174,46 |
| P | 24,87 | 182,37 | 339,87 |
| F | 26,87 | 281,87 | 536,87 |

## 9. Recomendação

| Produto | Atual | Recomendado | Conta |
|---|---:|---:|---|
| Setup Básico | 200 | **510** | alvo 501,47 |
| Setup Branded | 500 | **1.060** | alvo 1.051,62 |
| Setup Institucional | 1.000 | **2.410** | alvo 2.401,83 |
| Aula Essencial | 40 | **590** | alvo 582,64 |
| Aula Pro | 75 | **1.140** | 315min; alvo 1.133,82 |
| Aula Full | 100 | **1.800** | 510min; alvo 1.790,27 |
| Hub Starter | 49 | **139/mês** | alvo 135,14 |
| Hub Pro | 99 | **289/mês** | alvo 288,67 |
| Hub Institucional | 249 | **699/mês** | alvo 698,77 |

Nenhum preço atual está economicamente validado. Full a R$100 só aparenta 62,7% em caixa porque ignora 8,5h.

1. Testar preços com 3 professores e registrar minutos.
2. Se R$590 for alto, reduzir Essencial a ≤60min; não subsidiar 2,5h.
3. Suspender descontos de pacotes até recalcular.
4. Cobrar revisão extra e material >20 páginas/35 slides.
5. Contratar n8n/VPS só se economizar >R$35,14/mês.
6. Confirmar tributo e 3 propostas contábeis.

Se aceito, atualizar Catálogo, Plano, Pipeline (totais e 10.5/10.6), `pages/planos-precos.html` e `pages/plano-rentabilidade.html`. **Nenhum deles foi alterado aqui.**

## Rotina mensal

- Exportar tokens/requests e minutos das 8 etapas.
- Atualizar câmbio, gateway, hospedagem, domínio, contabilidade e tributos.
- Calcular margem por pedido.
- Revisar preço quando custo/câmbio/tempo variar >10%.
