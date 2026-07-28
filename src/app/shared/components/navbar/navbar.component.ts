import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/">Início</a>
      <a routerLink="/auth/login">Entrar</a>
      <a routerLink="/auth/register">Registrar</a>
      <a routerLink="/game">Jogo</a>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {}
