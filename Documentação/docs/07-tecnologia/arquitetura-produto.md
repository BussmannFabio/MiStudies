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

## Decisões técnicas

### Frontend (migração em andamento → Angular)

| Decisão   | Escolha atual (MVP)                | Decisão futura (Fase 2)              |
| --------- | ---------------------------------- | ------------------------------------ |
| Framework | HTML/CSS/JS puro                   | **Angular** (migração planejada)     |
| CSS       | Tailwind via CDN + tokens inline   | Tailwind com build (tree-shaking)    |
| Fontes    | Manrope (headline) + Inter (body)  | Mantém — configurar em `styles.css`  |
| Ícones    | Material Symbols Outlined (Google) | Mantém — importar via Angular        |
| Auth      | Placeholder (redirect via JS)      | `AuthGuard` no Angular Router        |
| Dados     | Arrays JS inline em cada página    | Services + integração com API REST (integração com backend)  |
| URLs      | `/pages/acervo/[slug].html`        | Rotas Angular (`/acervo/:slug`)      |
| Deploy    | GitHub Pages / Netlify (pendente)  | Netlify com `_redirects` para SPA    |

> **Status da migração:** planejada — ver passo a passo completo em [`backlog-geral.md`](../08-gestao/backlog-geral.md) (seção Frontend Angular).

### Backend (em implementação — `BeckEnd/`)

| Decisão       | Escolha                                   |
| ------------- | ----------------------------------------- |
| Runtime       | Node.js (CommonJS)                        |
| Framework     | Express 5                                 |
| ORM           | Sequelize                                 |
| Banco         | PostgreSQL (pendente decisão dev: MySQL/SQLite?) |
| Auth          | JWT + bcrypt                              |
| Upload        | multer (local `/uploads`; S3 para produção via `multer-s3`) |
| Pagamento     | Webhook externo (Stripe / Hotmart / Pagar.me — provedor a decidir) |
| Porta padrão  | 3000 (via `process.env.PORT`)             |

---

## Arquitetura de Backend — `BeckEnd/`

### Estrutura de pastas planejada

```
BeckEnd/
├── index.js               # Entry point (Express + middlewares)
├── .env                   # Variáveis de ambiente
├── src/
│   ├── config/
│   │   └── database.js    # Configuração Sequelize
│   ├── models/
│   │   ├── index.js       # Associações centralizadas
│   │   ├── Professor.js
│   │   ├── Plano.js
│   │   ├── Assinatura.js
│   │   ├── Aula.js
│   │   └── Materia.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── professor.routes.js
│   │   ├── aulas.routes.js
│   │   ├── materias.routes.js
│   │   ├── planos.routes.js
│   │   └── webhook.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── professor.controller.js
│   │   ├── aulas.controller.js
│   │   ├── materias.controller.js
│   │   └── planos.controller.js
│   ├── middlewares/
│   │   ├── auth.middleware.js    # Verifica JWT
│   │   └── plano.middleware.js   # Verifica plano ativo
│   └── uploads/                 # Arquivos de aula (PDF/HTML)
└── package.json
```

### Models e campos principais

| Model | Campos-chave |
|---|---|
| **Professor** | id (UUID), nome, email, senha_hash, bio, foto_url, slug, setup_tier, setup_pago |
| **Materia** | id, professor_id (FK), nome, descricao, tags |
| **Aula** | id, professor_id (FK), materia_id (FK), titulo, tier (essencial/pro/full_studio), status (rascunho/em_producao/publicado), arquivo_url |
| **Plano** | id, nome, preco_mensal, features (JSON) |
| **Assinatura** | id, professor_id (FK), plano_id (FK), status (ativa/cancelada/pendente), external_id |

### Rotas da API

| Grupo | Base | Endpoints principais |
|---|---|---|
| Auth | `/api/auth` | POST /register, POST /login, GET /me |
| Professores | `/api/professores` | GET /:slug (público), PUT /me, GET /me/dashboard |
| Matérias | `/api/materias` | GET / (público), POST, PUT /:id, DELETE /:id |
| Aulas | `/api/aulas` | GET / (público), POST (upload), PATCH /:id/publicar, GET /me |
| Planos | `/api/planos` | GET / (público), GET /minha-assinatura, POST /assinar |
| Webhook | `/api/webhook` | POST /pagamento (chave secreta) |

Detalhamento completo em [`BeckEnd/documentacao/implementation_plan.md`](../../../BeckEnd/documentacao/implementation_plan.md).

---

## O que ainda não existe

| Feature                                                | Prioridade | Fase     | Situação |
| ------------------------------------------------------ | ---------- | -------- | -------- |
| Auth real (login/sessão) com JWT                       | P1         | Fase 2   | 🟡 Planejado — models + rotas definidos |
| Gateway de pagamento + webhook                         | P1         | Fase 2   | 🟡 Planejado — provedor a decidir |
| Upload de PDF pelo professor                           | P2         | Fase 2   | 🟡 Planejado — multer definido |
| Integração frontend ↔ API                             | P1         | Fase 2   | ⬜ Não iniciado |
| Skill de Análise B2B (IA)                              | P1         | Fase 1   | ⬜ Não iniciado |
| Analytics por aula                                     | P2         | Fase 3   | ⬜ Não iniciado |
| SEO (meta tags, sitemap)                               | P2         | Fase 1/2 | ⬜ Não iniciado |
| Favicon                                                | P2         | Fase 1   | ⬜ Não iniciado |
| Página de detalhe `/acervo/[slug]` (antes do conteúdo) | P3         | Fase 3   | ⬜ Não iniciado |
| Favoritos do aluno                                     | P3         | Fase 3   | ⬜ Não iniciado |

---

*Última atualização: Abril 2026*
