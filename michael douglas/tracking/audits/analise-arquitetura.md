# Análise de Arquitetura — MiStudies
> Perspectiva de arquiteto sênior · Abril 2026 · Estado: pós-MVP implementado

---

## 1. Próximos passos priorizados

### P0 — Bloqueantes comerciais (sem isso, não tem como atender o primeiro professor)

| # | Ação | Motivo |
|---|---|---|
| P0.1 | Criar `skills/analisar_pdf_professor.md` | É o ponto de entrada de todo projeto B2B — sem ela, a análise do material do professor é ad hoc e inconsistente |
| P0.2 | Criar `skills/briefing_professor.md` | Precede a análise — sem briefing estruturado, a análise começa do zero toda vez |
| P0.3 | Criar `skills/produzir_aula.md` + `revisar_aula.md` | Pipeline de produção sem documentação = qualidade inconsistente entre projetos |
| P0.4 | Definir canal de entrada do professor | WhatsApp? Formulário no site? E-mail? Sem canal definido, o funil não fecha |
| P0.5 | Criar contrato simples para professores piloto | Sem contrato, propriedade intelectual do material produzido fica em aberto |
| P0.6 | Contatar 2–3 professores piloto (item 1.12) | Meta do Mês 1 depende disso — toda a estrutura existe, falta o cliente |

### P1 — Críticos para entrar em produção

| # | Ação | Motivo |
|---|---|---|
| P1.1 | Configurar deploy (Vercel ou Netlify) | Sem URL pública, o produto não existe para o mercado. GitHub Pages funciona mas tem limitações de rewrite |
| P1.2 | Adicionar favicon em todas as páginas | Detalhe que afeta credibilidade percebida — tab sem ícone parece inacabado para professor avaliando a plataforma |
| P1.3 | Meta tags `og:title`, `og:description`, `og:image` em pelo menos `index.html` e `planos-precos.html` | Primeiro link enviado para um professor via WhatsApp vai aparecer sem preview — perda de credibilidade |
| P1.4 | Criar `skills/gerar_metadados_acervo.md` + `checklist_publicacao.md` | Publicar conteúdo novo sem checklist = risco de inconsistência na taxonomia e nas URLs |
| P1.5 | Resolver D5 — formalização societária | Sem CNPJ/MEI, como emitir nota fiscal para os professores? Pode travar a primeira cobrança real |

### P2 — Importantes para crescimento

| # | Ação | Prioridade |
|---|---|---|
| P2.1 | Verificar responsividade mobile de todas as páginas | `P2` |
| P2.2 | Google Analytics GA4 | `P2` |
| P2.3 | `sitemap.xml` + `robots.txt` | `P2` — pré-requisito para SEO orgânico |
| P2.4 | Gerar documentos comerciais faltantes via `docs/prompts/90. Prompts para Documentos Pendentes.md` (ICP, Pitch, Templates) | `P2` |
| P2.5 | Implementar benefícios pagos da assinatura de aluno (D7) | `P2` — sem isso, paywall não ativa |
| P2.6 | Gateway de pagamento (Stripe ou Mercado Pago) | `P2` — item 2.5 |

---

## 2. Pontos de atenção técnicos

### 2.1 Riscos graves

#### Tailwind CSS via CDN em produção
**Risco: Alto · Impacto: Performance + disponibilidade**

O CDN do Tailwind (`cdn.tailwindcss.com`) em modo de desenvolvimento carrega ~350KB de CSS não otimizado, sem tree-shaking. Em produção, qualquer página vai carregar todo o CSS do Tailwind, incluindo utilitários que nunca são usados.

Além disso, o site depende de disponibilidade externa. Se o CDN do Tailwind cair por qualquer motivo (quota, CDN outage), o site quebra completamente — sem CSS.

**Mitigação imediata:** Manter CDN no MVP, mas planejar build com Tailwind CLI (puro PostCSS) antes do lançamento público. Gera arquivo CSS de ~10–15KB ao invés de 350KB.

---

#### Config Tailwind duplicada em 10+ arquivos HTML
**Risco: Médio · Impacto: Manutenção**

O bloco de configuração Tailwind (~65 linhas de tokens MD3) está copiado em cada página HTML. Atualizar um token de cor significa editar manualmente cada arquivo.

```
index.html           → 65 linhas de config
pages/acervo.html    → 65 linhas de config (cópia)
pages/dashboard.html → 65 linhas de config (cópia)
pages/login.html     → 65 linhas de config (cópia)
... (mais 8 páginas)
```

