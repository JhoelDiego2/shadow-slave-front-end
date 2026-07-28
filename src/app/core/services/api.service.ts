import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getBaseUrl(): string {
    return '/api';
  }
}
