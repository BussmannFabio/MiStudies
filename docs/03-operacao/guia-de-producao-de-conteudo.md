# Guia de Produção de Conteúdo — MiStudies

> Padrão operacional para transformar materiais de professores em aulas HTML. Fontes: [Catálogo](../02-oferta-e-financeiro/catalogo-produtos-e-precos.md), [Pipeline](pipeline-manual-de-entrega.md) e [Brandbook](../05-marca/brandbook.md).

## 1. Princípios editoriais

Uma aula MiStudies não é um PDF transcrito nem um slide decorado. É um tema fechado, reorganizado para leitura digital, com fidelidade ao professor.

1. **Clareza antes de volume:** cada bloco ajuda a entender, aplicar ou revisar.
2. **Fidelidade com curadoria:** melhorar ordem e linguagem sem alterar tese ou rigor.
3. **Beleza funcional:** visual e interação reduzem atrito; enfeite sem função sai.
4. **Progressão didática:** contexto → desenvolvimento → aplicação → síntese.
5. **Revisão humana:** IA acelera; não aprova fatos nem publica.

Não inventar dados, exemplos, citações ou fontes; ocultar lacunas; transformar tudo em card/interação; gerar HTML antes do Markdown aprovado; nem publicar fora do escopo.

## 2. Unidade e entrada

Uma aula cobre **um tema fechado**, normalmente uma sessão de 60–120 minutos ou módulo independente. Entrada padrão: até 20 páginas de PDF/DOCX, 35 slides ou volume equivalente. Material maior ou com objetivos autônomos vira mais de uma aula ou orçamento separado.

Registrar objetivo, público, pré-requisitos, pontos obrigatórios, fontes, autoria, permissão, privacidade, tier, prazo, revisão e destino (preview privado ou Hub).

## 3. Escopo por tier

| Critério | Essencial | Pro | Full Studio |
|---|---|---|---|
| Preço vigente* | R$ 40 | R$ 75 | R$ 100 |
| Seções | 4–6 | 6–10 | 8–12 |
| Interatividade | Baixa | Média | Alta |
| Pesquisa | Apoio básico | Moderada; 3–5 fontes quando útil | Profunda, com referências/glossário quando cabível |
| Revisões | 1 leve | 1 completa | 2 |
| Tempo interno | ~2,5 h | ~4,7 h | ~8 h |
| SLA | 3–5 dias úteis | 5–7 dias úteis | 7–10 dias úteis |

\* Hipóteses comerciais até o custo real ser validado; isso não amplia o escopo.

### Essencial

Fonte clara, curta e linear. HTML estático responsivo, cards, listas, destaques, tabelas simples e metadados. Sem tabs, quiz, flashcards, animação, pesquisa extensa ou identidade customizada. Estrutura: Hero → objetivo → 2–3 blocos → aplicação → resumo.

### Pro

Tema com comparação, processo, exemplos ou leitura em camadas. Soma acordeões, tabs, tooltips, timeline e tabelas trabalhadas quando úteis; pesquisa moderada; paleta do professor se houver Setup Branded. Não inclui simulação sob medida, banco amplo de questões ou pacote Full Studio.

### Full Studio

Aula vitrine/institucional. Soma quiz, flashcards, modo apresentação, progresso e glossário quando justificados; pesquisa aprofundada; identidade já definida. Não inclui vídeo, locução, 3D, LMS, correção individual ou software customizado.

## 4. Estrutura padrão

1. **Hero:** título, descrição, professor, matéria, formato e tier.
2. **Orientação:** objetivo ou pergunta-guia.
3. **Conceitos-base:** definições e pré-requisitos.
4. **Desenvolvimento:** uma ideia principal por seção.
5. **Aplicação:** exemplo, caso, tabela, fluxo ou exercício validado.
6. **Síntese:** essenciais e retorno ao objetivo.
7. **Referências:** fontes realmente usadas.

Todo tier exige objetivo, hierarquia, síntese, autoria, metadados, responsividade e referências quando houver pesquisa.

## 5. Linguagem

Extrair afirmações; separar fato, interpretação e exemplo; reordenar apenas para melhorar progressão; simplificar sem apagar termos técnicos; marcar dúvidas; aprovar Markdown antes do HTML. Explicar siglas, preservar fórmulas, unidades e ressalvas. Citações precisam de fonte. O tier muda pesquisa e apresentação, não a correção factual.

## 6. Componentes e visual

| Componente | Use para | Evite quando |
|---|---|---|
| Card/lista | Ideia autocontida/passos | A leitura precisa ser contínua |
| Tabela | Comparação | O mobile ficar ilegível |
| Badge/callout | Status, regra ou alerta | For decorativo/competitivo |
| Timeline | Processo | A ordem não importar |
| Acordeão/tab | Complemento | Esconder informação essencial |
| Quiz/flashcard | Recuperação ativa | Não houver resposta validada |

Usar Primary `#0032b5`, Primary Bright `#0344ec`, Secondary `#006a6a`, Amber `#f59e0b` e superfície `#f8f9fa`; Manrope nos títulos, Inter no corpo e JetBrains Mono em código/dados. Garantir contraste, foco, teclado e semântica. Evitar stock genérico, sombras pesadas, 3D e animação gratuita.

## 7. Taxonomia e metadados

| Campo | Regra |
|---|---|
| `slug` | minúsculas, sem acento, com hífen; estável após publicar |
| título/descrição | tema específico; descrição em 2–3 linhas |
| área/matéria | taxonomia validada; foco inicial em Administração/Eng. de Produção |
| formato | Resumo, Aula, Slide ou Masterclass |
| tier | Essencial, Pro ou Full Studio |
| privacidade | `publico`, `assinantes` ou `privado` |
| tags/professor | termos específicos; nome e slug do perfil quando existir |

Exemplo: `planejamento-e-controle-da-producao`. Evitar `aula-final`, datas e versões.

## 8. Gates e checklist

| Gate | Evidência |
|---|---|
| Entrada | briefing, material, permissão, tier e escopo |
| Diagnóstico | tema cabe em uma aula; lacunas marcadas |
| Markdown | fatos, estrutura e fontes aprovados pela equipe e professor |
| HTML | fidelidade, responsividade e acessibilidade checadas |
| Publicação | aprovação, metadados e Hub ativo ou destino privado |

- [ ] Escopo, tier, estrutura e revisão contratada conferem.
- [ ] Nenhuma afirmação, fonte ou métrica foi inventada.
- [ ] Terminologia, fórmulas, unidades e autoria foram preservadas.
- [ ] HTML semântico, responsivo, acessível e testado.
- [ ] Slug, privacidade, professor, formato, tags e tier corretos.
- [ ] Aprovação registrada.
- [ ] Publicação segue Setup + Aula + Hub ativo; caso contrário, é privada.

Fonte incompleta: pausar. Conflito factual: levar ao professor. Pedido fora do tier: registrar e oferecer upgrade/nova aula. Publicação bloqueada: entregar preview privado e explicar o gate. Nunca absorver desvio silenciosamente.
