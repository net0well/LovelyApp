import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountService);
  loggedIn = false;
  model: any = {};

  Login(){
    this.accountService.Login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn = true;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  Logout() {
    console.log('Logout method called');
    this.loggedIn = false;
  }
}