**Mitigação:** Extrair para `assets/js/tailwind.config.js` e incluir via `<script src="../assets/js/tailwind.config.js">` — 1 arquivo, 0 duplicação.

---

#### Navegação duplicada em todos os HTMLs
**Risco: Médio · Impacto: Manutenção**

O HTML da barra de navegação (logo + links + botões) está copiado em cada página. Adicionar um item de menu = editar 10+ arquivos. Trocar um label = mesma coisa.

**Mitigação:** Injetar nav via JavaScript (`assets/js/nav.js`) usando `document.getElementById('nav-placeholder').innerHTML = NAV_HTML`. Padrão comum em sites estáticos sem framework.

---

#### Dados hardcoded em cada página
**Risco: Médio · Impacto: Consistência de dados**

Arrays de aulas, taxonomia de áreas/matérias e dados de professores estão definidos inline em cada página. Um conteúdo novo precisa ser adicionado manualmente em `acervo.html`, em `professor/[slug].html` e eventualmente no próprio arquivo da aula.

**Mitigação curto prazo:** Extrair para `assets/js/data.js` — um `const CONTEUDOS = [...]` centralizado que cada página importa via `<script src>`.

---

#### Dashboard sem proteção de acesso
**Risco: Baixo agora, Médio quando houver professores reais**

Qualquer pessoa que acesse `pages/dashboard.html` diretamente tem a tela de área do professor. Hoje não há dados reais, então o risco é de percepção. Quando houver professores reais usando a plataforma, a ausência de auth vai ser um problema de confiança (e potencialmente de segurança se houver upload).

**Mitigação MVP:** Redirecionar via JS para `login.html` se não houver `sessionStorage.token` — mesmo que o token seja fake, cria a barreira visual. Auth real é Fase 2.

---

#### 3 dependências externas críticas
**Risco: Baixo · Impacto: Disponibilidade**

O site depende de 3 CDNs externos funcionando simultaneamente:
- `cdn.tailwindcss.com` — layout inteiro
- `fonts.googleapis.com` — tipografia
- `fonts.gstatic.com` (Material Symbols) — ícones

Qualquer timeout nessas requisições (especialmente em redes de universidade com firewall) degrada a experiência.

**Mitigação longo prazo:** Self-host fontes + Tailwind CLI. Curto prazo: adicionar `<link rel="preconnect">` e `<link rel="dns-prefetch">` antes dos imports.

---

### 2.2 Dívidas técnicas menores

