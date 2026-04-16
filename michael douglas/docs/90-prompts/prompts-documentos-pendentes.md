# Prompts de Documentos Pendentes — MiStudies
> Mapeamento do que falta criar + prompts para gerar cada documento na estrutura nova
> Fase: MVP · Abril 2026

---

## O que já existe

| Pasta | Documento | Status |
|---|---|---|
| `01-fundacao/` | product-brief.md | Feito |
| `01-fundacao/` | business-model-canvas.md | Feito |
| `01-fundacao/` | lean-canvas.md | Feito |
| `02-oferta-e-financeiro/` | catalogo-produtos-e-precos.md | Feito |
| `02-oferta-e-financeiro/` | plano-de-rentabilidade.md | Feito |
| `05-marca/` | naming-e-tagline.md | Feito |
| `05-marca/` | tom-de-voz.md | Feito |
| `05-marca/` | brandbook.md | Feito |
| `99-arquivo/` | modelo-freemium.md | Histórico — substituído |

---

## O que está faltando

### Prioridade 1 — Bloqueante para ir a mercado

| Pasta | Documento | Por que é urgente |
|---|---|---|
| `04-comercial/` | icp-professor-ideal.md | Sem isso, a prospecção é no escuro |
| `04-comercial/` | pitch-comercial.md | Script para abordar os pilotos |
| `04-comercial/` | templates-de-comunicacao.md | E-mail, WhatsApp e LinkedIn prontos para usar |
| `03-operacao/` | pipeline-manual-de-entrega.md | O que acontece depois que o professor assina |
| `06-legal/` | contrato-professores-piloto.md | Formalizar o acordo com pilotos |

### Prioridade 2 — Qualidade do produto entregue

| Pasta | Documento | Por que importa |
|---|---|---|
| `03-operacao/` | guia-de-producao-de-conteudo.md | Garante consistência entre tiers e produtores |
| `01-fundacao/` | proposta-de-valor.md | Value Proposition Canvas para professor e aluno |

### Prioridade 3 — Crescimento e posicionamento

| Pasta | Documento | Por que importa |
|---|---|---|
| `04-comercial/` | analise-de-concorrentes.md | Entender onde o MiStudies se diferencia |
| `05-marca/` | guia-de-social-media.md | Como a marca se comporta em Instagram e LinkedIn |
| `02-oferta-e-financeiro/` | roadmap-de-produto.md | Versão limpa do que será construído e quando |

---

## Contexto base para todos os prompts
> Cole este bloco no início de qualquer prompt antes de pedir o documento específico.

```
Você vai me ajudar a criar um documento estratégico para o MiStudies.

CONTEXTO DO PRODUTO:
- MiStudies é um SaaS educacional B2B+B2C em fase MVP, operado por 3 sócios.
- Proposta central: transformar PDFs e materiais de aula de professores em páginas HTML interativas com design editorial premium.
- Modelo de negócio: professores pagam em 3 etapas (Onboarding → Aulas por tier → Hub mensal). Alunos acessam o acervo gratuitamente.
- Preços: Onboarding Básico R$200 / Branded R$500 / Institucional R$1.000. Aulas: Essencial R$40 / Pro R$75 / Full Studio R$100. Hub: Starter R$49/mês / Pro R$99/mês / Institucional R$249/mês. Aluno assinante: R$14,90/mês.
- Regra comercial canônica: uma aula só fica publicada no MiStudies se houver Setup do Professor + pelo menos 1 Aula MiStudies + Hub do Professor ativo.
- Oferta mínima publicada no MVP: Setup Básico R$200 + 1 Aula Essencial R$40 + Hub Starter R$49/mês = R$289 no primeiro mês.
- Uma Aula MiStudies equivale a um tema fechado, normalmente baseado em até 20 páginas de PDF/DOCX ou até 35 slides; materiais maiores devem virar múltiplas aulas ou orçamento separado.
- Pilotos não são gratuitos: o MiStudies pode oferecer diagnóstico gratuito e escopo reduzido, mas a primeira aula publicada deve ser paga.
- Plano Estudante é receita complementar futura: só deve ser ativado quando houver acervo suficiente e benefícios pagos reais, como downloads, favoritos, kits de revisão e progresso.
- Área de atuação inicial: Engenharia de Produção e Administração.
- Público primário: professores universitários que dominam o conteúdo mas não têm tempo/skill para produção visual premium.
- Público secundário: estudantes que consumem o acervo.
- Tom de voz: direto, claro, próximo sem ser informal, sem abstrações ou jargão inflado. Personalidade: "o colega organizado que já preparou o material e compartilha sem pose".
- Marca: "MiStudies" · Tagline: "Seu estudo, bem resolvido" · Tipografia: Manrope + Inter · Cor principal: #0032b5.
- Fase atual: pré-lançamento, buscando os primeiros 2–3 professores piloto com cobrança desde o início.
```

