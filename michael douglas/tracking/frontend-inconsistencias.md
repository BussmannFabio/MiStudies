# Frontend — Inconsistências, Links Quebrados e Botões Mortos
> Auditoria completa · Abril 2026 · HTML/CSS/JS estático — sem framework

---

## Legenda

- 🔴 **Alta** — bloqueia fluxo do usuário (clique resulta em 404 ou nada)
- 🟠 **Média** — UX ruim, mas não impede navegação principal
- 🟡 **Baixa** — cosmético ou esperado no MVP
- ✅ **Resolvido**

---

## 🔴 ALTA — Bloqueia fluxo

---

### #F01 — 12 cards no acervo não levam a lugar nenhum

**Arquivo:** `pages/acervo.html` · linhas 257–356 (array `CONTEUDOS`)

Os 12 itens abaixo têm `arquivo: '#'` no array de dados. O JS em `acervo.html` detecta o `#` e não faz redirect — o card aparece clicável visualmente mas não acontece nada ao clicar.

| ID | Título | Professor |
|---|---|---|
| 1 | Fundamentos do Marketing Mix (4Ps) | Prof. Ana |
| 2 | Segmentação e Posicionamento de Mercado | Prof. Ana |
| 3 | Branding e Gestão de Marca | Prof. Ana |
| 4 | Análise de Demonstrações Financeiras | Prof. Carlos |
| 5 | Fluxo de Caixa e Capital de Giro | Prof. Carlos |
| 6 | Distribuição Normal e Desvio Padrão | Prof. Ana |
| 7 | Regressão Linear Simples | Prof. Ana |
| 8 | Recrutamento e Seleção de Pessoas | Prof. Marta |
| 9 | Avaliação de Desempenho e Feedback | Prof. Marta |
| 10 | Tipos de Sociedade Empresarial | Prof. João |
| 11 | Gestão de Estoque e Armazenagem | Prof. Roberto |
| 12 | Planejamento da Cadeia de Suprimentos | Prof. Roberto |

**Correção:** criar os arquivos `pages/acervo/[slug].html` para cada conteúdo e atualizar o campo `arquivo` no array — OU, enquanto não existem, exibir badge "Em breve" e desabilitar o cursor no card (`cursor-not-allowed`, `pointer-events: none`).

---

### #F02 — 5 perfis de professor sem página criada

**Arquivo:** `pages/acervo.html` · linha 559

O JS gera um link `professor/${c.prof_slug}.html` para cada professor com slug. Cinco slugs referenciam arquivos que não existem em `pages/professor/`:

| Slug | Arquivo esperado | Existe? |
|---|---|---|
| `prof-ana` | `pages/professor/prof-ana.html` | ❌ |
| `prof-carlos` | `pages/professor/prof-carlos.html` | ❌ |
| `prof-marta` | `pages/professor/prof-marta.html` | ❌ |
| `prof-joao` | `pages/professor/prof-joao.html` | ❌ |
| `prof-roberto` | `pages/professor/prof-roberto.html` | ❌ |

Apenas `pages/professor/gabriel.html` existe.

**Correção:** criar as páginas usando `gabriel.html` como template — OU remover o campo `prof_slug` dos conteúdos #F01 enquanto os professores não estiverem cadastrados, exibindo apenas o nome em texto sem link.

---

## 🟠 MÉDIA — UX ruim

---

### #F03 — Footer do index.html: 3 links em inglês apontando para `#`

**Arquivo:** `index.html` · linhas 251–253

```html
<a href="#">Terms</a>
<a href="#">Privacy</a>
<a href="#">Support</a>
```

Problemas duplos: (1) links mortos, (2) texto em inglês num produto em português.

**Correção:** criar `pages/termos.html`, `pages/privacidade.html`, `pages/suporte.html` e atualizar os `href`. Enquanto não existem, remover os links ou substituir por texto simples.

---

### #F04 — Cadastro: Termos de Uso e Política de Privacidade sem página

**Arquivo:** `pages/cadastro.html` · linhas 228–229

```html
<a href="#">Termos de Uso</a> e
<a href="#">Política de Privacidade</a>
```

Exibidos no checkbox da etapa 2 do cadastro ("Concordo com os…"). Usuário não consegue ler o que está aceitando.

**Correção:** criar as páginas ou, temporariamente, redirecionar para um Google Docs / Notion público com o texto provisório. Necessário antes de qualquer professor piloto assinar.

---

### #F05 — Login: "Esqueci minha senha" sem funcionalidade

**Arquivo:** `pages/login.html` · linha 95

