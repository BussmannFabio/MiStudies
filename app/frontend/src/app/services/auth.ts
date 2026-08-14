import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

/**
 * AuthService — gerencia autenticação do usuário.
 *
 * Responsabilidades:
 * - fazer login na API e guardar o token
 * - fazer logout e limpar o token
 * - verificar se o usuário está logado (usado pelo AuthGuard)
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'mistudies_token';
  private readonly USER_KEY = 'mistudies_user';

  constructor(private http: HttpClient, private router: Router) {}

  /** Verifica se existe um token válido no localStorage */
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  /** Retorna os dados do usuário logado */
  getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  /** Retorna o token JWT armazenado */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Faz login na API do BeckEnd.
   * Guarda o token e os dados do usuário no localStorage.
   */
  login(email: string, senha: string) {
    return this.http.post<{ token: string; usuario: any }>(
      `${environment.apiUrl}/api/auth/login`,
      { email, senha }
    ).pipe(
      tap(response => {
        localStorage.setItem(this.TOKEN_KEY, response.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(response.usuario));
      })
    );
  }

  /**
   * Faz cadastro na API do BeckEnd.
   */
  cadastrar(dados: { nome: string; email: string; senha: string }) {
    return this.http.post(
      `${environment.apiUrl}/api/auth/cadastro`,
      dados
    );
  }

  /**
   * Remove o token do localStorage e redireciona para /login.
   */
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/login']);
  }
}
