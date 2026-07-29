import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mongrel-intro',
  standalone: true,
  templateUrl: './mongrel-intro.component.html',
  styleUrl: './mongrel-intro.component.scss'
})
export class MongrelIntroComponent {
  @Output() saberMais = new EventEmitter<void>();

  onSaberMais(): void {
    this.saberMais.emit();
  }
}
