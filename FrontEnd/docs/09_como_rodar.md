# 09 — Como Rodar o Projeto

## Pré-requisitos

Antes de tudo, você precisa ter instalado:

| Ferramenta | Versão mínima | Como verificar |
|---|---|---|
| **Node.js** | 18.x | `node --version` |
| **npm** | 9.x | `npm --version` |
| **Angular CLI** | 17+ | `ng version` |

Se o Angular CLI não estiver instalado:
```bash
npm install -g @angular/cli
```

---

## Instalação e Setup

### 1. Clonar ou entrar na pasta

```bash
# Se já está no projeto:
cd MiStudies/FrontEnd

# Se for clonar do zero:
git clone https://github.com/BussmannFabio/MiStudies.git
cd MiStudies/FrontEnd
```

### 2. Instalar as dependências

```bash
npm install
```

Isso instala tudo listado no `package.json`, incluindo:
- `@angular/core`, `@angular/router`, `@angular/forms`...
- `tailwindcss`
- `zone.js`
- `rxjs`

### 3. Configurar o ambiente

O arquivo `src/environments/environment.ts` aponta para o backend local:

```typescript
// src/environments/environment.ts (atual)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'   // ← Backend do BeckEnd deve estar nesta porta
};
```

Se o backend do BeckEnd estiver em outra porta, altere aqui.

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run start
```

Acesse: **http://localhost:4200**

O Angular reinicia automaticamente quando você salva qualquer arquivo.

---

## Comandos Disponíveis

| Comando | O que faz |
|---|---|
| `npm run start` | Inicia o servidor de desenvolvimento em `localhost:4200` |
| `npm run build` | Gera o bundle de produção na pasta `dist/` |
| `npm run watch` | Build contínuo (sem servidor) |
| `npm test` | Executa os testes unitários |
| `ng generate component pages/nova-pagina` | Cria um novo componente |

---

## Gerando Novos Componentes com o CLI

O Angular CLI cria automaticamente os arquivos necessários:

```bash
# Criar uma nova página
ng generate component pages/minha-pagina --standalone

# Resultado:
# CREATE src/app/pages/minha-pagina/minha-pagina.ts
# CREATE src/app/pages/minha-pagina/minha-pagina.html
# CREATE src/app/pages/minha-pagina/minha-pagina.spec.ts (teste)
```

Depois de criar, adicione a rota em `app.routes.ts`:

```typescript
{
  path: 'minha-pagina',
  loadComponent: () => import('./pages/minha-pagina/minha-pagina').then(m => m.MinhaPagina)
}
```

---

## Rodando Backend + Frontend Juntos

Para a aplicação funcionar completamente, você precisa de **dois terminais**:

**Terminal 1 — Backend:**
```bash
cd MiStudies/BeckEnd
npm run dev
# Rodando em: http://localhost:3000
```

**Terminal 2 — Frontend:**
```bash
cd MiStudies/FrontEnd
npm run start
# Rodando em: http://localhost:4200
```

---

## Resolução de Problemas Comuns

### Tela branca ao abrir o browser

**Causa:** Geralmente falta do `zone.js` ou cache corrompido.

**Solução:**
```bash
# Limpar cache do Angular e reinstalar
Remove-Item -Recurse -Force .angular    # PowerShell (Windows)
rm -rf .angular                          # Bash (Linux/Mac)
npm install
npm run start
```

### Erro: "Can't bind to 'ngModel'"

**Causa:** `FormsModule` não importado no componente que usa `[(ngModel)]`.

**Solução:** Adicione `FormsModule` no array `imports` do componente:
```typescript
imports: [CommonModule, FormsModule],
```

### Erro: "Can't bind to 'formGroup'"

**Causa:** `ReactiveFormsModule` não importado.

**Solução:**
```typescript
imports: [CommonModule, ReactiveFormsModule],
```

### Porta 4200 já em uso

```bash
# Rodar em outra porta
ng serve --port 4201
```

### Erro de CORS ao chamar a API

**Causa:** O backend não está permitindo requests de `localhost:4200`.

**Solução:** Configure o CORS no BeckEnd para aceitar a origem `http://localhost:4200`. Consulte a documentação do BeckEnd.

---

## Estrutura do `package.json`

```json
{
  "name": "mistudies-app",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test":  "ng test"
  },
  "dependencies": {
    "@angular/core":      "~19.x",
    "@angular/router":    "~19.x",
    "@angular/forms":     "~19.x",
    "@angular/common":    "~19.x",
    "rxjs":               "~7.x",
    "zone.js":            "~0.15.x"
  },
  "devDependencies": {
    "@angular/cli":       "~19.x",
    "tailwindcss":        "^3.x",
    "typescript":         "~5.x"
  }
}
```
