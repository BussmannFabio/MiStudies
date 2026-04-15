## 1. Diagnóstico da estrutura atual

**O que existe de fato nos arquivos:**

|Arquivo|O que faz de verdade|
|---|---|
|`index.html`|Home com hero + cards de conteúdo em destaque + seção de visão|
|`hub.html`|Página de **apresentação/marketing** do conceito do hub — não é o acervo|
|`resumos.html`|O **acervo real** com filtros funcionais (materia, tipo, prof, tags)|
|`dashboard.html`|Form de upload + métricas, sem auth, sem separação de função|
|`planos-precos.html`|Pricing page completa|
|`escopo-PI.html`, `sistema-producao.html`, `tpm-oee.html`|Conteúdos avulsos com URLs não padronizadas|

**Problemas críticos identificados:**

**P1 — Dupla identidade hub.html / resumos.html** `hub.html` se comporta como landing de marketing (explica o conceito, mostra features). `resumos.html` é o produto real. No nav de todas as páginas existe tanto "Acervos" (→ resumos.html) quanto "MiStudies" (→ hub.html). O usuário não sabe qual é o quê. E "MiStudies" como label de nav item é inaceitável — é o nome do produto, não de uma seção.

**P2 — Nome e título de arquivo errado** O arquivo é `resumos.html`, o title tag diz "Resumos", mas o conteúdo inclui MasterClass, Material Técnico, Apresentação. O nome amarra o acervo a um formato só.

**P3 — Conteúdo como arquivo HTML avulso sem padrão de URL** `escopo-PI.html`, `sistema-producao.html` são URLs ad hoc. Não existe `acervo/gestao-de-estoques` ou qualquer padrão. Impossível escalar sem refatorar todas as referências.

**P4 — Dashboard com três funções numa só página sem separação** Upload de novo conteúdo + lista de conteúdos enviados + métricas gerais. São três intenções distintas numa URL só. Quando o professor tiver 30 aulas, essa página vai ser inutilizável.

**P5 — Sem fluxo de autenticação** Não existe `/login`, `/cadastro`, `/recuperar-senha`. O dashboard é acessível por qualquer pessoa. A navegação não diferencia estado logado / não logado.

**P6 — Taxonomia incompleta e semanticamente ambígua** O modelo atual em `resumos.html` tem: `{titulo, materia, tipo, prof, tags, data, arquivo}`. Falta tier, área/curso, privacidade, slug. O campo `tipo` mistura formato (Resumo, Apresentação) com nível editorial (MasterClass) — são coisas diferentes.

---

## 2. O que já está correto

- **Home (`index.html`)** — cumpre bem o papel de landing de marketing: hero, conteúdo em destaque, visão do produto, CTAs.
- **`planos-precos.html`** — arquitetura de informação sólida, builder funcional, hierarquia clara.
- **Filtros de `resumos.html`** — a lógica de filtro por matéria + tipo + professor + tags está bem implementada. A estrutura de dado em JS (`RESUMOS[]`) é um bom ponto de partida para o modelo de metadados.
- **Separação visual público/privado** — o nav já sinaliza "Área do Professor" como um item distinto, o que é o comportamento certo.
- **Paleta e tipografia consistentes** — Manrope + Inter + tokens CSS estão sendo usados de forma coerente nas páginas novas.

---

## 3. O que precisa ser alterado

**3.1 — `hub.html` deve ser descontinuada ou fundida** Ela duplica a Home sem adicionar função real. O que ela faz de diferente de `index.html`? Quase nada. Opções:

- **Recomendado:** deletar `hub.html` e mover o que for único para a Home como seção.
- Alternativa: transformá-la na página pública de um professor específico (seria `/professor/[nome]`).

**3.2 — `resumos.html` deve ser renomeada e reposicionada** Renomear para `acervo.html` e passar a ser `/acervo` na navegação. "Acervo" é o termo correto para uma biblioteca multiformato. Atualizar title tag, h1, nav e todas as referências.

**3.3 — Dashboard deve ser dividido em três áreas**

- `/dashboard` → visão geral com métricas e atalhos
- `/minhas-aulas` → lista e gerenciamento do conteúdo publicado
- `/novo-conteudo` ou modal dentro de `/minhas-aulas` → formulário de upload

No MVP é aceitável manter numa página com abas, mas as URLs devem ser distintas ou pelo menos os estados nomeados (`/dashboard?aba=novo`).

**3.4 — Conteúdo avulso precisa de URL canônica** Cada peça de conteúdo deve ter URL no padrão `/acervo/[slug]`. No MVP sem backend, o slug pode ser o nome do arquivo HTML. O importante é que o acervo sempre link para `/acervo/escopo-engenharia-producao`, não direto para `escopo-PI.html`.

