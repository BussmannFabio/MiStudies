# 10 — Deploy

## Build de Produção

Para gerar os arquivos estáticos otimizados para produção:

```bash
cd FrontEnd

# Build de produção
npm run build
```

Os arquivos gerados ficam em:
```
FrontEnd/dist/mistudies-app/browser/
├── index.html
├── main-HASH.js
├── styles-HASH.css
├── polyfills-HASH.js
└── chunk-HASH.js (um por rota lazy loaded)
```

Os arquivos são **minificados, comprimidos e com hashing** — prontos para servir.

---

## Configurar a URL da API de Produção

Antes do build, edite o arquivo de ambiente de produção:

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.mistudies.com.br'   // ← URL real do backend
};
```

O Angular usa automaticamente este arquivo ao rodar `npm run build`.

---

## Deploy no Netlify

### Via drag-and-drop (mais simples)

1. Rode o build: `npm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist/mistudies-app/browser/` para a área de deploy do Netlify

### Via Netlify CLI

```bash
# Instalar CLI do Netlify
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --dir=dist/mistudies-app/browser --prod
```

### ⚠️ Arquivo `_redirects` — Obrigatório para SPA!

Como o Angular é uma SPA (Single Page Application), **todas as rotas devem apontar para o `index.html`**. Sem esse arquivo, ao acessar diretamente `https://mistudies.com/acervo` o Netlify retornará **404**.

Crie o arquivo `public/_redirects` (a pasta `public/` já está configurada no `angular.json` como assets):

```
# public/_redirects
/*    /index.html    200
```

Isso garante que o Netlify sempre sirva o `index.html` e deixe o Angular cuidar das rotas no client-side.

---

## Deploy no Coolify / VPS

Se estiver usando Coolify via Docker ou servindo diretamente em uma VPS:

### Opção 1: Nginx como servidor estático

```nginx
# /etc/nginx/sites-available/mistudies
server {
    listen 80;
    server_name mistudies.com.br www.mistudies.com.br;

    root /var/www/mistudies/dist/mistudies-app/browser;
    index index.html;

    # Redireciona tudo para index.html (necessário para SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de assets estáticos
    location ~* \.(js|css|png|jpg|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Opção 2: Dockerfile para Coolify

```dockerfile
# Dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/mistudies-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

```nginx
# nginx.conf
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Configurar o Workflow no `package.json`

Para simplificar o build com o ambiente correto:

```json
{
  "scripts": {
    "start":      "ng serve",
    "build":      "ng build --configuration production",
    "build:dev":  "ng build --configuration development"
  }
}
```

---

## Checklist de Deploy

Antes de publicar em produção, verifique:

- [ ] `environment.prod.ts` com a URL correta da API
- [ ] Build rodou sem erros: `npm run build`
- [ ] Arquivo `public/_redirects` existe (se for Netlify)
- [ ] Regra `try_files` configurada no Nginx (se for VPS)
- [ ] Backend respondendo na URL configurada
- [ ] CORS do backend permite a origem do frontend em produção
- [ ] HTTPS configurado no domínio

---

## Variáveis de Ambiente Sensíveis

**Nunca coloque chaves de API ou outros segredos nos arquivos de environment do Angular** — eles ficam visíveis no bundle JavaScript que é enviado ao browser.

Segredos devem sempre ficar no **backend** (BeckEnd), que os usa server-side. O frontend apenas se comunica com os endpoints da API.
