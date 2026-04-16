# MiStudies — Plano de Rotas, Models e Estrutura de API

## Visão Geral

Plataforma para professores publicarem aulas interativas em HTML para alunos. O fluxo principal:

- **Público (sem login):** Home → Acervo → Detalhes de Matéria → Perfil público do professor → Planos e Preços
- **Autenticação:** Login → verifica plano ativo → redireciona para Área Privada ou Planos
- **Área Privada:** Dashboard → Cadastro → Upload/Gerenciar Aulas → Editar Aula → Perfil do professor
- **Pagamento:** Terceirizado (ex: Stripe/Hotmart), apenas webhook para confirmar assinatura

---

## User Review Required

> [!IMPORTANT]
> **Banco de dados:** O plano usa **PostgreSQL** com Sequelize. Se preferir MySQL ou SQLite para dev, precisamos ajustar a config do `.env`.

> [!IMPORTANT]
> **Upload de arquivos (PDF/HTML):** As aulas são arquivos físicos. O plano propõe armazenar localmente em `/uploads` no backend. Se quiser usar S3/Cloudflare R2 para produção, precisamos adicionar a lib `multer-s3`.

> [!WARNING]
> **Pagamento:** As rotas de plano apenas registram status. A ativação real vem via **webhook** do provedor (Stripe/Hotmart/Pagar.me). Confirme qual será usado para implementar o webhook correto.

---

## Estrutura de Pastas — Backend (`BeckEnd/`)