**3.5 — Página de detalhe do conteúdo** Atualmente não existe. Clicar num card vai direto para o HTML do conteúdo. Para MVP é aceitável, mas para SEO e UX o ideal é uma página intermediária em `/acervo/[slug]` que mostra os metadados (autor, área, tier, tags), um preview/resumo e depois o CTA "Ler conteúdo completo".

**3.6 — Fluxo de autenticação precisa existir, mesmo como placeholder** Mínimo para MVP: `/login` (form de email + senha) e `/cadastro` (form básico com tipo de conta: professor / aluno). Sem isso, o produto não tem área privada real — tem apenas uma página acessível por qualquer pessoa.

---

## 4. Arquitetura recomendada das páginas

```
PÚBLICAS (acessíveis sem login)
─────────────────────────────────────────────────────────
/                    → Home
/acervo              → Acervo com filtros (← renomear resumos.html)
/acervo/[slug]       → Detalhe do conteúdo (metadados + preview + CTA)
/professor/[slug]    → Perfil público do professor (página pública)
/planos              → Planos e Preços (← já existe)
/login               → Login (← criar)
/cadastro            → Cadastro (← criar)
/cadastro/recuperar  → Recuperação de senha (← criar, pode ser simples)

PRIVADAS — PROFESSOR (requer login + plano ativo)
─────────────────────────────────────────────────────────
/dashboard           → Visão geral: métricas, alertas, atalhos rápidos
/minhas-aulas        → Lista do acervo do professor + status de cada aula
/minhas-aulas/nova   → Formulário de envio de novo material (PDF → skill)
/minhas-aulas/[slug] → Edição dos metadados de uma aula específica
/perfil              → Configurações do perfil e identidade no hub

PRIVADAS — ALUNO (requer login)
─────────────────────────────────────────────────────────
/perfil              → Mesmo endpoint, UI diferente por tipo de conta
/favoritos           → Conteúdos salvos (futuro — não é MVP)

DELETAR / ARQUIVAR
─────────────────────────────────────────────────────────
hub.html             → Descontinuar. Conteúdo útil → fundir com Home
plano-rentabilidade.html → Mover para /admin ou manter como ferramenta interna
```

**Como as áreas se conectam:**

```
Não logado
  Acervo → card de conteúdo premium → "Ver conteúdo" → /login → redirect de volta
  Acervo → card do professor → /professor/[slug] → "Ver todos as aulas"
  Nav: [Acervo] [Planos] [Entrar] [Criar conta]

Logado como professor
  Nav: [Acervo] [Minhas Aulas] [avatar ▾ → Dashboard / Perfil / Sair]
  Dashboard → alerta "Você tem X aulas pendentes de publicação" → /minhas-aulas
  /minhas-aulas → botão "Nova aula" → /minhas-aulas/nova → skill de análise

Logado como aluno
  Nav: [Acervo] [avatar ▾ → Perfil / Sair]
  Conteúdo premium desbloqueado diretamente
```

---

## 5. Modelo ideal de metadados e taxonomia do acervo

**Problema central da taxonomia atual:** o campo `tipo` em `resumos.html` mistura `formato` (como o conteúdo é estruturado) com `nível de produção` (MasterClass implica algo mais elaborado). São dimensões ortogonais — um Resumo pode ser Essencial ou Pro; uma Aula pode ser Full Studio.

**Hierarquia de categorização (do mais geral ao mais específico):**

```
Grande Área → Curso → Matéria → Tema
Ex: Engenharia de Produção → Gestão da Produção → Gestão de Estoques → Análise ABC
```

**Modelo de metadados recomendado:**

```javascript
{
  // Identidade
  id:          "uuid ou slug único",
  slug:        "gestao-de-estoques-analise-abc",    // URL canônica
  titulo:      "Análise ABC e Curva de Aprendizado",
  descricao:   "Texto curto de preview (2-3 linhas)",

  // Formato e tier (dimensões independentes)
  formato:     "Resumo" | "Aula" | "Slide" | "Masterclass",
  tier:        "Essencial" | "Pro" | "Full Studio",

  // Taxonomia hierárquica
  area:        "Engenharia de Produção",            // Grande Área
  curso:       "Gestão da Produção",                // Curso / Subárea
  materia:     "Gestão de Estoques",                // Disciplina
  tema:        "Análise ABC",                       // Assunto específico (opcional)

  // Relacionamentos
  autor_id:    "ref → professor",
  autor_nome:  "Prof. Dr. Carlos Mendes",           // desnormalizado para listagem

  // Discoverability
  tags:        ["estoque", "ABC", "curva de aprendizado", "logística"],

  // Acesso
  privacidade: "publico" | "assinantes" | "privado",

  // Datas
  data_criacao:     "2026-04-15",
  data_atualizacao: "2026-04-15",

  // Técnico
  url_conteudo: "/acervo/gestao-de-estoques-analise-abc.html",
  tempo_leitura: 12,    // minutos estimados
  status:       "publicado" | "rascunho" | "arquivado"
}
```

