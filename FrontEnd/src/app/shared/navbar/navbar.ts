import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

/**
 * NavbarComponent — barra de navegação global.
 *
 * Aparece em TODAS as páginas automaticamente via app.component.
 * Usa RouterLink (em vez de href) para navegar sem recarregar a página.
 * RouterLinkActive adiciona classe CSS quando a rota está ativa.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  menuAberto = false;

  constructor(public authService: AuthService) {}

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  logout() {
    this.authService.logout();
  }
}
