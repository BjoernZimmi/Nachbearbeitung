import { Component, OnInit, effect, runInInjectionContext, signal } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styles: ``
})
export class SignalComponent implements OnInit {

  dataSignal = signal<string>('');

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Initialisiere das Signal mit dem aktuellen Wert
    this.dataSignal.set(this.dataService.getData());

    // Setup interval, um auf Änderungen zu reagieren
    setInterval(() => {
      const newData = this.dataService.getData();
      if (this.dataSignal() !== newData) {
        this.dataSignal.set(newData);
      }
    }, 1000); // Überprüft alle 1000 Millisekunden (1 Sekunde)
  }
}