---

## Prompts por documento

---

### Comercial — ICP: Perfil do Professor Ideal

**Quando usar:** antes de iniciar a prospecção. Define quem abordar e como qualificar leads.
**Arquivo destino:** `docs/04-comercial/icp-professor-ideal.md`

```
[cole o contexto base acima]

Agora crie o documento "ICP — Perfil do Professor Ideal" para o MiStudies.

O documento deve cobrir:

1. PERFIL DEMOGRÁFICO E PROFISSIONAL
   - Cargo, instituição, área de ensino
   - Tempo de carreira (faixa ideal)
   - Relação com tecnologia e produção de conteúdo
   - Onde encontrá-lo (LinkedIn, grupos, eventos, plataformas)

2. DOR CENTRAL
   - O que incomoda esse professor no dia a dia?
   - Onde ele perde mais tempo?
   - Qual é a lacuna entre o conteúdo que ele domina e o material que ele entrega?

3. GATILHOS DE COMPRA
   - O que faz ele considerar pagar por um serviço como o MiStudies?
   - Qual evento ou situação ativa a necessidade?
   - O que ele precisa VER para acreditar que vale a pena?

4. OBJEÇÕES MAIS COMUNS
   - "Meu conteúdo é muito específico para terceirizar"
   - "Não tenho orçamento para isso"
   - "Meu aluno não liga para o design da aula"
   - Como responder a cada uma delas.

5. O QUE ELE NÃO É (anti-ICP)
   - Perfis que parecem ideais mas não convertem
   - Sinais de alerta para não investir esforço de venda

6. JORNADA DE DECISÃO
   - Como ele descobre, avalia e decide contratar
   - Quem mais influencia essa decisão (coordenador, outros professores, alunos)

7. FRASE QUE RESUME ESSE PROFESSOR
   - Uma frase que captura a essência da dor e do desejo dele

Formato: markdown limpo, seções com título H2/H3, tabelas onde couber. Tom: estratégico, objetivo, sem floreios.
```

---

### Comercial — Pitch Comercial para Professores

**Quando usar:** para preparar a abordagem inicial com professores piloto.
**Arquivo destino:** `docs/04-comercial/pitch-comercial.md`

```
[cole o contexto base acima]

Crie o documento "Pitch Comercial — MiStudies para Professores".

Este documento é o roteiro que um sócio usa para apresentar o MiStudies a um professor potencial, seja presencialmente, por videochamada ou numa mensagem mais longa. Deve ter três versões de comprimento:

1. PITCH DE 30 SEGUNDOS (versão oral/mensagem curta)
   - O que é, para quem, qual resultado, quanto custa
   - Sem jargão, sem clichê

2. PITCH DE 3 MINUTOS (versão para reunião ou ligação rápida)
   - Abre com a dor do professor
   - Explica o que o MiStudies faz de diferente
   - Mostra os 3 tiers com clareza
   - Termina com proposta de próximo passo

3. PITCH COMPLETO (versão para apresentação ou proposta por e-mail)
   - Contexto e problema
   - Solução e como funciona (3 etapas: Onboarding → Aulas → Hub)
   - Exemplos de resultado (antes/depois, com links para demos dos 3 tiers)
   - Tabela de preços clara
   - Depoimento ou prova social (pode ser placeholder por ora)
   - Garantia ou proposta de risco zero para o piloto
   - CTA claro: "Vamos começar com 1 aula para você ver o resultado"

4. RESPOSTAS PARA AS 5 OBJEÇÕES MAIS COMUNS
   (baseado no documento `icp-professor-ideal.md`)

Formato: markdown. Tom: direto, confiante, sem ser agressivo. Linguagem como se fosse um colega apresentando para outro colega.
```

