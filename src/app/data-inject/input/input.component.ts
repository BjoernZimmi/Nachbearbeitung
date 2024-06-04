import { Component, Input } from '@angular/core';
import { DataService } from '../data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styles: ``
})

export class InputComponent {

  @Input() parantData!: string;

  constructor(public dataService: DataService) {
  }

  setInputData(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.dataService.setData(inputElement.value);
  }

}
