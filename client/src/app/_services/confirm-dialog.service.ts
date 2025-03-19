import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  confirm(message: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'center-dialog',
      backdropClass: 'cdk-overlay-dark-backdrop',
      disableClose: true,
      data: { message }
    });

    return dialogRef.afterClosed();
  }
}
