# 07 — Services

Services são classes que **encapsulam a lógica de negócio e comunicação com a API**. Eles são registrados como singletons (`providedIn: 'root'`) — existe apenas **uma instância** compartilhada por toda a aplicação.

---

## AuthService

**Arquivo:** `src/app/services/auth.ts`

### Responsabilidade

Gerencia todo o ciclo de autenticação: login, logout e verificação do estado do usuário.

### Injeção de Dependência

```typescript
@Injectable({
  providedIn: 'root'   // ← singleton disponível em qualquer componente
})
export class AuthService {
  constructor(
    private http: HttpClient,  // ← para fazer requests à API
    private router: Router     // ← para redirecionar após logout
  ) {}
}
```

### Métodos Disponíveis

#### `isLoggedIn(): boolean`
Verifica se há um token salvo no `localStorage`. Usado pelo **AuthGuard** e pela **Navbar**.

```typescript
isLoggedIn(): boolean {
  return !!localStorage.getItem('mistudies_token');
}
```

```html
<!-- Exemplo de uso no template -->
@if (authService.isLoggedIn()) {
  <a routerLink="/dashboard">Dashboard</a>
}
```

---

#### `getUser(): any`
Retorna o objeto do usuário logado (salvo no `localStorage` após o login).

```typescript
getUser(): any {
  const user = localStorage.getItem('mistudies_user');
  return user ? JSON.parse(user) : null;
}
```

```html
<!-- Exibe o nome do usuário na navbar -->
<span>{{ authService.getUser()?.nome }}</span>
```

> **Nota:** O operador `?.` (optional chaining) evita erros se `getUser()` retornar `null`.

---

#### `getToken(): string | null`
Retorna o token JWT. Útil para adicionar em headers de requests autenticadas.

```typescript
const token = this.authService.getToken();
// Usar em: { headers: { Authorization: `Bearer ${token}` } }
```

---

#### `login(email, senha): Observable`
Faz `POST /api/auth/login` e salva o token + usuário no `localStorage`.

```typescript
login(email: string, senha: string) {
  return this.http.post<{ token: string; usuario: any }>(
    `${environment.apiUrl}/api/auth/login`,
    { email, senha }
  ).pipe(
    // `tap` executa um efeito colateral sem modificar o valor
    tap(response => {
      localStorage.setItem('mistudies_token', response.token);
      localStorage.setItem('mistudies_user', JSON.stringify(response.usuario));
    })
  );
}
```

**Como consumir no componente:**
```typescript
this.authService.login(email, senha).subscribe({
  next: () => this.router.navigate(['/dashboard']),  // sucesso
  error: (err) => this.erro = err.error?.mensagem    // erro da API
});
```

---

#### `cadastrar(dados): Observable`
Faz `POST /api/auth/cadastro` para registrar um novo usuário.

```typescript
cadastrar(dados: { nome: string; email: string; senha: string }) {
  return this.http.post(`${environment.apiUrl}/api/auth/cadastro`, dados);
}
```

---

#### `logout(): void`
Remove os dados do `localStorage` e redireciona para `/login`.

```typescript
logout() {
  localStorage.removeItem('mistudies_token');
  localStorage.removeItem('mistudies_user');
  this.router.navigate(['/login']);
}
```

---

### Dados no localStorage

| Chave | Conteúdo | Tipo |
|---|---|---|
| `mistudies_token` | JWT Bearer token | `string` |
| `mistudies_user` | Objeto do usuário serializado | `JSON string` |

---

## AulasService

**Arquivo:** `src/app/services/aulas.ts`

### Responsabilidade

Busca dados do acervo (aulas, categorias, professores) na API do backend.

### Endpoints Consumidos

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/api/aulas` | Lista todas as aulas do acervo |
| `GET` | `/api/aulas/:slug` | Detalhe de uma aula específica |
| `GET` | `/api/professores` | Lista todos os professores |
| `GET` | `/api/professores/:slug` | Perfil de um professor |

### Implementação

```typescript
@Injectable({ providedIn: 'root' })
export class AulasService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAcervo() {
    return this.http.get<any[]>(`${this.apiUrl}/api/aulas`);
  }

  getAula(slug: string) {
    return this.http.get<any>(`${this.apiUrl}/api/aulas/${slug}`);
  }

  getProfessores() {
    return this.http.get<any[]>(`${this.apiUrl}/api/professores`);
  }

  getProfessor(slug: string) {
    return this.http.get<any>(`${this.apiUrl}/api/professores/${slug}`);
  }
}
```

### Como usar em um componente

```typescript
// aula-detalhe.ts
export class AulaDetalhe implements OnInit {
  aula: any = null;

  constructor(
    private aulasService: AulasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || '';

    this.aulasService.getAula(slug).subscribe({
      next: (data) => this.aula = data,
      error: ()   => console.error('Aula não encontrada')
    });
  }
}
```

---

## Observable vs Promise

O Angular usa **RxJS Observables** em vez de Promises. As diferenças principais:

| | Observable | Promise |
|---|---|---|
| Execução | Lazy (só roda ao `.subscribe()`) | Eager (roda imediatamente) |
| Cancelável | Sim (`.unsubscribe()`) | Não |
| Múltiplos valores | Sim | Não |
| Composição | Sim (operators: `map`, `tap`, `filter`) | Limitada (`.then()`) |

No MiStudies, usamos principalmente `.subscribe()` direto nos componentes ou `async` pipe no template.

---

## Usando o `environment`

Todos os services usam `environment.apiUrl` em vez de escrever a URL hardcoded:

```typescript
// ❌ Errado — hardcoded, não muda entre dev e prod
this.http.post('http://localhost:3000/api/auth/login', dados)

// ✅ Correto — muda automaticamente conforme o ambiente
this.http.post(`${environment.apiUrl}/api/auth/login`, dados)
```

Em dev, `environment.apiUrl = 'http://localhost:3000'`.
Em prod, `environment.prod.ts` terá a URL real do servidor.
