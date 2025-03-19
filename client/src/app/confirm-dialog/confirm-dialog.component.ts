// confirm-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <div class="modal-content" style="padding: 20px; border-radius: 10px; background-color: white;">
      <div style="border-left: 4px solid #FF4B91; padding-left: 15px; margin-bottom: 20px;">
        <h2 style="color: #FF4B91; margin: 0 0 10px 0;">Alterações não salvas</h2>
        <p style="color: #555; margin: 0;">{{ data.message }}</p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
        <button (click)="onNoClick()" style="background: transparent; border: 1px solid #ccc; border-radius: 20px; padding: 8px 20px; cursor: pointer; transition: all 0.3s ease;">
          Cancelar
        </button>
        <button (click)="onYesClick()" style="background-color: #FF4B91; color: white; border: none; border-radius: 20px; padding: 8px 20px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(255, 75, 145, 0.3);">
          Sim, prosseguir
        </button>
      </div>
    </div>
  `
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
