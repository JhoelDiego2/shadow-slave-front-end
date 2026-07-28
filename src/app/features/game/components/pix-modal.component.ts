import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pix-modal',
  standalone: true,
  template: `
    <div class="modal">
      <h3>Pagamento via PIX</h3>
      <p>Use a chave abaixo para finalizar a transação.</p>
      <button type="button" (click)="close.emit()">Fechar</button>
    </div>
  `,
  styles: [
    `
      .modal {
        border: 1px solid #d1d5db;
        border-radius: 0.75rem;
        padding: 1rem;
        background: #f9fafb;
        display: grid;
        gap: 0.75rem;
        max-width: 20rem;
      }
    `
  ]
})
export class PixModalComponent {
  @Output() close = new EventEmitter<void>();
}
