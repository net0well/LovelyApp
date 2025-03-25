// home.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { RouterLink } from "@angular/router";
import { AccountService } from '../_services/account.service';
import {NgClass, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent, RouterLink, TitleCasePipe, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  accountService = inject(AccountService);
  registerMode = false;
  isRegisterMode = false;
  model: any = {};

  registerToggle() {
    this.registerMode = !this.registerMode;
    this.isRegisterMode = !this.isRegisterMode;
  }

  toggleRegisterMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  register() {
    // Este método pode redirecionar para o componente de registro
    // ou lidar com o registro diretamente, dependendo da sua implementação
    this.registerToggle();
  }
}
