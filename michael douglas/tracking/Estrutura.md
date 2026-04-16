# Arquitetura do Produto — MiStudies
> Documento de referência · Estado atual: **MVP implementado** · Abril 2026

---

## Mapa de páginas atual

```
PÚBLICAS (sem login)
───────────────────────────────────────────────────────
index.html               → Home / landing de marketing para professores
pages/acervo.html        → Acervo com filtros (área, matéria, formato, tier, prof, tags)
pages/acervo/[slug].html → Conteúdo individual (HTML interativo)
pages/professor/[slug].html → Perfil público do professor
pages/planos-precos.html → Pricing completo com builder interativo
pages/login.html         → Formulário e-mail + senha
pages/cadastro.html      → Cadastro em 3 etapas (tipo → dados → confirmação)

ÁREA DO PROFESSOR (placeholder — sem auth real no MVP)
───────────────────────────────────────────────────────
pages/dashboard.html     → 3 abas: Visão Geral / Minhas Aulas / Nova Aula

DEMOS / FERRAMENTAS INTERNAS
───────────────────────────────────────────────────────
pages/demo/aula-essencial.html   → Demo tier Essencial (R$40)
pages/demo/aula-pro.html         → Demo tier Pro (R$75)
pages/demo/aula-full-studio.html → Demo tier Full Studio (R$100)
pages/plano-rentabilidade.html   → Simulador de receita (interno)

DELETADOS (Abril 2026)
───────────────────────────────────────────────────────
pages/hub.html     → Descontinuado — conteúdo fundido com index.html
pages/resumos.html → Substituído por pages/acervo.html
```

---

## Conteúdos publicados no acervo

| Slug | Título | Área | Formato | Tier | Arquivo |
|---|---|---|---|---|---|
| `escopo-engenharia-producao` | Escopo da Produção | Eng. de Produção | Masterclass | Pro | `pages/acervo/escopo-engenharia-producao.html` |
| `sistemas-de-producao` | Sistemas de Produção | Eng. de Produção | Aula | Essencial | `pages/acervo/sistemas-de-producao.html` |
| `tpm-e-oee` | TPM e OEE | Eng. de Produção | Slide | Full Studio | `pages/acervo/tpm-e-oee.html` |

*Demais cards no `acervo.html` são placeholder com `arquivo: '#'` — conteúdo a ser criado.*

---

## Taxonomia do acervo

```javascript
// Schema de metadados por conteúdo
{
  id:          number,
  slug:        string,              // URL: pages/acervo/[slug].html
  titulo:      string,
  descricao:   string,              // 2–3 linhas
  area:        string,              // Grande Área (chave: 'engprod', 'administracao'...)
  materia:     string,              // Disciplina
  tags:        string[],
  prof:        string,              // Nome display
  prof_slug:   string | null,       // → pages/professor/[slug].html
  data:        'YYYY-MM-DD',
  formato:     'Resumo' | 'Aula' | 'Slide' | 'Masterclass',
  tier:        'Essencial' | 'Pro' | 'Full Studio',
  privacidade: 'publico' | 'assinantes' | 'privado',
  arquivo:     string               // caminho relativo a partir de pages/
}
```

**Hierarquia de filtros:**
1. Busca full-text (título + tags)
2. Grande Área → cascata para Matéria
3. Formato
4. Tier
5. Professor
6. Tags

---

## Navegação padrão

**Páginas em `pages/` (1 nível de profundidade):**
```html
Logo → ../index.html
Acervo → acervo.html
Planos → planos-precos.html
Dashboard → dashboard.html
Entrar → login.html
Criar conta → cadastro.html (bg-signature-gradient)
```

**Páginas em `pages/acervo/` ou `pages/professor/` (2 níveis):**
```html
Logo → ../../index.html
Acervo → ../acervo.html
```

---

## Estrutura de preços implementada

### Professor — 3 etapas

| Etapa                       | Opções                             | Valores                 |
| --------------------------- | ---------------------------------- | ----------------------- |
| **Onboarding** (taxa única) | Básico / Branded ⭐ / Institucional | R$200 / R$500 / R$1.000 |
| **Aulas** (por aula)        | Essencial / Pro / Full Studio      | R$40 / R$75 / R$100     |
| **Hub** (mensal)            | Starter / Pro ⭐ / Institucional    | R$49 / R$99 / R$249     |

### Aluno

| Plano | Valor |
|---|---|
| Gratuito | Acesso ao acervo público |
| Assinatura | R$14,90/mês · anual ~R$11,92/mês (20% off) |

---

## Decisões técnicas do MVP

| Decisão   | Escolha                            | Motivo                      |
| --------- | ---------------------------------- | --------------------------- |
| Framework | Nenhum — HTML/CSS/JS puro          | Sem infraestrutura de build |
| CSS       | Tailwind via CDN + tokens inline   | Rápido para prototipagem    |
| Fontes    | Manrope (headline) + Inter (body)  | Definido no Brandbook       |
| Ícones    | Material Symbols Outlined (Google) | Já em uso, variáveis CSS    |
| Auth      | Placeholder (redirect via JS)      | Backend fora do escopo MVP  |
| Dados     | Arrays JS inline em cada página    | Sem banco de dados no MVP   |
| URLs      | `/pages/acervo/[slug].html`        | Canônico, escalável         |
| Deploy    | GitHub Pages / Netlify (pendente)  | Estático, sem servidor      |

---

## O que ainda não existe (pós-MVP)

| Feature                                                | Prioridade | Fase     |
| ------------------------------------------------------ | ---------- | -------- |
| Auth real (login/sessão)                               | P1         | Fase 2   |
| Gateway de pagamento                                   | P1         | Fase 2   |
| Upload de PDF pelo professor                           | P2         | Fase 2   |
| Skill de Análise B2B (IA)                              | P1         | Fase 1   |
| Analytics por aula                                     | P2         | Fase 3   |
| SEO (meta tags, sitemap)                               | P2         | Fase 1/2 |
| Favicon                                                | P2         | Fase 1   |
| Página de detalhe `/acervo/[slug]` (antes do conteúdo) | P3         | Fase 3   |
| Favoritos do aluno                                     | P3         | Fase 3   |

---

*Última atualização: Abril 2026*