**Por que essa separação:**

- `formato` descreve a estrutura do conteúdo (como foi montado)
- `tier` descreve o nível de produção (quanto custou ao professor)
- `area > curso > materia > tema` é a hierarquia de busca — você filtra por área primeiro, desce até o tema
- `tags` é camada livre e não hierárquica, complementar ao caminho estruturado

**Filtros recomendados para o acervo:**

```
Busca full-text (título + tags)

Filtros primários (sidebar ou chips):
  • Grande Área     (Administração / Eng. Produção / Direito / ...)
  • Formato         (Resumo / Aula / Slide / Masterclass)
  • Professor       (lista dos autores com conteúdo)

Filtros secundários (expandível):
  • Curso           (depende da Área selecionada → cascata)
  • Tags            (multi-seleção)
  • Tier            (Essencial / Pro / Full Studio)

Ordenação:
  • Mais recentes
  • Mais acessados (futuro)
  • Alfabético
```

**O que remover da taxonomia atual:**

- `tipo` → substituir por `formato` (semântica mais precisa, não confunde com "tipo de conta")
- `arquivo` → substituir por `url_conteudo` ou `slug`
- `data` como string solta → usar ISO 8601 (`2026-04-15`)

---

## 6. Estrutura final sugerida para o MVP

**Critério de corte:** o que entra no MVP é o mínimo que permite um professor se cadastrar, ter aulas publicadas e um aluno encontrar e consumir esse conteúdo.

```
MVP — O QUE CONSTRUIR
──────────────────────────────────────────────────────────
PÁGINAS EXISTENTES (ajustar)
  index.html         → Home → sem mudança estrutural, remover hub.html do nav
  resumos.html       → Renomear para acervo.html, atualizar taxonomia no JS
  dashboard.html     → Separar em abas: Visão Geral / Minhas Aulas / Nova Aula
  planos-precos.html → OK, só ajustar link no nav

PÁGINAS NOVAS (criar)
  login.html              → Form email + senha, link "Criar conta", "Esqueci senha"
  cadastro.html           → Tipo de conta (professor/aluno) + dados básicos
  professor/[slug].html   → Perfil público: bio, foto, lista de aulas publicadas
                            No MVP: 1 página estática por professor, depois dinâmica

DELETAR
  hub.html               → Descontinuar. Conteúdo útil → seção da Home

DECISÃO TÉCNICA PARA CONTEÚDO
  Cada conteúdo continua como arquivo HTML avulso no MVP
  MAS referenciado sempre via slug no acervo, nunca direto
  Padrão: pages/acervo/[nome-do-conteudo].html
  O JS do acervo usa o campo slug para construir o href, não o arquivo

MVP — O QUE ADIAR
──────────────────────────────────────────────────────────
  /acervo/[slug]  → Página de detalhe intermediária (adiar — conteúdo HTML resolve)
  /favoritos      → Requer persistência, adiar para pós-MVP
  Auth real       → No MVP pode ser simulado com estado local ou Supabase simples
  CMS admin       → O dashboard.html é o CMS por enquanto
```

**Mapa visual final:**

```
[Home]──────────────────────────────────────────────┐
   ↓                                                 ↓
[Acervo] ←→ [card de conteúdo] → [HTML do conteúdo] ↓
   ↓                                            [Planos]
[card de professor] → [/professor/[slug]]            ↓
                                               [Cadastro]
                                                    ↓
                                               [Login]
                                                    ↓
                              ┌─────────────────────┘
                        ÁREA PRIVADA
                        [Dashboard]
                              ↓
                        [Minhas Aulas] → [Nova Aula]
                              ↓
                        [Perfil/Configurações]
```

**Prioridade de execução para o MVP:**

1. Renomear `resumos.html` → `acervo.html`, atualizar taxonomia no array JS
2. Criar `login.html` e `cadastro.html` (podem ser estáticos inicialmente)
3. Separar `dashboard.html` em abas distintas
4. Criar template de `professor/[slug].html` para os professores piloto
5. Deletar `hub.html`, fundir o que for único com `index.html`
6. Padronizar URLs de conteúdo para `/pages/acervo/[slug].html`
