# Fase 1: Setup do Banco de Dados e Models

Data: 16 de Abril de 2026

## Resumo das Alterações
Nesta primeira etapa da construção do backend (`BeckEnd`), configuramos a base de dados utilizando PostgreSQL (focado no Supabase) e criamos toda a estrutura de Models utilizando o Sequelize, conforme definido no `implementation_plan.md`.

## 1. Dependências Instaladas
Foram instalados no projeto os seguintes pacotes via `npm`:
- `sequelize`: ORM para abstração do banco de dados.
- `pg` e `pg-hstore`: Drivers do PostgreSQL necessários para o Sequelize se comunicar com o banco de dados (neste caso, focado em Supabase).
- `bcryptjs`: Para futura implementação de hash de senhas.
- `jsonwebtoken`: Para geração de tokens JWT na autenticação.
- `multer`: Para lidar com upload de arquivos (html, pdf, etc.).
- `express-validator`: Para validação dos dados das requisições na API.
- Reutilizamos `express`, `cors` e `dotenv` que já constavam no `package.json`.

## 2. Estrutura de Pastas Criada
Criamos a pasta `src/` e dentro dela as pastas `config/` e `models/`.

```text
BeckEnd/
├── index.js                  (Atualizado)
├── .env.example              (Criado)
└── src/
    ├── config/
    │   └── database.js       (Criado)
    └── models/
        ├── index.js          (Criado)
        ├── Professor.js      (Criado)
        ├── Materia.js        (Criado)
        ├── Aula.js           (Criado)
        ├── Plano.js          (Criado)
        └── Assinatura.js     (Criado)
```

## 3. Configuração do Banco (Supabase)
O arquivo `src/config/database.js` foi configurado para conectar a um banco PostgreSQL via `DATABASE_URL`. A opção `ssl: { rejectUnauthorized: false }` foi adicionada para garantir a compatibilidade de conexão segura com a nuvem do Supabase. Também configuramos o *underscored: true* para que campos como `createdAt` sejam mapeados de forma padronizada como `created_at` no banco.

## 4. Models e Associações
Foram criados **5 Models principais**:

1.  **Professor:**
    *   Campos como `id` (UUIDV4), `nome`, `email` (único), `senha_hash`, `bio`, `foto_url`.
    *   `slug` único para perfis públicos.
    *   `setup_tier` configurado como `ENUM` ('basico', 'branded', 'institucional').
2.  **Materia:**
    *   Vinculado a um professor (`professor_id`).
    *   Campos como `nome`, `descricao`.
    *   `tags` implementadas como `JSONB` para melhor performance em buscas no Postgres.
3.  **Aula:**
    *   Vinculado a `Professor` e, opcionalmente, a `Materia` (nullable, com deleção set null).
    *   Configurações de hierarquia (`tier`) e `status` protegidas por `ENUM` (ex: `rascunho`, `publicado`).
    *   Controle de visualizações e link do material (`arquivo_url`).
4.  **Plano:**
    *   Tabela base de ofertas globais ("Essencial", "Pro", etc.).
    *   Campo `features` gravado em `JSONB` para facilitar exibição na listagem.
5.  **Assinatura:**
    *   Ponte de relacionamento conectando o Professor ao Plano.
    *   Grava status via `ENUM` (`ativa`, `cancelada`, `pendente`), datas referentes à transação e um provedor externo `external_id` (Stripe, etc.).

As associações entre as tabelas (relações de 1:N com lógicas de *onDelete* adequadas em formato `CASCADE`, `RESTRICT` e `SET NULL`) foram centralizadas no arquivo `/src/models/index.js`.

## 5. Entrada e Sincronização (index.js)
O arquivo base do servidor `index.js` sofreu refatoração:
- Atualizamos para inicializar e disparar conexão `sequelize.authenticate()`.
- O código agora verifica `process.env.NODE_ENV === 'development'` e se afirmativo, aplica `sequelize.sync({ alter: true })`, o que manterá as tabelas criadas e os campos estruturados rodando as alterações dinamicamente sem gerar perda de dados para fins de desenvolvimento.

## Próximos Passos
O próximo passo no backend deve ser a criação de um `.env` local contendo as chaves necessárias, a criação dos **Controllers** e posteriormente, as **Rotas** da API (Auth, Professores, Materiais, Aulas, etc.).
