import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

/**
 * AulasService — busca e gerencia os dados do acervo de aulas.
 *
 * Consome os endpoints do BeckEnd:
 * - GET /api/aulas  → lista todas as aulas
 * - GET /api/aulas/:slug → detalhes de uma aula
 * - GET /api/materias → lista as matérias disponíveis
 */
@Injectable({
  providedIn: 'root'
})
export class AulasService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /** Lista todas as aulas do acervo (com filtros opcionais via query params) */
  getAcervo(filtros?: { materia?: string; tier?: string; tipo?: string }) {
    let url = `${this.api}/api/aulas`;
    const params: string[] = [];

    if (filtros?.materia) params.push(`materia=${filtros.materia}`);
    if (filtros?.tier) params.push(`tier=${filtros.tier}`);
    if (filtros?.tipo) params.push(`tipo=${filtros.tipo}`);

    if (params.length) url += '?' + params.join('&');

    return this.http.get<any[]>(url);
  }

  /** Detalhes de uma aula pelo slug */
  getAula(slug: string) {
    return this.http.get<any>(`${this.api}/api/aulas/${slug}`);
  }

  /** Lista as matérias disponíveis */
  getMaterias() {
    return this.http.get<any[]>(`${this.api}/api/materias`);
  }

  /** Lista os planos disponíveis */
  getPlanos() {
    return this.http.get<any[]>(`${this.api}/api/planos`);
  }

  /** Perfil de um professor pelo slug */
  getProfessor(slug: string) {
    return this.http.get<any>(`${this.api}/api/professor/${slug}`);
  }
}
