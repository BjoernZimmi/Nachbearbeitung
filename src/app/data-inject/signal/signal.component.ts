import { Component, Inject, OnInit, signal } from '@angular/core';
import { DataService } from '../data-service';
import { MY_TOKEN } from '../../../assets/token/token';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  providers: [{provide: MY_TOKEN, useValue: 'Hello DACHPC !!!'}]
})
export class SignalComponent implements OnInit {

  dataSignal = signal<string>('');

  constructor(private dataService: DataService, @Inject(MY_TOKEN) private token: string) {}

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

    console.log(this.token);
  }
  
}