| # | Dívida | Severidade | Correção sugerida |
|---|---|---|---|
| DT1 | `index.html` carrega Material Symbols **duas vezes** (2 `<link>` idênticos) | Baixa | Remover o duplicado (linha 8) |
| DT2 | `Brandbook.html` e `conteúdoANA.html` na raiz sem função clara | Baixa | Verificar se são legados — deletar ou mover para `pages/demo/` |
| DT3 | `pages/plano-rentabilidade.html` (ferramenta interna) acessível publicamente | Baixa | Mover para `pages/interno/` ou adicionar comentário no HTML |
| DT4 | `.bg-signature-gradient` definida em `<style>` inline em cada página | Baixa | Extrair para `assets/styles/base.css` |
| DT5 | `max-w-7xl` (1280px) vs Brandbook (1200px) — divergência não resolvida (inconsistência #19) | Baixa | Atualizar Brandbook para aceitar 1280px como padrão |
| DT6 | `pages/planos-precos.html` tem 1.244 linhas — arquivo monolítico | Média | Extrair seções JS para `assets/js/` quando houver refatoração |
| DT7 | Sem página de erro 404 personalizada | Baixa | Criar `404.html` — Vercel/Netlify serve automaticamente |
| DT8 | Tagline do hero (`index.html`) diverge da tagline oficial (inconsistência #15) | Média | Corrigir para "Seu estudo, bem resolvido" |

---

## 3. Melhorias recomendadas

### 3.1 Arquitetura — Sem mudar a stack (curto prazo)

**Extrair config e dados para arquivos compartilhados**

Estrutura de `assets/` sugerida:
```
assets/
  js/
    tailwind.config.js   ← config atual duplicada em cada HTML
    data.js              ← CONTEUDOS[], PROFESSORES[], taxonomia
    nav.js               ← HTML da nav + lógica de injeção
  styles/
    base.css             ← gradient, badge, material symbols, scroll
```

Ganho: uma mudança de token ou item de menu = 1 arquivo editado, não 10+.

---

**Padrão de nav por profundidade**

Em vez de manter duas variações de nav (nível 1 e nível 2) duplicadas, usar um único componente que detecta profundidade:

```javascript
// nav.js
const depth = location.pathname.split('/').filter(Boolean).length - 1;
const root = '../'.repeat(depth) || './';
// Injeta nav com root correto para todos os links
```

---

### 3.2 Código — Limpeza cirúrgica (sem refatoração grande)

1. **Remover link duplicado do Material Symbols em `index.html`** — 1 linha de mudança, impacto de performance imediato
2. **Adicionar `<link rel="preconnect" href="https://fonts.googleapis.com">` antes dos imports** — reduz latência de carregamento de fontes
3. **Extrair `.bg-signature-gradient` para `<style>` centralizado** — evitar redefinição em cada página
4. **Adicionar `<noscript>` básico** — acessibilidade mínima para rastreadores sem JS

---

### 3.3 Processos operacionais

**Pipeline de produção documentado end-to-end**

O processo atual (receber PDF → analisar → produzir → revisar → publicar) existe na cabeça dos sócios, não em documento. Antes do primeiro professor piloto, o pipeline deve existir como skill:

```
briefing_professor → analisar_pdf_professor → produzir_aula
  → revisar_aula → gerar_metadados_acervo → checklist_publicacao
```

**Versionamento semântico com tags git**

Usar tags semânticas para marcar milestones claros:
```
v0.1.0  → MVP implementado (estado atual)
v0.2.0  → Deploy em produção + primeiro professor piloto
v1.0.0  → Gateway de pagamento ativo + 3 professores pagantes
```

**Checklist pré-publicação por página nova**

Antes de publicar qualquer página nova ou conteúdo novo, verificar:
- [ ] Meta tags preenchidas (title, description, og:*)
- [ ] Favicon presente
- [ ] Nav com profundidade correta
- [ ] Tailwind config incluída
- [ ] Responsividade testada (mobile + desktop)
- [ ] Links internos testados

---

## 4. Itens que precisam de validação ou decisão

### D5 — Formalização societária
**Pergunta:** O negócio vai emitir nota fiscal para os professores? Em qual CNPJ?
**Por que importa:** Sem CNPJ, os professores não conseguem registrar o pagamento como despesa. Isso pode ser um bloqueador para professores de instituições públicas (que precisam de nota). MEI resolve para começo.
**Decisão necessária antes de:** primeira cobrança real (Mês 1).

---

### D7 — Benefícios da assinatura de aluno
**Resposta definida:** o aluno paga por conveniência e organização: download em PDF quando permitido, favoritos ilimitados, kits de revisão, histórico de progresso e acesso prioritário a novidades.
**O que não entra:** tutoria, correção individual, certificado e conteúdo privado de professor sem autorização específica.
**Por que importa:** O paywall só deve ser ativado quando esses benefícios estiverem implementados, não apenas prometidos.
**Decisão necessária antes de:** item 2.6 (ativar assinatura de alunos).

---

### Canal de entrada do professor
**Pergunta:** Como um professor interessado inicia o processo? WhatsApp pessoal? Formulário no site? E-mail fixo?
**Por que importa:** Define o primeiro passo do funil comercial. Sem canal definido, o link da `planos-precos.html` não converte — não tem CTA funcional.
**Opção recomendada:** Formulário simples em `planos-precos.html` (nome, e-mail, instituição, área) + envio por e-mail com Formspree/Netlify Forms (gratuito, sem backend).

---

### Hospedagem — GitHub Pages vs Vercel vs Netlify
**Pergunta:** Qual plataforma usar para deploy?
**Comparativo relevante para este projeto:**

| | GitHub Pages | Vercel | Netlify |
|---|---|---|---|
| Custo | Gratuito | Gratuito | Gratuito |
| Custom domain | Sim | Sim | Sim |
| HTTPS automático | Sim | Sim | Sim |
| Formulários nativos | Não | Não | **Sim** (100 envios/mês grátis) |
| Redirects/rewrites | Limitado | Sim (`vercel.json`) | Sim (`_redirects`) |
| Deploy via git push | Sim | Sim | Sim |

**Recomendação:** Netlify — formulário nativo resolve o canal de entrada do professor sem backend. Deploy: conectar repositório do GitHub, build command vazio, publish directory `/`.

---

### `Brandbook.html` e `conteúdoANA.html` na raiz
**Pergunta:** Esses arquivos têm alguma função ativa no projeto?
**Se não:** deletar para manter o repositório limpo. Arquivos na raiz aparecem em todo `ls` e confundem a estrutura.
**Se sim:** documentar a função e mover para pasta adequada (`pages/interno/` ou `pages/demo/`).

---

### Contrato de produção — propriedade intelectual
**Pergunta:** Quem detém os direitos sobre o material visual produzido pelo MiStudies?
**Por que importa:** Se o professor encerrar o contrato, ele pode usar o material em outro serviço? O MiStudies pode usar o material como portfólio? Sem cláusula, qualquer uma das partes pode ter interpretações divergentes.
**Decisão necessária antes de:** entrega do primeiro material piloto.

---

## 5. Boas práticas aplicáveis

### Versionamento e rastreabilidade

**Commits por funcionalidade, não por sessão**
O histórico atual tem commits que agrupam múltiplas mudanças independentes. Para um projeto com 3 sócios, commits atômicos facilitam rollback e `git blame` funcional:
```
✓ "fix: remover link duplicado Material Symbols em index.html"
✗ "Atualizar tracking, criar skills, corrigir nav"
```

**Tags semânticas nos milestones**
```bash
git tag -a v0.1.0 -m "MVP: todas as páginas core implementadas"
```

---

### SEO e descobrimento orgânico

**Meta tags mínimas em cada página**
```html
<title>Acervo de Aulas — MiStudies</title>
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://mistudies.com/assets/og-image.png">
<meta property="og:url" content="https://mistudies.com/pages/acervo.html">
<link rel="canonical" href="https://mistudies.com/pages/acervo.html">
```

**Páginas de conteúdo são as mais valiosas para SEO**
`pages/acervo/[slug].html` são as páginas que aparecem em buscas por "resumo [matéria] [área]". Cada uma precisa de meta description única baseada no título e descrição do conteúdo.

---

### Performance

**Ordem de carregamento de recursos**
```html
<!-- ANTES de qualquer link/script externo -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://cdn.tailwindcss.com">
```

Isso reduz o tempo de DNS lookup e conexão para recursos críticos.

---

### Escalabilidade do modelo de dados

Quando o acervo crescer para 20+ conteúdos, manter os dados inline em `acervo.html` vai ficar inviável. O caminho natural (sem backend) é:

1. **Agora (0–20 aulas):** Array JS inline — aceitável
2. **Curto prazo (20–50 aulas):** `assets/js/data.js` centralizado — 1 mudança para adicionar conteúdo
3. **Médio prazo (50+ aulas):** JSON estático (`assets/data/conteudos.json`) + `fetch()` — pré-requisito para busca real e filtros dinâmicos
4. **Fase 2:** API real ou headless CMS (Contentful/Sanity)

---

### Segurança básica

**Headers HTTP** — Configurar no `netlify.toml` ou `vercel.json`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

Não é crítico para MVP estático, mas boas práticas custam 10 minutos e melhoram score de segurança percebido.

**`plano-rentabilidade.html` não deve ser indexado**
Adicionar `<meta name="robots" content="noindex, nofollow">` nessa página — é ferramenta interna, não deve aparecer em buscas.

---

## Resumo executivo — Prioridades absolutas

```
ANTES DO PRIMEIRO PROFESSOR PILOTO:
  [ ] P0.1  Skill: analisar_pdf_professor.md
  [ ] P0.2  Skill: briefing_professor.md
  [ ] P0.3  Skills: produzir_aula.md + revisar_aula.md
  [ ] P0.4  Definir canal de entrada (recomendação: formulário Netlify)
  [ ] P0.5  Contrato simples com cláusula de propriedade intelectual
  [ ] P0.6  Contatar 2–3 professores piloto
  [ ] P1.5  Decisão D5 — formalização societária (MEI)

ANTES DO LANÇAMENTO PÚBLICO:
  [ ] P1.1  Deploy em Netlify com domínio próprio
  [ ] P1.2  Favicon (SVG: "M" com fundo #0032b5)
  [ ] P1.3  Meta tags og:* em index.html e planos-precos.html
  [ ] DT1   Remover link duplicado Material Symbols (index.html)
  [ ] DT8   Corrigir tagline hero para versão oficial

RISCO MAIS CRÍTICO NÃO-ÓBVIO:
  → Config Tailwind duplicada em 10+ arquivos.
    Uma mudança de token de cor quebra a consistência se qualquer
    arquivo for esquecido. Extrair para assets/js/tailwind.config.js
    antes de ter mais de 12 páginas.
```

---

*Documento gerado em Abril 2026 · Arquitetura: HTML/CSS/JS estático · Fase: pós-MVP*
*Atualizar ao final de cada milestone ou quando decisões D5/D7 forem tomadas*
