import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cadastro.html',
})
export class Cadastro {
  step = 1;
  tipo: 'professor' | 'aluno' = 'professor';
  mostrarSenha = false;
  nome = '';

  goStep(n: number) { this.step = n; }
  selectTipo(t: 'professor' | 'aluno') { this.tipo = t; }
  toggleSenha() { this.mostrarSenha = !this.mostrarSenha; }
}
