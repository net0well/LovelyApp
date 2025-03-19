import { Injectable, inject } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmDialogService } from '../_services/confirm-dialog.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class preventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
  private confirmDialogService = inject(ConfirmDialogService);

  canDeactivate(component: MemberEditComponent): Observable<boolean> | boolean {
    if (component.editForm?.dirty) {
      return this.confirmDialogService.confirm(
        'Você realmente deseja prosseguir? Todas as alterações não salvas serão perdidas permanentemente.'
      );
    }
    return true;
  }
}