---

### Comercial — Templates de Comunicação

**Quando usar:** para padronizar a abordagem e garantir consistência entre os sócios.
**Arquivo destino:** `docs/04-comercial/templates-de-comunicacao.md`

```
[cole o contexto base acima]

Crie o documento "Templates de Comunicação — MiStudies".

Preciso de mensagens prontas para usar nos principais pontos do funil de vendas e entrega. Para cada template: escreva a mensagem, indique o canal ideal e o momento de uso.

Crie os seguintes templates:

1. PROSPECÇÃO INICIAL
   a) LinkedIn — mensagem fria de conexão (até 300 caracteres)
   b) LinkedIn — mensagem de follow-up após conexão aceita
   c) E-mail frio — assunto + corpo (menos de 150 palavras)
   d) WhatsApp — abordagem por indicação de terceiros

2. FOLLOW-UP
   a) Após demonstração sem resposta (3 dias depois)
   b) Após proposta enviada sem resposta (5 dias depois)
   c) Recusa gentil — como manter a porta aberta

3. ONBOARDING DO PROFESSOR
   a) Boas-vindas após primeiro pagamento (e-mail)
   b) Solicitação dos materiais (o que mandar, em qual formato)
   c) Confirmação de recebimento e prazo estimado

4. ENTREGA DA AULA
   a) E-mail de entrega com link da aula publicada
   b) Pedido de feedback após 5 dias

5. RETENÇÃO E UPSELL
   a) Mensagem para oferecer próxima aula / pacote
   b) Convite para aderir ao Hub mensal

Para cada mensagem: [CANAL] [MOMENTO] + texto pronto com [PLACEHOLDERS] em colchetes.
Formato: markdown. Tom: próximo, profissional, sem ser robótico.
```

---

### Operação — Pipeline Manual de Entrega

**Quando usar:** para onboarding dos sócios e garantir que o serviço seja entregue com qualidade e previsibilidade.
**Arquivo destino:** `docs/03-operacao/pipeline-manual-de-entrega.md`

```
[cole o contexto base acima]

Crie o documento "Pipeline Manual de Entrega — MiStudies".

Este documento descreve exatamente o que acontece desde o momento em que um professor paga o onboarding até a aula estar publicada no acervo. É o manual de operação do serviço no MVP.

O documento deve cobrir:

1. VISÃO GERAL DO PROCESSO
   - Diagrama textual das etapas (pode ser fluxo ASCII ou lista com setas)
   - Tempo estimado por etapa
   - SLA total (do pagamento à entrega): sugestão e justificativa

2. ETAPA 1 — ONBOARDING DO PROFESSOR
   - O que o professor precisa entregar
   - Formato aceito (PDF, DOCX, slides, áudio, etc.)
   - Briefing inicial: que perguntas fazer (nível do aluno, objetivo da aula, tom, pontos obrigatórios)
   - Checklist de entrada

3. ETAPA 2 — ANÁLISE DO CONTEÚDO (Skill B2B)
   - Como usar IA para estruturar o diagnóstico
   - O que mapear: estrutura lógica, densidade, lacunas, potencial visual
   - Entregável interno desta etapa

4. ETAPA 3 — PRODUÇÃO DA AULA
   - Diferença de escopo entre Essencial, Pro e Full Studio
   - Checklist de qualidade por tier
   - Ferramentas usadas (HTML, Tailwind, IA, etc.)

5. ETAPA 4 — REVISÃO E APROVAÇÃO
   - Como apresentar a aula ao professor antes de publicar
   - Quantas rodadas de revisão estão incluídas
   - Como documentar o feedback

6. ETAPA 5 — PUBLICAÇÃO E ENTREGA
   - Checklist de publicação (meta tags, slug, taxonomia, tier, privacidade)
   - Como entregar o link ao professor
   - O que o professor recebe além do link

7. GESTÃO DE EXCEÇÕES
   - E se o material do professor for de baixa qualidade?
   - E se o prazo não puder ser cumprido?
   - E se o professor pedir algo fora do escopo do tier?

Formato: markdown com checklists, tabelas e fluxo textual claro.
```

