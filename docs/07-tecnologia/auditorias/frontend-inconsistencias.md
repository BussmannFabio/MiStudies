# Frontend — Inconsistências, Links Quebrados e Botões Mortos
> Auditoria completa · Abril 2026 · HTML/CSS/JS estático — sem framework
> **Última revisão: Julho 2026 (condensado — itens resolvidos resumidos em tabela)**

---

## Legenda

- 🔴 **Alta** — bloqueia fluxo do usuário (clique resulta em 404 ou nada)
- 🟠 **Média** — UX ruim, mas não impede navegação principal
- 🟡 **Baixa** — cosmético ou esperado no MVP
- ✅ **Resolvido**

---

## ✅ Itens resolvidos (3 de 9) — resumo

| # | Severidade | Item | Resolução |
|---|---|---|---|
| F01 | 🔴 | 12 cards no acervo sem link (`arquivo: '#'`) | Cursor desabilitado + badge "Em breve" nos cards sem conteúdo |
| F02 | 🔴 | 5 perfis de professor sem página criada | Links de professor sem página removidos (nome exibido sem link) |
| F06 | 🟠 | Páginas demo sem ponto de entrada na navegação | Demos linkadas em `planos-precos.html`, uma por tier |

---

## 🟠 Itens abertos — Média

> Nota da consolidação (Jul/2026): a versão anterior deste arquivo tinha uma contradição — a tabela de status contava só #F06 como resolvido entre as médias, mas o checklist no rodapé marcava #F05 e #F07 como feitos `[X]`. Como o código-fonte não estava disponível para confirmar, os dois voltam como abertos aqui. Vale uma checagem rápida no `login.html` e no `plano-rentabilidade.html` para confirmar se já foram corrigidos e fechar de vez.

### #F03 — Footer do index.html: 3 links em inglês apontando para `#`

**Arquivo:** `index.html` · linhas 251–253 · issue #49

```html
<a href="#">Terms</a>
<a href="#">Privacy</a>
<a href="#">Support</a>
```

Problemas duplos: (1) links mortos, (2) texto em inglês num produto em português.

**Correção:** criar `pages/termos.html`, `pages/privacidade.html`, `pages/suporte.html` e atualizar os `href`. Enquanto não existem, remover os links ou substituir por texto simples.

---

### #F04 — Cadastro: Termos de Uso e Política de Privacidade sem página

**Arquivo:** `pages/cadastro.html` · linhas 228–229 · issue #50

```html
<a href="#">Termos de Uso</a> e
<a href="#">Política de Privacidade</a>
```

Exibidos no checkbox da etapa 2 do cadastro. Usuário não consegue ler o que está aceitando.

**Correção:** criar as páginas ou, temporariamente, redirecionar para um documento externo com o texto provisório. Necessário antes de qualquer professor piloto assinar.

---

### #F05 — Login: "Esqueci minha senha" sem funcionalidade — verificar se já foi corrigido

**Arquivo:** `pages/login.html` · issue #51

```html
<a href="#">Esqueci minha senha</a>
```

Clique não fazia nada — sem lógica de reset de senha implementada (esperado no MVP sem backend).

**Correção MVP:** substituir o link por um `<span>` com tooltip ou mensagem inline: *"Para recuperar o acesso, entre em contato via [e-mail/WhatsApp]."*

---

### #F07 — `plano-rentabilidade.html` acessível publicamente sem aviso — verificar se já foi corrigido

**Arquivo:** `pages/plano-rentabilidade.html` · issue #52

Ferramenta interna de planejamento financeiro indexável por qualquer buscador, sem `<meta name="robots" content="noindex">`.

**Correção:** adicionar `<meta name="robots" content="noindex, nofollow">` no `<head>` do arquivo.

---

## 🟡 Itens abertos — Baixa

### #F08 — `Brandbook.html` e `conteúdoANA.html`: arquivos órfãos na raiz — issue #53

Nenhum dos dois é linkado em qualquer página do site.

- `Brandbook.html` parece ser documentação de identidade visual — candidato a mover para `pages/interno/` ou deletar
- `conteúdoANA.html` parece ser conteúdo de teste/rascunho — candidato a deletar

**Correção:** confirmar propósito de cada arquivo. Se não há uso ativo, deletar para manter o repositório limpo.

---

### #F09 — `Brandbook.html`: 6 botões de demonstração apontando para `#`

Botões de exemplo do sistema de design, todos com `href="#"`. São demos visuais de componentes — comportamento esperado para um brandbook, não é problema funcional.

**Correção:** nenhuma necessária, mas adicionar um comentário HTML acima do bloco explicando que são demos.

---

## Status geral

| Severidade | Total | Resolvidos | Em aberto |
|---|---|---|---|
| 🔴 Alta | 2 | 2 ✅ | 0 |
| 🟠 Média | 5 | 1 ✅ | 4 (#F03, #F04, #F05, #F07) |
| 🟡 Baixa | 2 | 0 | 2 (#F08, #F09) |
| **Total** | **9** | **3 ✅** | **6** |

## Ordem de correção recomendada

```
ANTES DE QUALQUER PROFESSOR PILOTO VER O SITE:
  [X] #F01 — Cards sem conteúdo desabilitados
  [X] #F02 — Links de professor sem página removidos
  [ ] #F04 — Termos de Uso e Política de Privacidade · issue #50
  [ ] #F05 — "Esqueci minha senha" com mensagem de contato (confirmar se já foi feito)

ANTES DO LANÇAMENTO PÚBLICO:
  [ ] #F03 — Criar pages/termos.html + pages/privacidade.html · issue #49
  [X] #F06 — Demos linkadas em planos-precos.html
  [ ] #F07 — noindex em plano-rentabilidade.html (confirmar se já foi feito)

LIMPEZA DO REPOSITÓRIO:
  [ ] #F08 — Decidir sobre Brandbook.html e conteúdoANA.html · issue #53
  [ ] #F09 — Comentar bloco de demos no Brandbook.html
```

---

*Última atualização: Julho 2026 · Detalhe completo dos itens resolvidos permanece no histórico do Git deste arquivo.*
