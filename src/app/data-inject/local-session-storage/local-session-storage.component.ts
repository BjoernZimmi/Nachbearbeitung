import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-local-session-storage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './local-session-storage.component.html',
  styles: ``
})
export class LocalSessionStorageComponent {

  localValue: string | null | undefined;

  setStorage(input: HTMLInputElement) {
    localStorage.setItem('localKey', input.value);

    this.localValue = localStorage.getItem('localKey');
    this.setLocalStorage('local', input.value);
  }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage() {
    const value = localStorage.getItem('local');
    return value ? JSON.parse(value) : null;
  }

}
