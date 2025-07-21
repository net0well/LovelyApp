import {Component, inject, input, OnInit} from '@angular/core';
import {Message} from "../../_models/message";
import {MessageService} from "../../_services/message.service";
import {
  TimeagoClock,
  TimeagoDefaultClock,
  TimeagoDefaultFormatter,
  TimeagoFormatter,
  TimeagoIntl,
  TimeagoModule, TimeagoPipe
} from 'ngx-timeago';
import {CommonModule} from "@angular/common";
import {AccountService} from "../../_services/account.service";

@Component({
  selector: 'app-member-messages',
  standalone: true,
  imports: [
    TimeagoModule,
    CommonModule
  ],
  providers: [
    { provide: TimeagoFormatter, useClass: TimeagoDefaultFormatter},
    { provide: TimeagoClock, useClass: TimeagoDefaultClock },
    TimeagoIntl
  ],
  templateUrl: './member-messages.component.html',
  styleUrl: './member-messages.component.css'
})
export class MemberMessagesComponent implements OnInit {
  private messageService = inject(MessageService);
  private accountService = inject(AccountService);

  username = input.required<string>();
  messages = input.required<Message[]>();

  ngOnInit(): void {
    console.log('MemberMessagesComponent initialized');
    console.log('Username:', this.username());
    console.log('Messages:', this.messages());
  }

  // Função para obter o username atual
  getCurrentUsername(): string {
    return this.accountService.currentUser()?.username || '';
  }

  // Função trackBy para otimizar a renderização da lista
  trackByMessageId(index: number, message: Message): any {
    return message.id;
  }
}
