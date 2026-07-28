import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { gameRoutes } from './features/game/game.routes';
import { homeRoutes } from './features/home/home.routes';

export const routes: Routes = [
  {
    path: '',
    children: homeRoutes
  },
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'game',
    children: gameRoutes
  }
];
