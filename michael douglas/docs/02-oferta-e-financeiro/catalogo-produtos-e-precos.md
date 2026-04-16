# Catálogo de Produtos e Preços — MiStudies

> Fonte de verdade comercial do MiStudies: define produtos, escopos, preços, regras de venda e limites de entrega.
>
> **Data:** Abril 2026 · **Fase:** MVP → Tração
>
> Usado por pitch, ICP, templates, contrato, pipeline de entrega e página de preços. O plano financeiro fica em [plano-de-rentabilidade.md](plano-de-rentabilidade.md).

---

## 1. Modelo Comercial Canônico

O MiStudies não vende apenas "páginas bonitas". O produto é um **sistema de publicação de aulas para professores**: o professor entra, configura sua presença, transforma materiais brutos em aulas HTML e mantém essas aulas acessíveis no hub.

### Mapa de produtos

| Produto                          | Tipo de receita         | Quem compra              | Quando entra                                               | Função no modelo                                                                                                                      |
| -------------------------------- | ----------------------- | ------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **P1 — OnBoarding do Professor** | Pontual                 | Professor ou instituição | Para se cadastrar na plataforma                            | Cria a base do professor dentro do MiStudies e garante a publicação (Hub) por um determinado tempo e tambem recebe um pacote de Aulas |
| **P2 — Aula MiStudies**          | Pontual por unidade     | Professor ou instituição | A cada material transformado                               | Gera o ativo educacional que será entregue ao aluno                                                                                   |
| **P3 — Hub do Professor**        | Recorrente mensal       | Professor ou instituição | A partir da primeira publicação, pós periodo do onboarding | Mantém página, aulas, links, analytics e visibilidade no ar                                                                           |
| **P4 — Plano Estudante**         | Recorrente mensal/anual | Aluno                    | Após haver acervo suficiente                               | Monetiza conveniência, organização e recursos extras                                                                                  |

### Regra principal de venda

Para uma aula ficar publicada no MiStudies, o professor precisa contratar:

```
Setup do Professor + pelo menos 1 Aula MiStudies criada
```

No MVP, a menor venda publicada possível é:

| Item                                       | Plano mínimo |         Valor |
| ------------------------------------------ | ------------ | ------------: |
| Setup                                      | Básico       |        R$ 300 |
| **Total do primeiro mês**                  |              |    **R$ 300** |
| **Recorrência a partir do 3 mês seguinte** | Hub Starter  | **R$ 29/mês** |

O professor pode contratar uma aula sem Hub apenas como entrega privada ou preview interno. Nesse caso, a aula não entra no acervo público, não aparece no perfil do professor e não fica disponível para alunos no MiStudies.

### Pipeline de transformação da aula

```
Material bruto do professor
    ↓
Briefing + diagnóstico de escopo
    ↓
Skill de Análise + curadoria humana
    ↓
Aula HTML no tier contratado
    ↓
Revisão e aprovação do professor
    ↓
Publicação no Hub do Professor
    ↓
Alunos acessam gratuitamente ou com recursos extras do Plano Estudante
```

### O que a Skill de Análise faz

1. **Diagnóstico do material** — analisa estrutura, densidade, lacunas, tom e nível técnico.
2. **Definição de escopo** — confirma se o material cabe em uma aula ou precisa virar mais de uma entrega.
3. **Reestruturação didática** — reorganiza fluxo, cria hierarquia visual, sintetiza e propõe seções.
4. **Pesquisa complementar** — enriquece o conteúdo dentro do limite do tier contratado.
5. **Geração orientada do HTML** — produz a aula no padrão visual MiStudies.
6. **Controle de qualidade** — revisão humana antes de apresentar ao professor.

---

## 2. P1 — Setup do Professor

### Definição

O **Setup do Professor** é uma taxa única de entrada. Ele cria a base comercial, editorial e visual para que o professor publique aulas no MiStudies sem começar do zero a cada entrega.

**Unidade de cobrança:** um perfil de professor, marca docente ou frente institucional.

**Quando cobrar:** antes da primeira aula produzida.

