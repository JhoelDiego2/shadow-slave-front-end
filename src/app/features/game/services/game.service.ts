import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  readonly status = signal('Pronto para jogar');
}
