import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  template: `
    <section class="page">
      <h2>Criar conta</h2>
      <p>Cadastre-se para acompanhar o progresso do jogo.</p>
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
export class RegisterPageComponent {}
