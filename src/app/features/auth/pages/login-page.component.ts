import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Entrar</h2>
      <p>Faça login para acessar a área do jogo.</p>
    </section>
  `,
  styles: [
    `
      .page {
        display: grid;
        gap: 0.75rem;
        padding: 2rem 0;
      }
    `
  ]
})
export class LoginPageComponent {}