---

### Legal — Contrato Simples / Termos de Serviço para Professores

**Quando usar:** para formalizar o acordo com os primeiros professores piloto.
**Arquivo destino:** `docs/06-legal/contrato-professores-piloto.md`

```
[cole o contexto base acima]

Crie um "Contrato de Prestação de Serviços — MiStudies" simples e funcional para ser usado com professores piloto.

O documento deve ser:
- Legível para leigos (sem juridiquês desnecessário)
- Curto (1–2 páginas quando impresso)
- Completo o suficiente para proteger ambas as partes

Deve cobrir:

1. IDENTIFICAÇÃO DAS PARTES
   - MiStudies (prestador) e o Professor (contratante)
   - Campos: nome, CPF/CNPJ, e-mail, cidade

2. OBJETO DO CONTRATO
   - Descrição clara do serviço (transformação de aula em HTML interativo)
   - Tier contratado e escopo correspondente

3. VALORES E PAGAMENTO
   - Tabela: Onboarding escolhido + valor da aula + Hub se aplicável
   - Forma de pagamento e prazo

4. PRAZO DE ENTREGA
   - SLA por tier (Ex: Essencial: 7 dias úteis / Pro: 10 dias úteis / Full Studio: 14 dias úteis)
   - O que acontece em caso de atraso

5. OBRIGAÇÕES DO PROFESSOR
   - O que ele precisa fornecer e em qual prazo
   - Responsabilidade pela veracidade do conteúdo original

6. OBRIGAÇÕES DO MISTUDIES
   - O que é entregue e em qual formato
   - Quantas revisões estão incluídas
   - Onde o conteúdo será publicado e como

7. PROPRIEDADE INTELECTUAL
   - O conteúdo original pertence ao professor
   - O MiStudies tem direito de publicar e exibir o material produzido
   - Como funciona a remoção a pedido do professor

8. RESCISÃO
   - Como cancelar e o que acontece com o que já foi produzido
   - Política de reembolso (se houver)

9. FORO
   - Cidade e estado para resolução de conflitos

Formato: documento formal mas acessível. Pode usar negrito para termos importantes. Deixar campos entre [COLCHETES] para preenchimento.
```

---

### Operação — Guia de Produção de Conteúdo

**Quando usar:** para padronizar a qualidade das aulas produzidas, independentemente de quem produz.
**Arquivo destino:** `docs/03-operacao/guia-de-producao-de-conteudo.md`

```
[cole o contexto base acima]

Crie o "Guia de Produção de Conteúdo — MiStudies".

Este guia define os padrões de qualidade, estrutura e escopo para produzir aulas em HTML para o acervo. É usado pela equipe de produção (sócios e futuros colaboradores).

O documento deve cobrir:

1. PRINCÍPIOS EDITORIAIS
   - O que diferencia uma aula MiStudies de um slide genérico?
   - 5 princípios que toda aula deve seguir
   - O que NÃO fazer (erros comuns)

2. ESCOPO POR TIER

   ESSENCIAL (R$40):
   - O que está incluído (quantidade de seções, elementos visuais, interatividade)
   - O que NÃO está incluído
   - Tempo estimado de produção
   - Exemplo de estrutura de página

   PRO (R$75):
   - Diferenciais em relação ao Essencial
   - Elementos extras (exercícios? animações? citações?)
   - Tempo estimado de produção

   FULL STUDIO (R$100):
   - O que faz essa aula ser "Full Studio"
   - Nível de interatividade e recursos visuais
   - Tempo estimado de produção
   - Exemplo de estrutura de página

3. ESTRUTURA PADRÃO DE UMA AULA
   - Quais seções uma aula tipicamente tem (Hero, Conceito, Desenvolvimento, Exercícios, Resumo)
   - O que não pode faltar em nenhum tier
   - Ordem lógica recomendada

4. LINGUAGEM E TEXTO
   - Como adaptar o texto original do professor (sem distorcer o conteúdo)
   - Nível de densidade por tier
   - Uso de exemplos, analogias e referências acadêmicas

5. COMPONENTES VISUAIS
   - Quais componentes HTML/Tailwind estão disponíveis (cards, tabelas, badges, etc.)
   - Quando usar cada um
   - O que nunca fazer visualmente

6. TAXONOMIA E METADADOS
   - Como preencher: slug, área, matéria, formato, tier, privacidade, tags
   - Regras de nomenclatura de slugs
   - Checklist de publicação

7. CHECKLIST FINAL POR TIER
   - Lista objetiva de tudo que precisa estar ok antes de entregar

Formato: markdown com tabelas, checklists e exemplos curtos de código HTML onde necessário.
```

