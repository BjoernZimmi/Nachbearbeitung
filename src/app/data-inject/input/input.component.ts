import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styles: ``
})

export class InputComponent implements OnInit {

  inputFromHtml: string = '';
  getDataString = '';

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
  }

  setInputData(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.dataService.setData(inputElement.value);
    this.getDataString = this.dataService.getData();
    this.inputFromHtml = inputElement.value;
  }

}
