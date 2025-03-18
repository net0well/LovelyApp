// src/app/shared/components/loading/loading.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../_services/loading.service';


@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-overlay" *ngIf="loadingService.loading$ | async">
      <div class="loading-container">
        <div class="heart-loader">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#FF4B91" stroke="none" />
          </svg>
        </div>
        <p class="loading-text">Carregando...</p>
      </div>
    </div>
  `,
  styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(249, 254, 255, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(3px);
    }

    .loading-container {
      background-color: white;
      border-radius: 18px;
      padding: 25px 40px;
      box-shadow: 0 8px 25px rgba(190, 248, 255, 0.6);
      border-left: 5px solid #FF4B91;
      text-align: center;
    }

    .heart-loader {
      margin-bottom: 15px;
      animation: pulse 1.5s ease-in-out infinite;
    }

    .loading-text {
      font-size: 1.1rem;
      color: #FF4B91;
      font-weight: 500;
      margin: 0;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.05);
        opacity: 1;
      }
      100% {
        transform: scale(0.95);
        opacity: 0.7;
      }
    }
  `]
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