**Quando entregar:** depois que o professor envia dados básicos, foto, bio, matérias e referências de identidade visual, quando houver.

### Planos de setup

| Plano                 | Para quem é                                                      | Inclui                                                                                                                                                       | Não inclui                                                                                       |  Prazo estimado |        Preço |
| --------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | --------------: | -----------: |
| **Setup Essencial**   | Professor que quer validar rápido com poucos materiais           | Perfil público no hub, bio, foto, slug, separação de até 3 matérias iniciais, link compartilhável, visual padrão MiStudies                                   | Paleta personalizada, logo, banner customizado, subpáginas, integração institucional             |  2-3 dias úteis |   **R$ 200** |
| **Setup Pro**         | Professor que quer presença autoral e mais valor percebido       | Tudo do Básico + pesquisa de estilo, paleta personalizada, marca/logotipo simples, banner hero customizado, aplicação visual nas aulas Pro/Full Studio       | Brandbook completo, múltiplos professores, landing institucional                                 |  3-5 dias úteis |   **R$ 500** |
| **Setup Full Studio** | Curso, departamento, coordenação ou professor com várias frentes | Tudo do Branded + adaptação à identidade da instituição, landing dedicada, até 3 professores no setup inicial, múltiplas disciplinas, reunião de alinhamento | Portal institucional completo, integração com LMS, mais de 3 professores sem orçamento adicional | 5-10 dias úteis | **R$ 1.000** |

### Entregáveis obrigatórios

- Página/perfil do professor preparado para receber aulas.
- Nome público, slug e link compartilhável.
- Bio curta revisada no tom MiStudies.
- Taxonomia inicial: áreas, matérias, tags e formato de aula.
- Configuração visual compatível com o plano escolhido.
- Checklist de publicação pronto para a primeira aula.

### Critério de conclusão

O setup está concluído quando o perfil do professor está navegável, com identidade aplicada, taxonomia configurada e pronto para receber a primeira aula publicada.

---

## 3. P2 — Aula MiStudies

### Definição

A **Aula MiStudies** é um ativo educacional digital produzido a partir de um material bruto do professor. Ela combina curadoria, reorganização didática, adaptação textual, design editorial e publicação em HTML responsivo no padrão MiStudies.

Ela não precisa corresponder exatamente a uma aula de calendário. Uma Aula MiStudies representa um **tema fechado de estudo**, organizado para que o aluno consiga entender, revisar ou consultar aquele conteúdo de forma independente.

**Unidade técnica de entrega:** uma página educacional publicada no MiStudies.

**Unidade comercial:** crédito de produção, aula avulsa ou pacote de aulas, conforme o volume e a recorrência do professor.

**Uma Aula MiStudies pode nascer de:** uma aula do professor, um conjunto de slides, um capítulo, um tema de prova, uma parte de módulo ou um agrupamento de encontros curtos sobre o mesmo assunto.

**Escopo padrão por aula:** um bloco de conteúdo com objetivo didático único, normalmente equivalente a até 12 páginas de PDF/DOCX, até 20 slides ou volume textual semelhante. O limite não é apenas quantitativo: densidade conceitual, número de exercícios, necessidade de pesquisa, complexidade visual e nível de interatividade podem alterar o escopo.

**Materiais maiores ou densos demais:** devem passar por diagnóstico e ser divididos em múltiplas Aulas MiStudies, convertidos em um pacote de setup ou orçados à parte.


### O que toda aula inclui

- Diagnóstico do material enviado.
- Reorganização do conteúdo em seções claras.
- Adaptação textual sem alterar a autoria intelectual do professor.
- Página HTML responsiva.
- Metadados de acervo: título, descrição, área, matéria, formato, tier, professor, tags e privacidade.
- Publicação no Hub, se o professor tiver assinatura ativa.
- 1 rodada de revisão para correções factuais ou ajustes leves.

### Tiers de aula (preço por aula avulsa, não assinantes, recebem em HTML ou PDF)

