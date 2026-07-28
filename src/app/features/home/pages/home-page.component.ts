import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="page">
      <h1>Bem-vindo ao Shadow Slave</h1>
      <p>Esta é a página inicial da nova arquitetura por features.</p>
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
export class HomePageComponent {}
