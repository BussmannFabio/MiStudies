# Fase 2: Rotas e Controllers (Versão de Teste s/ Middleware)

Data: 16 de Abril de 2026

## Resumo das Alterações
Nesta segunda etapa, construímos toda a lógica de negócio (Controllers) e os mapeamentos de endpoints (Routes) para a API. 

Para facilitar os testes iniciais diretamente com o PostgreSQL (Supabase) via ferramentas como Insomnia ou Postman, **não implementamos os middlewares de proteção via JWT nesta etapa**. Rotas que deveriam ser protegidas foram adaptadas para receber o `id` do usuário via `query string` (`?id=UUID`) ou diretamente pelo `body`.

---

## 1. Controllers Implementados (`src/controllers/`)

Todos os controllers respondem às operações básicas correspondentes a cada fluxo:

1.  **Auth (`auth.controller.js`):**
    *   `register`: Recebe dados do professor, realiza hash da senha (bcrypt), cria `slug` e salva no banco.
    *   `login`: Valida email/senha e retona um token JWT (que geramos, mas ainda não usamos para bloquear rotas).
    *   `me`: *Adaptado para testes.* Recebe `?id=` e retorna os dados do professor conectado.

2.  **Professor (`professor.controller.js`):**
    *   `getBySlug`: Busca perfil público incluindo matérias e aulas já publicadas.
    *   `updateMe`: *Adaptado para testes.* Recebe `id` no body e atualiza nome, bio, foto_url e slug.
    *   `dashboard`: *Adaptado para testes.* Recebe `?id=` e monta as estatísticas completas, total de aulas, status das aulas e plano de assinatura.

3.  **Matérias (`materias.controller.js`):**
    *   Implementação de um **CRUD completo**: listar todas (`GET /`), detalhar por ID (`GET /:id`), criar (`POST /`), editar (`PUT /:id`) e remover (`DELETE /:id`).

4.  **Aulas (`aulas.controller.js`):**
    *   **CRUD e Listagens Específicas**: acervo público de aulas (apenas status 'publicado'), detalhes e CRUD normal.
    *   `minhasAulas`: *Adaptada para testes.* Retorna a listagem apenas do professor especificado em `?id=`.
    *   `publicar`: Rota de ação `PATCH` especializada para alterar a aula do status `rascunho` para `publicado`.
    *   Mecanismo de contagem (`increment`) implementado ao listar detalhes da aula.

5.  **Planos e Assinaturas (`planos.controller.js`):**
    *   `listar`: Exibe todos os planos.
    *   `minhaAssinatura`: *Adaptada para testes.* Retorna qual plano está ativo para o professor passado via `?id=`.
    *   `assinar`: Rota responsável por vincular o Plano e o Professor via Assinatura (inicialmente no status `pendente`).
    *   **Auxiliar Dev** `criarPlano`: Adicionamos uma rota não prevista no documento original especificamente para conseguir criar Planos via API e assim populamos o banco facilmente em ambiente de dev.

6.  **Webhook (`webhook.controller.js`):**
    *   Recebe um status e um `external_id` (simulando provedor de pagamentos como a Hotmart/Stripe) que reflete a aprovação e atualiza a assinatura vinculada para `ativa`. Específico para testes aceita ativar via o ID direto da assinatura para pular a etapa de registro externo.

---

## 2. Rotas Registradas (`src/routes/`)

Toda a lógica acima foi exposta nos seguintes endpoints mapeados de volta para o entry-point (`index.js`).

### Prefixo: `/api/auth`
| Método | Rota  | Operação |
|---|---|---|
| POST | `/register` | Cadastrar novo |
| POST | `/login` | Efetuar login e obter Token |
| GET | `/me?id=UUID` | Perfil do logado |

### Prefixo: `/api/professores`
| Método | Rota  | Operação |
|---|---|---|
| GET | `/me/dashboard?id=UUID` | Informações do painel privado |
| PUT | `/me` | Atualiza dados (id via body) |
| GET | `/:slug` | Página pública do professor |

### Prefixo: `/api/materias`
| Método | Rota  | Operação |
|---|---|---|
| GET | `/` | Lista todas as matérias |
| GET | `/:id` | Detalha uma matéria |
| POST | `/` | Cria matéria (professor_id via body) |
| PUT | `/:id` | Edita matéria |
| DELETE | `/:id` | Remove matéria |

### Prefixo: `/api/aulas`
| Método | Rota  | Operação |
|---|---|---|
| GET | `/me?id=UUID` | Retorna aulas específicas de um professor |
| GET | `/` | Acervo padrão (apenas *publicados*) |
| GET | `/:id` | Pega detalhes de uma aula (+1 visualização) |
| POST | `/` | Criar nova aula |
| PUT | `/:id` | Editar dados de rascunho |
| DELETE | `/:id` | Apagar aula |
| PATCH | `/:id/publicar`| Atualiza status para publicado |

### Prefixo: `/api/planos`
| Método | Rota  | Operação |
|---|---|---|
| GET | `/` | Lista todos os planos ofertados |
| POST | `/` | *Helper Dev:* Cria e adiciona um plano padrão |
| GET | `/minha-assinatura?id=UUID` | Retorna qual o pacote de assinatura atual |
| POST | `/assinar` | Salva o interesse e inicia os trâmites como 'pendente' |

### Prefixo: `/api/webhook`
| Método | Rota  | Operação |
|---|---|---|
| POST | `/pagamento` | Endpoint externo para confirmação e ativação |

---

## Próximos Passos
1. **Configurar o banco local via `.env`** para testar as rotas;
2. Popular alguns dados via endpoint (Planos > Professores > Materiais > Aulas);
3. Voltar futuramente e adicionar o middleware de JWT protegendo os endpoints marcados com requisição de `[ ] JWT + Plano`.