|                                  | **Essencial**                                                      | **Pro**                                                                      | **Full Studio**                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Preço**                        | **R$ 157/aula**                                                    | **R$ 247/aula**                                                              | **R$ 447/aula**                                                                                                                   |
| **Quando usar**                  | Conteúdo claro, curto e direto, que precisa ficar bonito e legível | Conteúdo denso, com exemplos, tabelas, comparação e fluxos lógicos           | Aula vitrine, tema estratégico ou material para impressionar alunos/coordenadores                                                 |
| **Formato**                      | HTML estático editorial                                            | HTML interativo                                                              | HTML completo com recursos avançados de design                                                                                    |
| **Estrutura típica**             | 4-6 seções                                                         | 6 - 12 seções                                                                | 12 - 18 seções                                                                                                                    |
| **Design**                       | Padrão MiStudies                                                   | Padrão MiStudies ou Paleta do professor                                      | Identidade completa do professor ou do tema abordado                                                                              |
| Quiz Interativo                  | Não                                                                | Sim                                                                          | Sim Modelo Avançado                                                                                                               |
| **Elementos visuais**            | Cards, destaques, listas, tabelas simples                          | Tudo do Essencial + acordeões, tabs, tooltips, timeline, tabelas trabalhadas | Tudo do Pro + quiz max, flashcards, modo apresentação, progresso de leitura, glossário, videos embedados e outras personalizações |
| **Pesquisa externa**             | Básica, apenas para apoio e checagem                               | Moderada, com 2-4 fontes quando útil                                         | Profunda, com referências, glossário e enriquecimento didático                                                                    |
| **Interatividade**               | Baixa                                                              | Média                                                                        | Alta                                                                                                                              |
| **Revisões incluídas**           | 1 rodada leve                                                      | 1 rodada completa                                                            | 2 rodadas                                                                                                                         |
| **Prazo após material completo** | 1-2 dias úteis                                                     | 2-3 dias úteis                                                               | 2-4 dias úteis                                                                                                                    |
| **Tempo interno estimado**       | 1,5-2h                                                             | 3-4h                                                                         | 6-7h                                                                                                                              |

### O que não está incluído em nenhuma aula

- Criação de conteúdo acadêmico do zero sem material base.
- Validação científica, jurídica ou regulatória do conteúdo.
- Gravação ou edição de vídeo.
- Narração, locução ou podcast.
- Banco de questões amplo ou sistema de correção por aluno.
- Login, backend, LMS, Moodle, Google Classroom ou integração externa.
- Ilustrações autorais complexas, animações 3D ou simulações sob medida sem orçamento adicional.
- Revisões que mudem o tema, o público ou o escopo depois da aprovação inicial.

### Custo unitário estimado por aula

Esta estimativa considera a definição atual dos tiers: entrada padrão de até 12 páginas de PDF/DOCX ou até 20 slides, com variação conforme densidade conceitual, número de exercícios, pesquisa necessária, complexidade visual e nível de interatividade. O cálculo detalhado fica em [calculo-custos-ia-api.md](calculo-custos-ia-api.md).

| Componente | Essencial | Pro | Full Studio |
|---|---:|---:|---:|
| Preço avulso atual | R$ 157 | R$ 247 | R$ 447 |
| Tempo humano estimado | 1,5-2h | 3-4h | 6-7h |
| Base de cálculo operacional | 1,8h | 3,5h | 6,5h |
| Custo de IA/API para planejamento | ~R$ 5 | ~R$ 12 | ~R$ 30 |
| Custo direto de caixa no MVP | ~R$ 5 | ~R$ 12 | ~R$ 30 |
| Custo com produção a R$30/h | ~R$ 59 | ~R$ 117 | ~R$ 225 |
| Custo com produção a R$50/h | ~R$ 95 | ~R$ 187 | ~R$ 355 |
| Margem bruta sobre caixa | ~98% | ~97% | ~96% |
| Margem com produção a R$30/h | ~62% | ~53% | ~50% |
| Margem com produção a R$50/h | ~39% | ~24% | ~21% |

### Quebra estimada de tempo por tier

