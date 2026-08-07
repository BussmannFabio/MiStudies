# 🎓 Skill: Gerar Resumo Acadêmico Completo

> **Objetivo**: Gerar resumos acadêmicos completos, didáticos e embasados em documentação sólida, a partir de um PDF de conteúdo de aula. O resultado final é um arquivo Markdown premium, pronto para ser convertido em página HTML.

---

## 📋 INSTRUÇÕES DE USO

### Como invocar esta skill

```
@gerar_resumo [nome da matéria]
```

O usuário deve:
1. Referenciar ou colar o conteúdo do PDF de base
2. Informar qual é a matéria/disciplina
3. (Opcional) indicar qual professor, para carregar a skill correspondente

---

## 🔄 FLUXO DE TRABALHO

### Etapa 1 — Coleta de Contexto

1. **Identificar a disciplina e o professor**
   - Verificar se existe uma skill do professor em `faculdade/professores/professor_[nome].md`
   - Se existir, carregar as diretrizes metodológicas dessa skill
   - Se não existir, perguntar ao usuário se deseja criar uma ou prosseguir sem

2. **Receber o conteúdo-base**
   - O usuário vai colar o conteúdo de um PDF ou referenciar o arquivo
   - Ler e mapear todos os tópicos, conceitos e estruturas do PDF

3. **Perguntar ao usuário** (quando necessário):
   - Esse resumo é para prova, trabalho ou estudo geral?
   - Há algum tópico que o professor enfatizou em aula?
   - Deseja incluir exercícios resolvidos?

---

### Etapa 2 — Pesquisa e Embasamento

> ⚠️ **REGRA CRÍTICA**: Nenhum resumo deve ser baseado apenas no PDF. Sempre pesquisar fontes complementares para enriquecer, validar e aprofundar o conteúdo.

1. **Pesquisar fontes externas sólidas** para cada tópico principal:
   - Artigos acadêmicos (ResearchGate, Scielo, repositórios universitários)
   - Sites especializados e técnicos da área
   - Livros-texto de referência da disciplina (citar edição e autor)
   - Normas técnicas quando aplicável (ISO, ABNT, JIPM, PMBOK, etc.)

2. **Coletar no mínimo 10-20 referências** de fontes confiáveis
   - Priorizar fontes .edu, .gov, publicações peer-reviewed
   - Incluir fontes em português E inglês
   - Registrar URL completa de cada fonte

3. **Cruzar informações**: validar o que o PDF afirma contra as fontes externas
   - Se houver divergência, informar ambas as versões e indicar qual é mais aceita

---

### Etapa 3 — Estruturação do Resumo

Montar o resumo seguindo a **ESTRUTURA-PADRÃO** (ver seção abaixo), adaptando conforme:
- As diretrizes do professor (se houver skill carregada)
- A natureza da matéria (exatas → mais fórmulas; humanas → mais teoria)
- O objetivo do resumo (prova → revisão rápida; estudo → profundidade)

---

### Etapa 4 — Geração do Conteúdo

Para CADA seção do resumo, seguir estas regras:

#### Regras de Conteúdo
- **Profundidade**: Nunca ser superficial. Cobrir teoria + aplicação + contexto + exemplos
- **Precisão**: Usar terminologia técnica correta. Quando um conceito tem nome formal, usá-lo
- **Didática**: Explicar como se estivesse ensinando para alguém que viu o tema pela primeira vez
- **Fluxo lógico**: Cada seção deve fluir naturalmente para a próxima
- **Prática**: Todo conceito teórico deve ter pelo menos um exemplo prático ou aplicação real

#### Regras de Formatação

##### Hierarquia de Títulos
```
# Título Principal do Tema
## 🔹 Seções Principais
### Sub-tópicos
#### Detalhes quando necessário
```

##### Definições e Conceitos-Chave
Usar blockquotes para destacar definições:
```markdown
> **Conceito X**
>
> Definição clara e precisa do conceito, com suas implicações.
```

##### Tabelas Comparativas
Sempre que houver 2+ itens comparáveis, usar tabela:
```markdown
| Critério | Opção A | Opção B |
|---|---|---|
| Característica 1 | Valor | Valor |
| Característica 2 | Valor | Valor |
```

##### Fórmulas Matemáticas
- Fórmulas simples: usar `código inline`
- Fórmulas complexas: usar notação LaTeX com `$$`
- **SEMPRE** incluir a legenda de cada variável
- **SEMPRE** incluir exemplo numérico passo a passo após a fórmula

##### Emojis como Ícones de Seção
Usar estes emojis padronizados:
| Emoji | Uso |
|---|---|
| 📚 | Introdução / Contexto histórico |
| 🔹 | Seção principal de conteúdo |
| 📊 | Fórmulas, cálculos, dados quantitativos |
| 📌 | Exemplos práticos e aplicações |
| 📋 | Tabelas-resumo e quadros |
| 🔑 | Glossário e termos-chave |
| ❓ | Revisão rápida / Perguntas |
| 📖 | Referências |
| ⚠️ | Atenção / Pegadinhas / Erros comuns |
| 🎯 | Observações importantes / Dicas |
| ✅ | Vantagens |
| ❌ | Desvantagens |

##### Separadores
Usar `---` entre seções principais para criar divisão visual clara.