```html
<a href="#">Esqueci minha senha</a>
```

Clique não faz nada. Não há lógica de reset de senha implementada (esperado no MVP sem backend).

**Correção MVP:** substituir o link por um `<span>` com tooltip ou mensagem inline: *"Para recuperar o acesso, entre em contato via [e-mail/WhatsApp]."* — evita a expectativa de um fluxo automático.

---

### ✅ #F06 — Páginas demo sem ponto de entrada na navegação — RESOLVIDO

**Arquivos:** `pages/demo/aula-essencial.html`, `pages/demo/aula-pro.html`, `pages/demo/aula-full-studio.html`

As 3 demos existem e funcionam, mas não há nenhum link em nenhuma página que leve até elas. Só são acessíveis via URL direta. A `pages/planos-precos.html` seria o local natural para linkar cada demo ao seu tier correspondente.

**Correção:** adicionar em `planos-precos.html`, na descrição de cada tier, um botão "Ver demo" apontando para a demo correspondente.

| Tier | Demo | Link a adicionar |
|---|---|---|
| Essencial | `pages/demo/aula-essencial.html` | botão no card Essencial |
| Pro | `pages/demo/aula-pro.html` | botão no card Pro |
| Full Studio | `pages/demo/aula-full-studio.html` | botão no card Full Studio |

---

### #F07 — `plano-rentabilidade.html` acessível publicamente sem aviso

**Arquivo:** `pages/plano-rentabilidade.html`

Ferramenta interna de planejamento financeiro indexável por qualquer buscador. Não há nenhum aviso de "uso interno" e nenhum link de entrada na navegação pública (correto), mas também não tem `<meta name="robots" content="noindex">`.

**Correção:** adicionar `<meta name="robots" content="noindex, nofollow">` no `<head>` do arquivo.

---

## 🟡 BAIXA — Cosmético / esperado no MVP

---

### #F08 — `Brandbook.html` e `conteúdoANA.html`: arquivos órfãos na raiz

**Arquivos:** `Brandbook.html`, `conteúdoANA.html` (ambos na raiz do projeto)

Nenhum dos dois é linkado em qualquer página do site. Existem mas são inacessíveis via navegação normal.

- `Brandbook.html` parece ser documentação de identidade visual — candidato a mover para `pages/interno/` ou deletar
- `conteúdoANA.html` parece ser conteúdo de teste/rascunho — candidato a deletar

**Correção:** confirmar propósito de cada arquivo. Se não há uso ativo, deletar para manter o repositório limpo.

---

### #F09 — `Brandbook.html`: 6 botões de demonstração apontando para `#`

**Arquivo:** `Brandbook.html`

Botões de exemplo do sistema de design (Explorar biblioteca, Começar agora, Ver materiais, Saiba mais, Criar conta, Continuar lendo) todos com `href="#"`. São demos visuais de componentes — comportamento esperado para um brandbook. Não é problema funcional.

**Correção:** nenhuma necessária, mas adicionar um comentário HTML acima do bloco explicando que são demos: `<!-- Demonstração de componentes — não funcionais -->`.

---

## Status geral

| Severidade | Total | Resolvidos | Em aberto |
|---|---|---|---|
| 🔴 Alta | 2 | 2 ✅ | 0 |
| 🟠 Média | 5 | 1 ✅ | 4 |
| 🟡 Baixa | 2 | 0 | 2 |
| **Total** | **9** | **3 ✅** | **6** |

---

## Ordem de correção recomendada

```
ANTES DE QUALQUER PROFESSOR PILOTO VER O SITE:
  [X] #F01 — Desabilitar cursor nos 12 cards sem conteúdo (pointer-events: none + badge "Em breve")
  [X] #F02 — Remover links de professor sem página (exibir nome sem link)
  [ ] #F04 — Termos de Uso e Política de Privacidade (mínimo: link para doc externo) · issue #50

ANTES DO LANÇAMENTO PÚBLICO:
  [ ] #F03 — Criar pages/termos.html + pages/privacidade.html, traduzir footer · issue #49
  [ ] #F05 — Substituir "Esqueci minha senha" por mensagem de contato · issue #51
  [X] #F06 — Linkar demos em planos-precos.html
  [ ] #F07 — Adicionar noindex em plano-rentabilidade.html · issue #52

LIMPEZA DO REPOSITÓRIO:
  [ ] #F08 — Decidir sobre Brandbook.html e conteúdoANA.html · issue #53
  [ ] #F09 — Comentar bloco de demos no Brandbook.html
```

---

*Última atualização: Abril 2026 · Auditoria manual de 16 arquivos HTML*