| Atividade | Essencial | Pro | Full Studio |
|---|---:|---:|---:|
| Diagnóstico e leitura do material | 15 min | 20 min | 25 min |
| Pesquisa complementar | 10 min | 30 min | 45 min |
| Reestruturação didática e adaptação textual | 25 min | 50 min | 75 min |
| Geração e ajuste do HTML | 35 min | 70 min | 105 min |
| Design, componentes e interatividade | 10 min | 40 min | 75 min |
| QA, revisão e ajustes finais | 15 min | 30 min | 45 min |
| Metadados, exportação e entrega | 10 min | 10 min | 20 min |
| **Total operacional** | **~2h** | **~4h** | **~6,5h** |

> No MVP, o principal custo ainda é o tempo dos sócios. A leitura correta da tabela não é "o custo é só IA", mas sim: enquanto os sócios produzem, o caixa fica leve; quando houver freelancer, colaborador ou retirada por hora, o Pro e o Full Studio precisam ser vendidos principalmente via pacote, crédito mensal ou módulo fechado para proteger margem e agenda. Se o material exigir OCR, muitas buscas, imagens geradas ou modelo frontier em várias etapas, usar o cenário pesado de [calculo-custos-ia-api.md](calculo-custos-ia-api.md).

### Pacotes de aulas

Pacotes são créditos pré-pagos de aulas. Eles não substituem o Hub e não incluem Setup. Os valores abaixo usam o preço avulso atual como base e reduzem o desconto para proteger margem operacional.

| Pacote | Essencial | Pro | Full Studio | Desconto | Regra |
|---|---:|---:|---:|---:|---|
| Avulsa | R$ 157 | R$ 247 | R$ 447 | — | 1 aula contratada |
| 5 aulas | R$ 707 | R$ 1.112 | R$ 2.012 | 10% | Validade de 90 dias |
| 10 aulas | R$ 1.335 | R$ 2.100 | R$ 3.800 | 15% | Validade de 180 dias |
| Módulo ou semestre | Sob orçamento | Sob orçamento | Sob orçamento | Até 20% | Escopo fechado após diagnóstico |

Créditos são contratados por tier. Upgrade de uma aula já comprada pode ser feito pagando a diferença entre tiers antes do início da produção.

---

## 4. P3 — Hub do Professor

### Definição

O **Hub do Professor** é a assinatura mensal que mantém a presença do professor ativa no MiStudies. Ele não é a produção da aula; ele é a camada de publicação, organização, acesso, analytics e visibilidade.

**Unidade de cobrança:** uma assinatura mensal por perfil, marca docente ou frente institucional.

**Quando cobrar:** a partir da publicação da primeira aula.

**Regra de publicação:** sem Hub ativo, aulas produzidas ficam arquivadas ou em preview privado, mas não aparecem no acervo público.

### Planos de Hub

| Plano                 | Para quem é                                                                  | Inclui                                                                                                                                                        | Não inclui                                                                          |          Preço |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------: |
| **Hub Starter**       | Professor validando o MiStudies com poucos conteúdos                         | Até 10 aulas publicadas, perfil público, busca no acervo, link compartilhável, analytics básico de visualizações                                              | Domínio personalizado, destaque no hub, relatórios avançados, múltiplos professores |  **R$ 49/mês** |
| **Hub Pro**           | Professor ativo que publica com frequência                                   | Até 30 aulas publicadas, tudo do Starter, analytics avançado, destaque no hub, domínio/subdomínio personalizado quando viável, até 3 atualizações simples/mês | Múltiplos professores, relatórios institucionais, reunião mensal fixa               |  **R$ 99/mês** |
| **Hub Institucional** | Curso, departamento, grupo de professores ou operação com várias disciplinas | Aulas ilimitadas produzidas pelo MiStudies, múltiplos professores, relatórios consolidados, suporte prioritário, reunião mensal de acompanhamento             | Portal acadêmico completo, integração com LMS, suporte individual a alunos          | **R$ 249/mês** |

### O que conta como atualização simples

