import { Component, inject, signal } from '@angular/core';
import { PixModalComponent } from '../components/pix-modal.component';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [PixModalComponent],
  template: `
    <section class="page">
      <h2>Página do jogo</h2>
      <p>{{ getStatus() }}</p>
      <button type="button" (click)="showModal.set(true)">Abrir PIX</button>
      @if (showModal()) {
        <app-pix-modal (close)="showModal.set(false)" />
      }
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
export class GamePageComponent {
  protected readonly showModal = signal(false);
  private readonly gameService = inject(GameService);

  protected getStatus(): string {
    return this.gameService.status();
  }
}
