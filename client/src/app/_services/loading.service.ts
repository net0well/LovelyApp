import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private requestCount = 0;
  private minLoadingTime = 500;
  private loadingTimer: any = null;

  showLoading(): void {
    this.requestCount++;


    if (this.loadingSubject.getValue()) {
      return;
    }


    this.loadingSubject.next(true);
  }

  hideLoading(): void {
    this.requestCount--;

    if (this.requestCount <= 0) {
      this.requestCount = 0;


      if (this.loadingTimer) {
        clearTimeout(this.loadingTimer);
      }


      this.loadingTimer = setTimeout(() => {
        this.loadingSubject.next(false);
        this.loadingTimer = null;
      }, this.minLoadingTime);
    }
  }
}
