import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalDataService {

  private _message = signal<string[]>([]);

  get messages() {
    return this._message;
  }

  addMessage(message: string) {
    this._message.update(messages => [...messages, message]);
  }

  clearMessages() {
    this._message.set([]);
  }
}
