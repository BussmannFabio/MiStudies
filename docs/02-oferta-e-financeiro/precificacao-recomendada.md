# Precificação Recomendada — MiStudies

> Documento de trabalho para ajustar preços, pacotes e lógica comercial antes de atualizar o catálogo oficial.
>
> **Status:** Proposta em revisão · **Data:** Abril 2026

---

## 1. Diagnóstico

Os preços atuais das aulas estão baixos demais para o tipo de entrega prometida.

| Aula        | Preço atual | Tempo estimado | Receita por hora antes de custos |
| ----------- | ----------: | -------------: | -------------------------------: |
| Essencial   |       R$ 40 |           2,5h |                          R$ 16/h |
| Pro         |       R$ 75 |           4,7h |                          R$ 16/h |
| Full Studio |      R$ 100 |             8h |                       R$ 12,50/h |

Mesmo considerando que os sócios não retiram hora-caixa no MVP, esse preço cria três problemas:

- Faz o professor perceber a entrega como "peça barata", não como ativo educacional.
- Não sustenta contratação futura de freelancer ou colaborador.
- Pressiona a equipe a produzir rápido demais, reduzindo qualidade justamente no diferencial do MiStudies.

---

## 2. Referências de Mercado

### Ferramentas self-service

Ferramentas como Gamma e Beautiful.ai cobram assinatura em dólar para o usuário fazer o próprio material. O MiStudies não concorre só com software: ele entrega diagnóstico, curadoria, reestruturação, design editorial e publicação.

| Referência                 |        Preço observado | Leitura para o MiStudies                                 |
| -------------------------- | ---------------------: | -------------------------------------------------------- |
| Gamma Plus                 |  US$ 9/mês por usuário | Ferramenta barata, mas self-service                      |
| Gamma Pro                  | US$ 18/mês por usuário | Inclui mais IA e branding, ainda self-service            |
| Beautiful.ai Pro           |      US$ 12/mês, anual | Ferramenta de apresentação, não serviço feito por equipe |
| Beautiful.ai projeto único |                 US$ 45 | Bom piso psicológico para uma entrega pontual simples    |

Com dólar perto de R$ 5, um software de apresentação fica na faixa de R$ 45 a R$ 225. Uma aula MiStudies pronta deve ficar acima desse piso, porque troca tempo, julgamento e execução do professor por entrega final.

### Trabalho humano

| Referência | Valor observado | Leitura para o MiStudies |
|---|---:|---|
| Designer instrucional no Brasil | ~R$ 4,9 mil/mês CLT médio | Hora CLT bruta fica perto de R$ 28-30 antes de encargos e margem |
| Designer instrucional freelancer global | US$ 20-45/h | Em reais, sugere R$ 100-225/h como referência internacional |
| UX/UI e design freelancer no Brasil | ~R$ 50-160/h | Boa faixa para comparar produção visual e editorial |

Para o MVP, o MiStudies pode aceitar margem menor por validação, mas não deve construir a marca em cima de preço-hora abaixo de R$ 50.

---

## 3. Princípios de Precificação

1. **Preço deve vender valor, não esforço.** O professor compra uma aula publicável, não horas de edição.
2. **O Essencial é entrada, não produto de margem alta.** Serve para reduzir risco e abrir relacionamento.
3. **O Pro deve ser o plano recomendado.** É onde o MiStudies entrega mais valor sem virar projeto sob medida.
4. **Full Studio precisa ser caro o bastante para proteger agenda.** Se vender fácil demais, trava a equipe.
5. **Desconto só entra em pacote pré-pago.** Evitar desconto em aula avulsa.
6. **Onboarding deve simplificar a primeira compra.** Professor não deve ter que entender setup + aula + hub na primeira conversa.

---

## 4. Preços Recomendados por Aula

### Preço oficial recomendado

| Tier        | Preço recomendado | Tempo estimado | Receita por hora | Quando vender                                         |
| ----------- | ----------------: | -------------: | ---------------: | ----------------------------------------------------- |
| Essencial   |       R$ 197/aula |           2,5h |          R$ 79/h | Aula simples, material claro, primeira validação      |
| Pro         |       R$ 397/aula |           4,7h |          R$ 84/h | Aula densa, com exemplos, tabelas e melhor acabamento |
| Full Studio |       R$ 697/aula |             8h |          R$ 87/h | Aula vitrine, tema estratégico ou uso institucional   |

### Preço piloto controlado

Usar apenas para os primeiros 3 a 5 professores, com escopo fechado e autorização para usar o resultado como portfólio.

| Tier | Preço piloto | Condição |
|---|---:|---|
| Essencial | R$ 149/aula | 1 rodada leve, sem customização visual |
| Pro | R$ 297/aula | 1 rodada completa, sem escopo institucional |
| Full Studio | R$ 497/aula | Apenas para aula vitrine com alto potencial de portfólio |

**Regra:** preço piloto não deve aparecer como tabela pública permanente. Ele é concessão de validação, não posicionamento oficial.

---

## 5. Onboarding Recomendado

O onboarding deve ser vendido como pacote inicial. Isso reduz atrito comercial e evita a sensação de que o professor está pagando uma "taxa de cadastro".

