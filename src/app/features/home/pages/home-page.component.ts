import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../../core/services/audio.service';
import { MongrelIntroComponent } from '../components/mongrel-intro/mongrel-intro.component';
import { LandingHeroComponent } from '../components/landing-hero/landing-hero.component';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { HistorySectionComponent } from '../components/history-section/history-section.component';
import { CharactersSectionComponent } from '../components/characters-section/characters-section.component';
import { GamesSectionComponent } from '../components/games-section/games-section.component';
import { DeveloperSectionComponent } from '../components/developer-section/developer-section.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MongrelIntroComponent,
    LandingHeroComponent,
    AboutSectionComponent,
    HistorySectionComponent,
    CharactersSectionComponent,
    GamesSectionComponent,
    DeveloperSectionComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  protected readonly audioService: AudioService = inject(AudioService);
  protected readonly showIntro = signal(true);

  avancarParaSite() {
    this.showIntro.set(false);
    // Dispara a música automaticamente se o usuário ainda não tiver clicado
    if (!this.audioService.isPlaying()) {
      this.audioService.togglePlay();
    }
  }
}