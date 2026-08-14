# MiStudies

Produto que transforma o material de um professor (tema, ementa ou arquivo) em aula pronta — roteiro, apresentação e materiais de apoio — com apoio de IA. Fase atual: **MVP → Tração** (ver [`docs/00-indice.md`](docs/00-indice.md), última revisão Abril 2026).

Repositório privado. Documentação estratégica, comercial, de marca e técnica vive em [`docs/`](docs/00-indice.md); catálogo de produtos/preços e plano de rentabilidade são as fontes de verdade para qualquer decisão comercial.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `app/frontend` | Aplicação Angular 21 (produto), migrada do HTML estático original — ver [`docs/07-tecnologia/migracao-angular.md`](docs/07-tecnologia/migracao-angular.md) |
| `app/backend` | API Node/Express + Sequelize sobre PostgreSQL (Supabase) |
| `site/` | Site institucional estático (marketing, fora do app logado) |
| `docs/` | Fundação, oferta/financeiro, operação, comercial, marca, legal, tecnologia, gestão |
| `skills/mistudies` | Skills/playbooks operacionais de IA do produto |
| `scripts/` | Validação de conteúdo de aulas (`validate-content.mjs`) |
| `Faculdade/`, `michael douglas/` | Material pessoal/de terceiros arquivado no repo — **não fazem parte do produto** |

## Frontend (Angular)

```bash
cd "app/frontend"
npm install
npm start        # ng serve
npm test         # ng test
npm run build
```

## Backend (Express)

```bash
cd "app/backend"
npm install
cp .env.example .env   # DATABASE_URL (Supabase Postgres), JWT_SECRET, JWT_EXPIRES_IN, PORT
npm run dev             # nodemon
```

Rotas principais: `auth`, `professor`, `materias`, `aulas`, `planos`, `webhook` (`src/routes/`). Modelos: `Professor`, `Materia`, `Aula`, `Plano`, `Assinatura` (`src/models/`).

Nunca commitar `.env` com `DATABASE_URL`/`JWT_SECRET` reais — `.env.example` só tem placeholders.

## Validar conteúdo de aulas

```bash
node scripts/validate-content.mjs
node --test scripts/validate-content.test.mjs
```

## Coordenação (GNXEZ)

`EMPLOYEE.md` define Anselmo como coordenador local. `employee.imports.yaml` importa heloisa-educacao, gaspar-didatica, genoveva-plataforma, basilio-pesquisa, lauro-apresentacoes e severino-comercial do registro GNEXZ. Pipeline operacional completo em `repos/gnexz/playbooks/mistudies.md`.

## Fontes de verdade

- Preço, escopo, pacote: [`docs/02-oferta-e-financeiro/catalogo-produtos-e-precos.md`](docs/02-oferta-e-financeiro/catalogo-produtos-e-precos.md)
- Custo, meta, capacidade: [`docs/02-oferta-e-financeiro/plano-de-rentabilidade.md`](docs/02-oferta-e-financeiro/plano-de-rentabilidade.md)
- Arquitetura técnica: [`docs/07-tecnologia/arquitetura-produto.md`](docs/07-tecnologia/arquitetura-produto.md)
- Backlog: [`docs/08-gestao/backlog-geral.md`](docs/08-gestao/backlog-geral.md)

Índice completo e regras de manutenção em [`docs/00-indice.md`](docs/00-indice.md).