##### Destaques
- **Negrito** para termos essenciais
- *Itálico* para termos em inglês ou nomes próprios
- `Código` para fórmulas curtas e variáveis

---

### Etapa 5 — Revisão e Qualidade

Antes de entregar, verificar o checklist:

- [ ] O resumo cobre 100% dos tópicos do PDF original?
- [ ] Cada conceito teórico tem pelo menos um exemplo prático?
- [ ] As fórmulas têm legenda de variáveis E exemplo numérico?
- [ ] As tabelas comparativas estão onde fazem sentido?
- [ ] Há pelo menos 10 referências externas sólidas?
- [ ] A seção de Revisão Rápida cobre os pontos mais cobrados em prova?
- [ ] O glossário inclui todos os termos técnicos relevantes?
- [ ] O tom está didático e claro, sem ser simplista?
- [ ] As diretrizes do professor foram seguidas (se aplicável)?
- [ ] O resumo segue a estrutura-padrão abaixo?

---

## 📐 ESTRUTURA-PADRÃO DO RESUMO

Todo resumo gerado DEVE seguir esta estrutura base. Seções podem ser adicionadas, mas estas são obrigatórias:

```markdown
# [Título do Tema] — Resumo Completo

> [Disciplina] · [Professor] · [Etapa/Período]

(Parágrafo introdutório denso com contexto, relevância e conexão
com a disciplina. Entre 3-5 linhas. Deve situar o leitor e
despertar interesse.)

---

## 📚 Contexto e Fundamentos
(Origem histórica, evolução do conceito, por que isso importa.
Usar linha do tempo quando aplicável.)

---

## 🔹 [Seção Principal 1 — Nome do Tópico]

(Conteúdo denso: teoria + definições em blockquote + exemplos)

### [Sub-tópico 1.1]
### [Sub-tópico 1.2]

---

## 🔹 [Seção Principal 2 — Nome do Tópico]

(Seguir o mesmo padrão. Quantidade de seções depende do conteúdo.)

---

## 🔹 [Seção Principal N]

---

## 📊 Fórmulas e Cálculos
(Quando aplicável — todas as fórmulas da matéria,
 com legenda + exemplo numérico resolvido passo a passo)

---

## 📌 Exemplos Práticos e Aplicações
(Estudos de caso reais, exercícios resolvidos,
 cenários de aplicação no mundo real)

---

## 📋 Tabelas-Resumo
(Quadros comparativos consolidados, classificações,
 referência rápida para revisão)

---

## 🔑 Glossário de Termos-Chave

| Termo | Definição |
|---|---|
| **Termo 1** | Definição clara e direta |
| **Termo 2** | Definição clara e direta |

---

## ❓ Revisão Rápida

(Perguntas e respostas curtas cobrindo os pontos essenciais.
 Alinhar ao estilo de prova do professor quando possível.)

**1. [Pergunta]?**
Resposta.

**2. [Pergunta]?**
Resposta.

---

## 📖 Referências

1. [Título/Autor] — URL
2. [Título/Autor] — URL
...
(Mínimo 10 referências de fontes sólidas e verificáveis)
```

---

## 🔗 INTEGRAÇÃO COM SKILL DO PROFESSOR

Quando uma skill de professor estiver disponível, ela será carregada ANTES da geração e suas diretrizes serão aplicadas assim:

| Campo da Skill do Professor | Como Afeta o Resumo |
|---|---|
| **Metodologia de avaliação** | Adapta a seção "Revisão Rápida" ao formato da prova |
| **Ênfases do professor** | Aprofunda e destaca mais os tópicos priorizados |
| **Formato de questões** | Molda os exercícios (múltipla escolha, cálculo, dissertativa) |
| **Observações gerais** | Ajustes de tom, profundidade e formato |
| **Pontos que valem nota** | Cria seção especial de "⚠️ Atenção Especial" |

---

## 📂 ONDE SALVAR

O resumo gerado deve ser salvo em:
```
c:\Users\Gabriel\Documents\Meu Espaço\faculdade\resumos faculdade\[Nome da Matéria].md
```

---

## ⚙️ CONFIGURAÇÕES AVANÇADAS

### Nível de Detalhamento
- **Modo Completo** (padrão): Resumo extenso, 800+ linhas, cobre tudo
- **Modo Focado**: Resumo direcionado aos tópicos que o professor prioriza
- **Modo Revisão**: Versão condensada com tabelas, fórmulas e revisão rápida

### Complementação Iterativa
O usuário pode, após a geração inicial:
- Pedir para aprofundar uma seção específica
- Adicionar mais exercícios resolvidos
- Incluir novos tópicos de PDFs complementares
- Ajustar o formato baseado em feedback

---

## 💡 NOTAS IMPORTANTES

1. **Qualidade > Velocidade**: Prefira gerar um resumo mais demorado mas completo do que um rápido e superficial
2. **Fontes são obrigatórias**: Todo resumo deve ter referências externas verificáveis
3. **O PDF é ponto de partida, não limite**: O resumo deve ir ALÉM do PDF, complementando com pesquisa
4. **Formatação importa**: O resumo deve ser visualmente organizado e agradável para estudo
5. **Adaptabilidade**: Cada matéria tem sua natureza — adapte o formato (mais tabelas para gestão, mais fórmulas para exatas, mais teoria para humanas)
