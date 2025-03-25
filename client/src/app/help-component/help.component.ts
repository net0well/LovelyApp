// help.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  helpMessage: string = '';
  contactName: string = '';

  sendWhatsAppMessage() {
    if (!this.helpMessage) return;

    const phoneNumber = '16997147149';
    const message = this.contactName
      ? `Nome: ${this.contactName}\n\nMensagem: ${this.helpMessage}`
      : this.helpMessage;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    // Reset form
    this.helpMessage = '';
    this.contactName = '';
  }
}

export default HelpComponent;