```
BeckEnd/
├── index.js               # Entry point
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

---

## Models (Banco de Dados)

### Professor
| Campo             | Tipo         | Obs                              |
|-------------------|--------------|----------------------------------|
| id                | UUID (PK)    | auto-gerado                      |
| nome              | STRING       |                                  |
| email             | STRING UNIQUE|                                  |
| senha_hash        | STRING       | bcrypt                           |
| bio               | TEXT         | descrição pública                |
| foto_url          | STRING       | link da foto de perfil           |
| slug              | STRING UNIQUE| ex: `mistudies/prof-joao`       |
| setup_tier        | ENUM         | `basico`, `branded`, `institucional` |
| setup_pago        | BOOLEAN      | taxa única de onboarding paga?   |
| created_at        | DATE         |                                  |

### Materia
| Campo        | Tipo      | Obs                          |
|--------------|-----------|------------------------------|
| id           | UUID (PK) |                              |
| professor_id | UUID (FK) | → Professor                  |
| nome         | STRING    | ex: "Gestão da Produção"     |
| descricao    | TEXT      |                              |
| tags         | ARRAY/JSON| ex: ["Engenharia", "Lean"]   |
| created_at   | DATE      |                              |

### Aula
| Campo          | Tipo      | Obs                                          |
|----------------|-----------|----------------------------------------------|
| id             | UUID (PK) |                                              |
| professor_id   | UUID (FK) | → Professor                                  |
| materia_id     | UUID (FK) | → Materia (nullable)                         |
| titulo         | STRING    |                                              |
| descricao      | TEXT      |                                              |
| tier           | ENUM      | `essencial`, `pro`, `full_studio`            |
| status         | ENUM      | `rascunho`, `em_producao`, `publicado`       |
| arquivo_url    | STRING    | caminho do HTML/PDF armazenado               |
| tags           | ARRAY/JSON|                                              |
| visualizacoes  | INTEGER   | padrão 0                                     |
| created_at     | DATE      |                                              |
| published_at   | DATE      |                                              |

### Plano
| Campo      | Tipo      | Obs                                         |
|------------|-----------|---------------------------------------------|
| id         | UUID (PK) |                                             |
| nome       | STRING    | ex: "Essencial", "Pro", "Full Studio"       |
| preco_mensal | DECIMAL |                                             |
| descricao  | TEXT      |                                             |
| features   | JSON      | lista de features do plano                  |

### Assinatura
| Campo          | Tipo      | Obs                                          |
|----------------|-----------|----------------------------------------------|
| id             | UUID (PK) |                                              |
| professor_id   | UUID (FK) | → Professor                                  |
| plano_id       | UUID (FK) | → Plano                                      |
| status         | ENUM      | `ativa`, `cancelada`, `pendente`             |
| data_inicio    | DATE      |                                              |
| data_fim       | DATE      | nullable (mensal recorrente)                 |
| external_id    | STRING    | ID da assinatura no provedor de pagamento    |

---

## Rotas da API

### 🔐 Autenticação — `/api/auth`
| Método | Rota              | Descrição                             | Protegida? |
|--------|-------------------|---------------------------------------|------------|
| POST   | `/auth/register`  | Cadastro do professor                 | Não        |
| POST   | `/auth/login`     | Login → retorna JWT                   | Não        |
| GET    | `/auth/me`        | Retorna perfil do usuário logado      | ✅ JWT      |
| POST   | `/auth/logout`    | (Opcional — invalidar token)          | ✅ JWT      |

### 👨‍🏫 Professor — `/api/professores`
| Método | Rota                          | Descrição                              | Protegida?        |
|--------|-------------------------------|----------------------------------------|-------------------|
| GET    | `/professores/:slug`          | Perfil público do professor            | Não               |
| PUT    | `/professores/me`             | Atualizar perfil (bio, foto, etc.)     | ✅ JWT + Plano    |
| GET    | `/professores/me/dashboard`   | Dados do dashboard (stats, uploads)    | ✅ JWT + Plano    |

### 📚 Matérias — `/api/materias`
| Método | Rota                  | Descrição                        | Protegida?     |
|--------|-----------------------|----------------------------------|----------------|
| GET    | `/materias`           | Lista matérias públicas          | Não            |
| GET    | `/materias/:id`       | Detalhes de uma matéria          | Não            |
| POST   | `/materias`           | Criar nova matéria               | ✅ JWT + Plano |
| PUT    | `/materias/:id`       | Editar matéria                   | ✅ JWT + Plano |
| DELETE | `/materias/:id`       | Remover matéria                  | ✅ JWT + Plano |

### 🎓 Aulas — `/api/aulas`
| Método | Rota                  | Descrição                              | Protegida?        |
|--------|-----------------------|----------------------------------------|-------------------|
| GET    | `/aulas`              | Acervo público (aulas publicadas)      | Não               |
| GET    | `/aulas/:id`          | Detalhes de uma aula (pública)         | Não               |
| POST   | `/aulas`              | Upload de nova aula (com arquivo)      | ✅ JWT + Plano    |
| PUT    | `/aulas/:id`          | Editar dados da aula                   | ✅ JWT + Plano    |
| DELETE | `/aulas/:id`          | Remover aula                           | ✅ JWT + Plano    |
| PATCH  | `/aulas/:id/publicar` | Publicar aula (muda status)            | ✅ JWT + Plano    |
| GET    | `/aulas/me`           | Minhas aulas (dashboard do professor)  | ✅ JWT            |

### 💰 Planos — `/api/planos`
| Método | Rota                  | Descrição                              | Protegida? |
|--------|-----------------------|----------------------------------------|------------|
| GET    | `/planos`             | Lista todos os planos disponíveis      | Não        |
| GET    | `/planos/minha-assinatura` | Status da assinatura atual        | ✅ JWT      |
| POST   | `/planos/assinar`     | Inicia processo de assinatura (→ pagto ext.) | ✅ JWT |

### 🔔 Webhook — `/api/webhook`
| Método | Rota                  | Descrição                              | Protegida?         |
|--------|-----------------------|----------------------------------------|--------------------|
| POST   | `/webhook/pagamento`  | Recebe confirmação do provedor externo | Chave secreta      |

---

## Mapeamento: Fluxograma → Rotas

```
Home Page (público)
├── GET /aulas              → Acervo
├── GET /aulas/:id          → Detalhes do conteúdo/Matéria
└── GET /professores/:slug  → Perfil público do professor

Já possui conta? → POST /auth/login
Autenticação → verifica JWT + GET /planos/minha-assinatura

Plano ativo?
├── NÃO → GET /planos (Planos e Preços) → POST /planos/assinar
└── SIM → Área Privada do Professor
    ├── POST /auth/register     → Cadastro
    ├── GET  /professores/me/dashboard → Dashboard de cursos/aulas
    ├── GET  /aulas/me          → Administrar organização das aulas
    ├── PUT  /aulas/:id         → Editar aula
    ├── POST /aulas             → Nova aula (upload)
    ├── PUT  /professores/me    → Perfil do professor (configura)
    └── PATCH /aulas/:id/publicar → Enviar PDF/publicar
```

---

## Verificação

### Backend
- [ ] Instalar dependências: `sequelize`, `pg`, `bcrypt`, `jsonwebtoken`, `multer`, `express-validator`
- [ ] Criar todos os models e associações
- [ ] Implementar todos os controllers
- [ ] Registrar todas as rotas no `index.js`
- [ ] Testar endpoints no Insomnia/Postman

### Frontend (MiStudies)
- [ ] Criar `src/routes.js` com mapeamento de páginas para endpoints
- [ ] Criar arquivo de documentação `API_DOCS.md` na raiz do projeto