- Correção de typo.
- Ajuste pequeno de link, tag, descrição ou metadado.
- Troca pontual de imagem enviada pelo professor.
- Pequena correção factual indicada pelo professor.

Mudanças de estrutura, novas seções, novos exercícios, redesign ou ampliação de conteúdo contam como nova rodada de produção ou nova aula.

### Cancelamento e reativação

- O professor pode cancelar o Hub ao fim do ciclo mensal.
- Ao cancelar, as aulas deixam de aparecer no acervo público e o perfil pode ficar inativo.
- O material produzido continua arquivado por 90 dias.
- Reativação dentro de 90 dias não exige novo Setup.
- Depois de 90 dias, pode haver taxa de reativação se for necessário reconstruir links, revisar arquivos ou atualizar identidade.

---

## 5. P4 — Plano Estudante

### Definição

O **Plano Estudante** é uma receita complementar B2C. Ele não deve ser tratado como motor principal do MVP. Sua função é monetizar conveniência quando já houver acervo suficiente.

No MVP, o aluno acessa o acervo publicado gratuitamente. A assinatura paga entra apenas quando houver volume e funcionalidades reais para justificar cobrança.

### Planos para aluno

| Plano | Inclui | Não inclui | Preço |
|---|---|---|---:|
| **Free** | Acesso ao acervo público, leitura completa das aulas abertas, busca e filtros básicos | Downloads, favoritos ilimitados, progresso, kits de revisão, recursos de organização | **R$ 0** |
| **Estudante Mensal** | Tudo do Free + download em PDF quando permitido, favoritos ilimitados, kits de revisão, histórico de progresso, acesso prioritário a novidades | Conteúdos privados de professores, tutoria, correção individual, certificado | **R$ 14,90/mês** |
| **Estudante Anual** | Tudo do Estudante Mensal com 20% de desconto | Mesmas limitações do mensal | **R$ 143/ano** equivalente a **R$ 11,92/mês** |

### Critério para ativar cobrança de alunos

Não ativar assinatura de aluno antes de cumprir pelo menos 3 condições:

- 8-10 aulas reais publicadas no acervo.
- Pelo menos 3 professores ou frentes de conteúdo.
- Login funcional ou solução simples de controle de favoritos/downloads.
- Benefícios pagos implementados, não apenas prometidos.

---

## 6. Regras Comerciais Transversais

### Pagamento

| Receita | Momento de cobrança | Observação |
|---|---|---|
| Setup | Antes do início do onboarding | Taxa única |
| Aula avulsa | Antes do início da produção | Uma aula por pagamento |
| Pacote de aulas | À vista antes da primeira aula do pacote | Créditos por tier |
| Hub | Mensal, a partir da primeira publicação | Necessário para manter aulas públicas |
| Plano Estudante | Mensal ou anual | Ativar apenas após volume mínimo |

### Política para pilotos

O MVP deve cobrar desde o início. A concessão para piloto não é gratuidade; é **escopo controlado**:

- Começar com 1 aula Essencial ou Pro.
- Usar Setup Básico quando o professor ainda não sabe se seguirá.
- Oferecer diagnóstico gratuito do material antes da proposta.
- Usar as demos existentes como prova de valor.
- Dar uma rodada de revisão bem acompanhada para reduzir risco percebido.

### Produto recomendado para primeira venda

| Perfil do professor | Oferta recomendada | Total no primeiro mês | Recorrência |
|---|---|---:|---:|
| Quer testar com baixo risco | Setup Básico + 1 Aula Essencial + Hub Starter | **R$ 289** | **R$ 49/mês** |
| Quer apresentar algo melhor para turma atual | Setup Básico + 2 Aulas Pro + Hub Starter | **R$ 399** | **R$ 49/mês** |
| Quer presença autoral | Setup Branded + 2 Aulas Pro + Hub Pro | **R$ 749** | **R$ 99/mês** |
| Coordenação, curso ou frente institucional | Setup Institucional + 1 Aula Full Studio + Hub Institucional | **a partir de R$ 1.349** | **R$ 249/mês** |

---
