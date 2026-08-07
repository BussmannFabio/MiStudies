# Copy — Dashboard (`/dashboard`)
> Fonte: `HTML Zite/pages/login/dashboard.html` · Componente Angular: `DashboardComponent`

---

## SEO / Meta

| Campo | Texto atual | Status |
|---|---|---|
| `<title>` | MiStudies — Dashboard do Professor | |
| `meta description` | Área de gestão e upload de materiais do MiStudies. | |

---

## Cabeçalho da página

| Elemento | Texto atual | Status |
|---|---|---|
| Eyebrow | Área do Professor | |
| H1 | Dashboard | |
| Nome do usuário (placeholder) | Gabriel F. | |
| Plano do usuário (placeholder) | Plano Branded | |

---

## Abas de navegação

| Aba | Ícone | Texto | Status |
|---|---|---|---|
| 1 | dashboard | Visão Geral | |
| 2 | library_books | Minhas Aulas | |
| 3 | add_circle | Nova Aula | |

---

## Aba 1 — Visão Geral

### Cards de métricas (dados placeholder)

| Métrica | Valor atual | Status |
|---|---|---|
| Aulas publicadas | 3 | |
| Visualizações totais | — | |
| Alunos alcançados | — | |
| Aulas em rascunho | — | |

### Seção de aulas recentes

| Elemento | Texto atual | Status |
|---|---|---|
| Título da seção | Aulas Recentes | |
| Estado vazio | Nenhuma aula publicada ainda. | |
| CTA estado vazio | Criar primeira aula | |

---

## Aba 2 — Minhas Aulas

| Elemento | Texto atual | Status |
|---|---|---|
| Título da seção | Minhas Aulas | |
| Filtro status | Todos / Publicado / Rascunho / Arquivado | |
| Estado vazio | Você ainda não tem aulas cadastradas. | |
| CTA estado vazio | Adicionar primeira aula | |

### Badges de status

| Badge | Texto | Status |
|---|---|---|
| Publicado | Publicado | |
| Rascunho | Rascunho | |
| Arquivado | Arquivado | |

### Badges de tier

| Badge | Texto | Status |
|---|---|---|
| Essencial | Essencial | |
| Pro | Pro | |
| Full Studio | Full Studio | |

---

## Aba 3 — Nova Aula

| Elemento | Texto atual | Status |
|---|---|---|
| Título | Nova Aula | |
| Subtítulo | Envie o material e escolha o tier de produção. | |

### Campos do formulário

| Campo | Label | Placeholder | Status |
|---|---|---|---|
| Título | Título da aula * | Ex: Gestão da Produção — Módulo 1 | |
| Matéria | Matéria | Selecione ou crie uma matéria | |
| Tier | Tier de produção * | Selecione o tier | |
| Upload | Arquivo (PDF) | Arraste o PDF ou clique para selecionar | |
| Observações | Observações | Instruções adicionais para produção | |
| Botão | Enviar para produção | | |

### Descrições dos tiers no formulário

| Tier | Preço | Descrição curta | Status |
|---|---|---|---|
| Essencial | R$ 40 | HTML estático · 3–5 dias | |
| Pro | R$ 75 | HTML interativo · 5–7 dias | |
| Full Studio | R$ 100 | Brand completo · 7–10 dias | |

---

## Notas para revisão

- O nome/plano do usuário são placeholder — virão da API (`GET /api/auth/me`) após integração
- Os números das métricas virão de `GET /api/professores/me/dashboard`
- Definir copy dos estados de loading (spinner, skeleton) — ainda não existe no HTML atual
