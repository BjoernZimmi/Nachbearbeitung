import { Component, NgModuleRef } from '@angular/core';
import { SignalDataService } from './service/signal-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-inject-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-inject-signal.component.html'
})

export class DataInjectSignalComponent {

  newMessage: string = '';

  constructor(public signalDataService: SignalDataService) {}

  addMessage() {
    if (this.newMessage.trim()) {
      this.signalDataService.addMessage(this.newMessage);
      this.newMessage = '';
    }
  }

  clearMessage() {
    this.signalDataService.clearMessages();
  }

}