---

### Fundação — Proposta de Valor Detalhada

**Quando usar:** para refinar comunicação, landing page e pitch com base em ganhos/dores reais.
**Arquivo destino:** `docs/01-fundacao/proposta-de-valor.md`

```
[cole o contexto base acima]

Crie o documento "Proposta de Valor Detalhada — MiStudies" baseado no framework Value Proposition Canvas.

Faça o canvas para DOIS perfis separados:

PERFIL 1 — PROFESSOR (cliente principal B2B)
PERFIL 2 — ALUNO (usuário secundário B2C)

Para cada perfil, preencha:

SEGMENTO DE CLIENTE:
- Trabalhos a fazer (Jobs to be done): o que ele está tentando realizar?
- Dores: o que frustra, incomoda ou bloqueia?
- Ganhos desejados: o que ele quer como resultado ou benefício?

PROPOSTA DE VALOR:
- Produtos e serviços: o que o MiStudies oferece?
- Aliviadores de dor: como cada dor é endereçada?
- Criadores de ganho: como cada ganho desejado é entregue?

Ao final, adicione:
- A declaração de proposta de valor em 1 frase para cada perfil
- 3 diferenciais competitivos do MiStudies frente a alternativas que esses perfis usam hoje
- O que precisa ser verdade para essa proposta de valor se sustentar no longo prazo

Formato: markdown com seções claras, tabelas e a frase de proposta de valor em destaque (blockquote).
```

---

### Comercial — Análise de Concorrentes

**Quando usar:** para entender o posicionamento do MiStudies e identificar lacunas do mercado.
**Arquivo destino:** `docs/04-comercial/analise-de-concorrentes.md`

```
[cole o contexto base acima]

Crie o documento "Análise de Concorrentes — MiStudies".

Analise o mercado em 3 camadas:

1. CONCORRENTES DIRETOS
   Produtos que fazem algo parecido com o que o MiStudies faz para professores (transformar conteúdo em material digital premium). Pesquise e avalie: Gamma.app, Beautiful.ai, Tome, Canva Edu, Notion templates, serviços de freelancer de design instrucional.
   Para cada um: o que faz, preço, público, ponto forte, ponto fraco, como o MiStudies se diferencia.

2. CONCORRENTES INDIRETOS
   O que professores usam hoje no lugar do MiStudies (mesmo sem ser um concorrente declarado): PowerPoint/Google Slides, Canva, contratar designer freelancer, não fazer nada / manter o PDF.
   Para cada um: por que o professor escolhe isso? O que o MiStudies precisa superar?

3. CONCORRENTES DE ATENÇÃO DO ALUNO
   Plataformas onde o aluno consome conteúdo educacional hoje: YouTube, Passei Direto, Studocu, Khanmigo, ChatGPT.
   Para cada um: o que atrai o aluno? Como o MiStudies co-existe ou compete?

4. MAPA DE POSICIONAMENTO
   Posicione o MiStudies num eixo 2x2 (ex: Qualidade Visual × Custo / Personalização × Velocidade). Onde o MiStudies vive? Onde os concorrentes vivem?

5. OPORTUNIDADE DE POSICIONAMENTO
   Com base na análise: qual é o espaço que nenhum concorrente ocupa bem e que o MiStudies pode reivindicar?

Formato: markdown com tabelas e o mapa de posicionamento descrito em texto. Seja específico — cite produtos reais, preços reais onde souber.
```

---

### Marca — Guia de Social Media

**Quando usar:** quando o MiStudies começar a publicar nas redes.
**Arquivo destino:** `docs/05-marca/guia-de-social-media.md`