| Pacote | Inclui | Preço MVP |
|---|---|---:|
| Onboarding Essencial | Perfil básico + 1 Aula Essencial + 60 dias de Hub Starter | R$ 497 |
| Onboarding Pro | Perfil básico + 2 Aulas Pro + 60 dias de Hub Starter | R$ 997 |
| Onboarding Branded | Perfil com identidade visual simples + 2 Aulas Pro + 60 dias de Hub Pro | R$ 1.697 |
| Onboarding Institucional | Setup institucional + 3 Aulas Full Studio + 90 dias de Hub Institucional | A partir de R$ 3.997 |

### Oferta mínima recomendada

```
Onboarding Essencial = R$ 497
```

Esse pacote substitui a oferta mínima antiga baseada em setup barato + aula muito barata. Ele é simples de explicar:

> "A gente monta seu perfil, transforma uma aula sua em página MiStudies e deixa tudo publicado por 60 dias."

---

## 6. Hub do Professor

O Hub é recorrência e manutenção de presença, não produção de aula. Como o onboarding já inclui um período inicial, a cobrança recorrente entra depois.

| Plano | Preço recomendado | Inclui | Quando usar |
|---|---:|---|---|
| Hub Starter | R$ 49/mês | Até 10 aulas, perfil público, link compartilhável e analytics básico | Professor validando |
| Hub Pro | R$ 99/mês | Até 30 aulas, analytics avançado, destaque e até 3 atualizações simples/mês | Professor ativo |
| Hub Institucional | R$ 249/mês | Múltiplos professores, relatórios consolidados e suporte prioritário | Curso, coordenação ou frente institucional |

Não recomendo reduzir o Starter para R$ 29/mês. A diferença de R$ 20 não deve mudar muito a decisão do professor, mas muda a qualidade da recorrência para o MiStudies.

---

## 7. Pacotes de Aulas

Evitar descontos agressivos. Desconto alto demais transforma pacote em dívida operacional.

| Pacote | Essencial | Pro | Full Studio | Desconto |
|---|---:|---:|---:|---:|
| Avulsa | R$ 197 | R$ 397 | R$ 697 | 0% |
| 5 aulas | R$ 907 | R$ 1.827 | R$ 3.207 | 8% |
| 10 aulas | R$ 1.734 | R$ 3.494 | R$ 6.134 | 12% |
| Semestral | Sob orçamento | Sob orçamento | Sob orçamento | Até 15% |

**Regra:** pacote só começa após pagamento. Créditos têm validade de 90 dias para 5 aulas e 180 dias para 10 aulas.

---

## 8. Plano Estudante

Manter como receita futura. Não usar como base da viabilidade do MVP.

| Plano | Preço recomendado | Quando ativar |
|---|---:|---|
| Estudante Free | R$ 0 | Desde o início, para acervo aberto |
| Estudante Mensal | R$ 14,90/mês | Só quando houver login, favoritos, downloads e kits reais |
| Estudante Anual | R$ 119/ano | Após validação de uso recorrente |

Se a conversão for baixa, testar preço de entrada de R$ 9,90/mês por tempo limitado. Não começar por assinatura estudantil antes de haver acervo suficiente.

---

## 9. Impacto na Meta Financeira

Com os preços recomendados, a meta de R$ 3.600/mês fica mais saudável porque depende menos de volume absurdo de aulas baratas.

### Exemplo conservador

| Item | Quantidade/mês | Receita |
|---|---:|---:|
| Onboarding Essencial | 2 | R$ 994 |
| Aulas Pro avulsas | 4 | R$ 1.588 |
| Aulas Essenciais avulsas | 4 | R$ 788 |
| Hubs ativos Starter | 4 | R$ 196 |
| **Total bruto** |  | **R$ 3.566** |

### Exemplo mais forte

| Item | Quantidade/mês | Receita |
|---|---:|---:|
| Onboarding Pro | 2 | R$ 1.994 |
| Aulas Pro avulsas | 6 | R$ 2.382 |
| Aulas Full Studio | 2 | R$ 1.394 |
| Hubs ativos | 6 Starter + 2 Pro | R$ 492 |
| **Total bruto** |  | **R$ 6.262** |

---

## 10. Decisão Recomendada

Atualizar o catálogo oficial para este modelo:

- Trocar "Setup do Professor" por **Onboarding do Professor**.
- Definir **Onboarding Essencial R$ 497** como menor venda publicada.
- Subir aulas avulsas para **R$ 197 / R$ 397 / R$ 697**.
- Manter Hub em **R$ 49 / R$ 99 / R$ 249**.
- Reduzir descontos de pacotes para **8%, 12% e até 15%**.
- Manter Plano Estudante em espera, com preço alvo de **R$ 14,90/mês**.

---

## Fontes Consultadas

- [Gamma pricing](https://www.gamma-app.ai/pricing)
- [Beautiful.ai pricing](https://www.beautiful.ai/pricing)
- [Upwork — Instructional Designer hourly rates](https://www.upwork.com/hire/instructional-designers/cost/)
- [Salario.com.br — Designer Instrucional Brasil](https://www.salario.com.br/profissao/designer-instrucional-cbo-239435/)
- [Investing.com — USD/BRL](https://www.investing.com/currencies/usd-brl-historical-data)
