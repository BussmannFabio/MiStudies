# Fase 3: Conexão e Sincronização com Supabase (PostgreSQL)

Data: 16 de Abril de 2026

## Resumo
Nesta etapa, configuramos a string de conexão (`DATABASE_URL`) no arquivo `.env` com a URL do pooler fornecida pelo Supabase e os dados vitais de login do banco de dados remoto da plataforma. Após a configuração, o servidor Backend Node.js foi inicializado, realizando o espelhamento de todas as tabelas orquestradas em nossa pasta `models`.

---

## 1. Configuração do `.env`

O arquivo base foi configurado utilizando os dados diretamente mapeados para o ambiente do Supabase. Para manter o sistema seguro e evitar falhas na string de conexão devido a caracteres reservados de URL, a estrutura implementada foi a seguinte:

```env
# Configurações do Supabase (Client Side Reference)
NEXT_PUBLIC_SUPABASE_URL=https://vavqcapexylvrzdzhkyl.supabase.co/
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=***_nD-qZ2Vl

# Conexão PostgreSQL direta para o Sequelize
# Nota de Segurança: O caractere `?` na senha do banco requer URL Encoding para `%3F`
DATABASE_URL="postgresql://postgres:%3F***SenhaOcultada***@db.vavqcapexylvrzdzhkyl.supabase.co:5432/postgres"

# JWT Config
JWT_SECRET=segredo_super_seguro_e_aleatorio
JWT_EXPIRES_IN=7d
PORT=3000
NODE_ENV=development
```

**Ponto de Atenção:** Devido a presença de um `?` no meio da senha de banco definida, ele foi convertido dinamicamente para `%3F` no arquivo `.env` para que o interpretador da conexão do Sequelize não considerasse a senha como o início dos query parâmetros de conexão.

---

## 2. Resultado da Inicialização do Backend

Através do processo do `index.js`, que faz a chamada assíncrona da instrução `sequelize.sync({ alter: true })` em `NODE_ENV=development`, obtivemos êxito em injetar de ponta-a-ponta nosso Schema planejado.

O log obtido no terminal confirmou que nossa conexão direta funcionou e que as tabelas necessárias foram forjadas do zero dentro da instância pública (`public`) do Supabase:

```log
✅ Conexão com Supabase (PostgreSQL) estabelecida com sucesso.
Executing (default): CREATE TABLE IF NOT EXISTS "professores" ("id" UUID , "nome" VARCHAR(255) NOT NULL, "email" VARCHAR(255) NOT NULL UNIQUE... PRIMARY KEY ("id"));
Executing (default): CREATE TABLE IF NOT EXISTS "materias" ("id" UUID , "professor_id" UUID NOT NULL REFERENCES "professores" ("id")... PRIMARY KEY ("id"));
Executing (default): DO 'BEGIN CREATE TYPE "public"."enum_aulas_tier" AS ENUM(''essencial'', ''pro'', ''full_studio''); EXCEPTION WHEN duplicate_object THEN null; END';
Executing (default): CREATE TABLE IF NOT EXISTS "aulas" ...
Executing (default): CREATE TABLE IF NOT EXISTS "planos" ...
Executing (default): CREATE TABLE IF NOT EXISTS "assinaturas" ...
✅ Models sincronizados com o banco de dados.
🚀 Servidor rodando na porta 3000
```

## 3. Estado Atual do Ambiente

Neste momento da aplicação, todo o backend fundamental de persistência está configurado, as tabelas constam limpas e ativas no Dashboard (Table Editor) Web do Supabase e as API end-points rodam ouvindo requisições HTTP na `porta 3000`. 

O banco já encontra-se aderente as regras de chave estrangeira (FK), CASCADE Deletions, SET NULLs nos models e restrições `RESTRICT` protetivas ao cancelamento acidental de planos com assinaturas dependentes ativas.