```
[cole o contexto base acima]

Crie o "Guia de Social Media — MiStudies".

O guia deve cobrir:

1. OBJETIVOS POR CANAL
   - Instagram: para quê serve? (professores ou alunos?)
   - LinkedIn: para quê serve?
   - Por que NÃO estar em TikTok/YouTube ainda (ou por que estar)

2. PERSONA DE QUEM SEGUE
   - Quem é o seguidor ideal no Instagram?
   - Quem é o seguidor ideal no LinkedIn?

3. TIPOS DE CONTEÚDO
   Para cada canal, defina 4–5 tipos de post com:
   - Nome do formato
   - Objetivo (alcance / conversão / educação / prova social)
   - Exemplo de título
   - Frequência recomendada

4. TOM DE VOZ NAS REDES
   - Diferenças de tom entre Instagram e LinkedIn
   - O que NÃO fazer (evitar hype, evitar linguagem de curso online barato, etc.)
   - Exemplos de como NÃO escrever vs como escrever

5. ELEMENTOS VISUAIS
   - Paleta e tipografia nos posts (alinhados ao Brandbook)
   - Estilo de imagem / mockup
   - O que o feed do Instagram deve comunicar visualmente

6. MÉTRICAS QUE IMPORTAM
   - Quais métricas acompanhar por canal
   - O que indica que está funcionando no MVP (não precisa de vanity metrics)

Formato: markdown. Tom: prático, sem teoria de marketing desnecessária.
```

---

### Oferta e Financeiro — Roadmap de Produto

**Quando usar:** para alinhar a equipe e comunicar a visão de evolução do produto.
**Arquivo destino:** `docs/02-oferta-e-financeiro/roadmap-de-produto.md`

```
[cole o contexto base acima]

Crie o "Roadmap de Produto — MiStudies".

Contexto técnico atual: produto é 100% HTML/CSS/JS estático, sem backend, sem auth real, sem banco de dados. Hospedagem pendente (GitHub Pages ou Vercel). Os sócios são os desenvolvedores.

O roadmap deve ser organizado em fases, não em datas fixas. Para cada fase:
- Objetivo estratégico da fase (o que ela prova ou destrava)
- Features incluídas (com nível de esforço: P, M, G)
- Features explicitamente de fora (o que NÃO entra ainda e por quê)
- Critério de conclusão (como saber que a fase foi cumprida)

FASE 1 — MVP estático (já feito, documentar)
FASE 2 — Operação real (primeiros pagamentos e entregas)
FASE 3 — Auth + pagamento online
FASE 4 — Dashboard funcional (upload real, aulas gerenciadas)
FASE 5 — Escala (automação, multi-professor, analytics)

Para cada feature, inclua: nome, descrição em 1 linha, quem usa (professor/aluno/interno), esforço estimado.

Ao final, adicione uma seção "O que nunca vai entrar no MiStudies" — decisões de escopo negativas que protegem o foco do produto.

Formato: markdown com tabelas e seções por fase.
```

---

## Como usar estes prompts

1. Abra o Codex ou o ChatGPT.
2. Cole o **bloco de contexto base** primeiro.
3. Cole o **prompt do documento que quer gerar**.
4. Se o resultado tiver lacunas, peça: *"Expanda a seção X com mais detalhes específicos para o contexto do MiStudies"*.
5. Salve o resultado no arquivo destino indicado em cada prompt, por exemplo `docs/04-comercial/icp-professor-ideal.md`.
6. Atualize o índice em `docs/00-indice.md` e o backlog em `docs/08-gestao/backlog-geral.md`.

**Ordem sugerida de geração**

```text
04-comercial/icp-professor-ideal.md          antes de prospectar
04-comercial/pitch-comercial.md              antes de abordar
04-comercial/templates-de-comunicacao.md     antes de mandar mensagem
03-operacao/pipeline-manual-de-entrega.md    antes de assinar piloto
06-legal/contrato-professores-piloto.md      antes de assinar piloto
03-operacao/guia-de-producao-de-conteudo.md  antes de produzir a 1ª aula paga
01-fundacao/proposta-de-valor.md             refinamento de comunicação
04-comercial/analise-de-concorrentes.md      posicionamento
05-marca/guia-de-social-media.md             quando começar a publicar
02-oferta-e-financeiro/roadmap-de-produto.md quando tiver dados reais
```

---

*Criado em Abril 2026 · Atualizar conforme documentos forem gerados*