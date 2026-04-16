import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

/**
 * LoginComponent — página de login do MiStudies.
 *
 * O que mudou em relação ao HTML original:
 * - O formulário usa ReactiveFormsModule (controle via TypeScript, não DOM)
 * - O `handleLogin` vira o método `onSubmit()` nessa classe
 * - Em vez de `window.location.href`, usa `this.router.navigate(['/dashboard'])`
 * - O show/hide de senha é controlado pela variável `mostrarSenha`
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  form: FormGroup;
  mostrarSenha = false;
  carregando = false;
  erro = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Define os campos do formulário e suas regras de validação
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.carregando = true;
    this.erro = '';

    const { email, senha } = this.form.value;

    this.authService.login(email, senha).subscribe({
      next: () => {
        this.carregando = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.carregando = false;
        this.erro = err.error?.mensagem || 'E-mail ou senha incorretos.';
      }
    });
  }
}
