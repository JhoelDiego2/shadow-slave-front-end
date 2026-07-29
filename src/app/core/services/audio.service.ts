import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AudioService {
  private audio?: HTMLAudioElement;
  readonly isPlaying = signal(false);

  private ensureAudio(): void {
    if (typeof window === 'undefined') return;
    if (!this.audio) {
      this.audio = new Audio('/assets/audio/Lost_from_fate.mp3');
      this.audio.loop = true;
    }
  }

  togglePlay(): void {
    if (typeof window === 'undefined') return;
    this.ensureAudio();
    if (!this.audio) return;

    if (this.isPlaying()) {
      this.audio.pause();
      this.isPlaying.set(false);
    } else {
      this.audio.play().then(() => {
        this.isPlaying.set(true);
      }).catch(err => console.log('Erro ao reproduzir áudio:', err));
    }
  }
}