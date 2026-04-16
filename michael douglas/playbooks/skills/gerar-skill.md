# Skill: Gerar Skill

> **Objetivo:** A partir de uma descrição de processo repetitivo, gerar um arquivo `.md` de skill completo, pronto para uso — seguindo o padrão MiStudies.
> **Quando usar:** sempre que um processo se repetir mais de 2 vezes e puder ser sistematizado.
> **Entradas:** descrição do processo (pode ser vaga — a skill faz as perguntas certas)
> **Saídas:** arquivo `.md` de skill completo, salvo em `michael douglas/playbooks/skills/`

---

## Instruções de uso

```
Quero criar uma skill para [descrição do processo].
```

Exemplos válidos:
- "Quero criar uma skill para analisar o PDF de um professor"
- "Quero criar uma skill que faz briefing de projeto"
- "Cria uma skill pra gerar post no LinkedIn a partir de uma aula publicada"
- "Preciso de uma skill que revisa aula antes de entregar"

A descrição pode ser incompleta. A skill vai completar o que faltar com perguntas ou inferências.

---

## Fluxo de trabalho

### Etapa 1 — Entender o processo

Antes de gerar qualquer coisa, responda internamente:

```
1. Qual é o GATILHO? (o que faz alguém precisar desta skill?)
2. Quem executa? (sócio / IA / aluno / professor)
3. O que entra? (inputs concretos: arquivo, texto, dados, contexto)
4. O que sai? (output concreto: documento, código, lista, mensagem)
5. Quais são as REGRAS que não podem ser violadas neste processo?
6. Quais são os ERROS mais comuns sem a skill?
7. Como saber que a skill funcionou? (critério de sucesso)
```

Se alguma dessas respostas for ambígua ou ausente, **pergunte antes de gerar**.
Não gere skill com lacunas — skill com lacuna vira ruído, não processo.

---

### Etapa 2 — Perguntas de clarificação (se necessário)

Faça no máximo 3 perguntas de uma vez. Exemplos:

```
Para gerar a skill de [nome], preciso entender:

1. [pergunta sobre input]
2. [pergunta sobre output ou formato]
3. [pergunta sobre regra crítica ou exceção]
```

Só avance para a Etapa 3 quando as respostas permitirem preencher os 7 pontos acima.

---

### Etapa 3 — Gerar o arquivo da skill

Produza o arquivo `.md` completo seguindo a estrutura padrão abaixo.

**Regras de geração:**

- **Nome do arquivo:** `[verbo]_[substantivo].md` em snake_case, sem acentos (ex: `revisar_aula.md`, `gerar_post_social.md`)
- **Cada seção deve ter conteúdo real** — sem placeholders genéricos tipo "adicione aqui"
- **Instruções de uso devem ser invocáveis por texto** — o usuário deve conseguir copiar e colar para usar
- **Fluxo de trabalho em etapas numeradas** — não em parágrafos soltos
- **Regras em formato proibitivo claro** — "nunca faça X", "sempre faça Y"
- **Checklist de qualidade no final** — itens concretos e verificáveis, não abstratos
- **Tom:** direto, imperativo, sem floreios — é manual de operação, não texto de marketing

---

## Estrutura padrão de saída

```markdown
# Skill: [Nome legível]

> **Objetivo:** [1 frase — o que essa skill faz]
> **Quando usar:** [gatilho específico]
> **Entradas:** [lista do que precisa ser fornecido]
> **Saídas:** [lista do que é entregue]

---

## Instruções de uso

\`\`\`
[Como invocar — texto que o usuário digita ou cola]
\`\`\`

[O que fornecer junto, em qual formato]

---

## Fluxo de trabalho

### Etapa 1 — [Nome da etapa]
[O que fazer, passo a passo]

### Etapa 2 — [Nome da etapa]
[...]

### Etapa N — [Nome da etapa]
[...]

---

## Regras

- **Sempre:** [regra positiva]
- **Nunca:** [regra negativa]
- **Se X acontecer:** [comportamento esperado]

---

## Formato de saída

[Template ou exemplo concreto do que é entregue]

---

## Checklist de qualidade

- [ ] [item verificável]
- [ ] [item verificável]
- [ ] [item verificável]
```

---

## Regras desta skill

- **Nunca** gere uma skill genérica que poderia servir para qualquer produto — toda skill deve referenciar o contexto do MiStudies quando relevante (tiers, taxonomia, tokens de design, tom de voz)
- **Nunca** deixe a seção "Formato de saída" vaga — ela deve ter um template real ou exemplo concreto
- **Sempre** inclua pelo menos 5 itens no checklist de qualidade
- **Sempre** que a skill produzir um arquivo (HTML, MD, JS), especifique o caminho exato onde deve ser salvo
- **Se o processo descrito já existir** (total ou parcialmente) em `playbooks/skills/`, sinalize antes de criar — pode ser expansão, não skill nova
- **Se a skill for muito ampla** (ex: "fazer todo o pipeline de produção"), quebre em skills menores e liste quais criar

---

## Checklist de qualidade da skill gerada

- [ ] Nome do arquivo em snake_case sem acentos?
- [ ] Objetivo em 1 frase clara e específica?
- [ ] Gatilho de uso é concreto (não "quando necessário")?
- [ ] Entradas e saídas são listas concretas, não abstratas?
- [ ] Fluxo de trabalho tem etapas numeradas e acionáveis?
- [ ] Regras têm pelo menos 1 proibitiva ("nunca") e 1 obrigatória ("sempre")?
- [ ] Formato de saída tem template ou exemplo real?
- [ ] Checklist tem no mínimo 5 itens verificáveis?
- [ ] A skill não duplica nenhuma já existente em `playbooks/skills/`?
- [ ] O nome do arquivo foi sugerido para salvar em `michael douglas/playbooks/skills/`?
